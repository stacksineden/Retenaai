import WebLayoutWrapper from "@/components/shared/WebLayoutWrapper";
import { Button } from "@/components/ui/button";
import { pin_cat } from "@/modelDataset";
import { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface ArchiveItem {
  id: number;
  url: string;
  category: string;
  type: "video" | "image" | null;
  title: string;
}

const getMediaType = (
  url: string | null | undefined,
): "video" | "image" | null => {
  if (!url) return null;
  const lowerUrl = url.toLowerCase();
  return lowerUrl.includes(".mp4") || lowerUrl.includes(".mov")
    ? "video"
    : "image";
};

// Cloudinary Dynamic Optimization
const optimizeMedia = (
  url: string,
  context: "grid" | "modal",
  type: "video" | "image" | null,
) => {
  if (!url || !url.includes("cloudinary")) return url;
  const splitUrl = url.split("/upload/");
  if (splitUrl.length !== 2) return url;

  if (context === "grid") {
    return `${splitUrl[0]}/upload/w_600,f_auto,q_auto/${splitUrl[1]}`;
  }
  if (context === "modal" && type === "image") {
    return `${splitUrl[0]}/upload/w_1600,f_auto,q_auto/${splitUrl[1]}`;
  }
  return url;
};

const getVideoPoster = (url: string) => {
  if (!url || !url.includes("cloudinary")) return "";
  return optimizeMedia(
    url.replace(".mp4", ".jpg").replace(".mov", ".jpg"),
    "grid",
    "image",
  );
};

const LookBook = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null);

  // --- STATE ---
  const [visibleCount, setVisibleCount] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");
  const loaderRef = useRef<HTMLDivElement>(null);

  // 1. Flatten and shuffle the base archive once on load
  const flatArchive = useMemo<ArchiveItem[]>(() => {
    const rawCategories = pin_cat[0];
    const flattened: ArchiveItem[] = [];
    let idCounter = 1;

    Object.entries(rawCategories).forEach(([categoryKey, urls]) => {
      urls.forEach((url: string) => {
        if (url && url.trim() !== "") {
          flattened.push({
            id: idCounter++,
            url: url,
            category: categoryKey,
            type: getMediaType(url),
            title: categoryKey.replace(/_/g, " ").toUpperCase() + " CAMPAIGN",
          });
        }
      });
    });

    return flattened.sort(() => Math.random() - 0.5);
  }, []);

  // 2. Filter the archive based on the search query
  const filteredArchive = useMemo(() => {
    if (!searchQuery.trim()) return flatArchive;

    const query = searchQuery.toLowerCase();
    return flatArchive.filter(
      (item) =>
        item.category.toLowerCase().includes(query) ||
        item.title.toLowerCase().includes(query),
    );
  }, [flatArchive, searchQuery]);

  // 3. Apply the infinite scroll slice to the FILTERED results
  const visibleArchive = filteredArchive.slice(0, visibleCount);

  // Filter related images from the FULL archive
  const relatedItems = selectedItem
    ? flatArchive.filter(
        (item) =>
          item.category === selectedItem.category &&
          item.id !== selectedItem.id,
      )
    : [];

  // Reset infinite scroll to top when the user types a new search
  useEffect(() => {
    setVisibleCount(12);
  }, [searchQuery]);

  // Infinite Scroll Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting) {
          setVisibleCount((prev) =>
            Math.min(prev + 12, filteredArchive.length),
          );
        }
      },
      { threshold: 0.1 },
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [filteredArchive.length]);

  return (
    <WebLayoutWrapper>
      <div className="min-h-screen bg-black text-white p-4 md:p-8 selection:bg-orange-500 selection:text-white">
        {/* PREMIUM HEADER & SEARCH BAR SECTION */}
        <div className="max-w-7xl mx-auto mb-10 pt-2 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-2 text-white leading-none">
              The LookBook
            </h1>
            <p className="text-neutral-500 text-sm md:text-base">
              Explore a curated collection of premium campaign aesthetics, built
              to elevate your brand's visual identity.
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-80 relative group">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 group-focus-within:text-white transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search by keyword (e.g., Hoodie, Senator)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 text-sm rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all"
            />
          </div>
        </div>

        {/* Empty State Fallback (If they search for something that doesn't exist) */}
        {visibleArchive.length === 0 && (
          <div className="max-w-7xl mx-auto text-center py-20">
            <p className="text-neutral-500 text-lg">
              No assets found matching "{searchQuery}".
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-white underline hover:text-neutral-300"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Masonry Grid Feed */}
        <div className="max-w-7xl mx-auto columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {visibleArchive.map((item: ArchiveItem) => (
            <div
              key={item.id}
              className="relative group cursor-pointer break-inside-avoid overflow-hidden rounded-xl shadow-sm hover:shadow-2xl hover:shadow-white/5 transition-all duration-300 bg-neutral-900 min-h-[250px] ring-1 ring-white/5"
              onClick={() => setSelectedItem(item)}
            >
              {item.type === "video" ? (
                <video
                  src={optimizeMedia(item.url, "grid", "video")}
                  poster={getVideoPoster(item.url)}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover opacity-0 transition-opacity duration-1000 ease-in-out"
                  onCanPlay={(e) =>
                    e.currentTarget.classList.remove("opacity-0")
                  }
                />
              ) : (
                <img
                  src={optimizeMedia(item.url, "grid", "image")}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover opacity-0 transition-opacity duration-1000 ease-in-out"
                  onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
                />
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-white text-xs font-bold uppercase tracking-wider mb-1">
                  {item.category.replace(/_/g, " ")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Invisible loader element */}
        {visibleCount < filteredArchive.length && (
          <div
            ref={loaderRef}
            className="h-20 w-full mt-8 flex items-center justify-center"
          >
            <div className="w-6 h-6 border-2 border-neutral-700 border-t-white rounded-full animate-spin"></div>
          </div>
        )}

        {/* Detail Modal View */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl transition-all">
            <div className="bg-neutral-950 overflow-hidden rounded-2xl max-w-6xl w-full max-h-[90vh] flex flex-col md:flex-row relative shadow-2xl ring-1 ring-white/10">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md hover:bg-white hover:text-black text-white rounded-full w-10 h-10 flex items-center justify-center transition"
              >
                ✕
              </button>

              <div className="md:w-3/5 bg-black relative flex items-center justify-center overflow-hidden min-h-[50vh]">
                {selectedItem.type === "video" ? (
                  <video
                    src={selectedItem.url}
                    autoPlay
                    loop
                    controls
                    className="w-full h-full max-h-[90vh] object-contain"
                  />
                ) : (
                  <img
                    src={optimizeMedia(selectedItem.url, "modal", "image")}
                    alt={selectedItem.title}
                    className="w-full h-full max-h-[90vh] object-contain"
                  />
                )}
              </div>

              <div className="md:w-2/5 p-8 flex flex-col bg-neutral-950 border-l border-white/5 overflow-hidden">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FCA311] mb-2">
                  {selectedItem.category.replace(/_/g, " ")} Series
                </span>
                <h2 className="text-3xl font-black mb-4 text-white">
                  Campaign Concept
                </h2>
                <p className="text-neutral-400 mb-8 text-sm">
                  This aesthetic was digitally engineered without a physical
                  photoshoot. Secure this visual identity for your brand's next
                  drop.
                </p>

                <Button
                  className="w-full bg-white text-black hover:bg-neutral-200 py-4 text-sm md:text-base rounded-lg font-bold uppercase tracking-wide transition-all duration-300 transform hover:scale-[0.98] shadow-lg mb-10"
                  onClick={() =>
                    navigate(
                      `/packages-billing?mode=starter_pack&aesthetic=${encodeURIComponent(selectedItem.category)}`,
                    )
                  }
                >
                  Book This Aesthetic
                </Button>

                {relatedItems.length > 0 && (
                  <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-4 border-b border-white/10 pb-2 sticky top-0 bg-neutral-950 z-10">
                      Explore This Collection
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {relatedItems.map((related: ArchiveItem) => (
                        <div
                          key={related.id}
                          className="cursor-pointer group overflow-hidden rounded-lg aspect-square bg-neutral-900 relative ring-1 ring-white/5"
                          onClick={() => setSelectedItem(related)}
                        >
                          {related.type === "video" ? (
                            <video
                              src={optimizeMedia(related.url, "grid", "video")}
                              poster={getVideoPoster(related.url)}
                              muted
                              playsInline
                              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                            />
                          ) : (
                            <img
                              src={optimizeMedia(related.url, "grid", "image")}
                              alt={related.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                            />
                          )}
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition duration-300"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </WebLayoutWrapper>
  );
};

export default LookBook;
