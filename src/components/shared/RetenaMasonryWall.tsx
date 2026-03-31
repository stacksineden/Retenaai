import { optimizeUrl } from "@/lib/utils";
import { masonary_assets } from "@/modelDataset";
import { useMemo } from "react";

// === FULL ASSET LIST (Raw Data) ===


// Shuffle Function (Fisher-Yates)
const shuffleArray = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const RetenaMasonryWall = () => {
  // === DATA PREPARATION ===
  // We shuffle once on mount and split into 4 columns
  const columns = useMemo(() => {
    const shuffled = shuffleArray(masonary_assets);
    const colSize = Math.ceil(shuffled.length / 4);

    // Split into 4 chunks
    const c1 = shuffled.slice(0, colSize);
    const c2 = shuffled.slice(colSize, colSize * 2);
    const c3 = shuffled.slice(colSize * 2, colSize * 3);
    const c4 = shuffled.slice(colSize * 3);

    // Duplicate each column to create the "Infinite Loop" effect
    return [
      [...c1, ...c1],
      [...c2, ...c2],
      [...c3, ...c3],
      [...c4, ...c4],
    ];
  }, []); // Run once on mount

  // === ASSET RENDERER ===
  const renderAsset = (src: string, index: number) => {
    const isVideo =
      src.endsWith(".mp4") || src.endsWith(".mov") || src.includes("/video/");
    const optimizedSrc = optimizeUrl(src);

    return (
      <div
        key={`${src}-${index}`}
        className="w-full shrink-0 rounded-xl overflow-hidden border border-[#14213D] shadow-lg bg-[#14213D]/20 relative"
      >
        {isVideo ? (
          <video
            src={optimizedSrc}
            // Auto-generate poster to prevent black screens
            poster={optimizedSrc
              .replace(".mp4", ".jpg")
              .replace(".mov", ".jpg")}
            className="w-full h-auto block object-cover opacity-90"
            autoPlay
            muted
            loop
            playsInline
            preload="none" // Essential for pages with many videos
          />
        ) : (
          <img
            src={optimizedSrc}
            alt={`Asset ${index}`}
            loading="lazy" // Ensures images off-screen don't bog down initial load
            decoding="async" // Prepares image decoding off the main thread
            className="w-full h-auto block object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        )}
      </div>
    );
  };

  return (
    <div className="relative w-full bg-[#000000] py-20 overflow-hidden">
      {/* === HEADER === */}
      <div className="relative z-20 text-center mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          <span className="text-[#FCA311]">5,000+</span> High-Converting Assets Built.
        </h2>
        <p className="text-[#E5E5E5] text-sm md:text-lg max-w-2xl mx-auto opacity-70">
          From Lagos to London. We engineer the premium visuals that scale modern African brands.
        </p>
      </div>

      {/* === THE WALL === */}
      <div className="relative w-full h-[800px] overflow-hidden flex justify-center gap-4 px-4">
        {/* GRADIENTS */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#000000] via-[#000000]/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent z-10 pointer-events-none"></div>

        {/* COL 1: UP (Mobile & Desktop) */}
        <div className="w-1/2 md:w-1/4 flex flex-col gap-6 animate-scroll-up">
          {columns[0].map((src, idx) => renderAsset(src, idx))}
        </div>

        {/* COL 2: DOWN (Mobile & Desktop) */}
        <div className="w-1/2 md:w-1/4 flex flex-col gap-6 animate-scroll-down">
          {columns[1].map((src, idx) => renderAsset(src, idx))}
        </div>

        {/* COL 3: UP (Desktop Only) */}
        <div className="hidden md:flex md:w-1/4 flex-col gap-6 animate-scroll-up">
          {columns[2].map((src, idx) => renderAsset(src, idx))}
        </div>

        {/* COL 4: DOWN (Desktop Only) */}
        <div className="hidden md:flex md:w-1/4 flex-col gap-6 animate-scroll-down">
          {columns[3].map((src, idx) => renderAsset(src, idx))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-up {
          animation: scroll-up 40s linear infinite;
        }
        .animate-scroll-down {
          animation: scroll-down 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default RetenaMasonryWall;
