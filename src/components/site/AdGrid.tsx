import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Play, X } from "lucide-react";
import {
  adBadges,
  optimize,
  publishedAds,
  videoPoster,
  type Ad,
} from "../../data/ads";
import { categoryLabel, WORK_PAGE } from "../../data/work";
import { track } from "../../lib/track";

/**
 * The full ad portfolio, filtered by category.
 *
 * The category lives in ?category= so a filtered view can be linked straight
 * into an outreach message — the behaviour the old lookbook had.
 *
 * Only labelled, published ads are here; the gate is in src/data/ads.ts.
 */
export function AdGrid() {
  const [params, setParams] = useSearchParams();
  const [open, setOpen] = useState<Ad | null>(null);

  const categories = useMemo(
    () => [...new Set(publishedAds.map((a) => a.category))],
    []
  );

  const active = params.get("category");
  const shown = useMemo(
    () =>
      active ? publishedAds.filter((a) => a.category === active) : publishedAds,
    [active]
  );

  const select = useCallback(
    (category: string | null) => {
      const next = new URLSearchParams(params);
      if (category) next.set("category", category);
      else next.delete("category");
      setParams(next, { replace: true });
    },
    [params, setParams]
  );

  if (publishedAds.length === 0) {
    return (
      <p className="mt-6 max-w-xl text-base text-navy/55">
        {WORK_PAGE.ads.empty}
      </p>
    );
  }

  return (
    <>
      {categories.length > 1 && (
        <div className="mt-8 flex flex-wrap gap-2">
          <FilterChip active={!active} onClick={() => select(null)}>
            {WORK_PAGE.ads.all}
          </FilterChip>
          {categories.map((category) => (
            <FilterChip
              key={category}
              active={active === category}
              onClick={() => select(category)}
            >
              {categoryLabel(category)}
            </FilterChip>
          ))}
        </div>
      )}

      <p className="mt-6 text-sm text-navy/50" aria-live="polite">
        {WORK_PAGE.ads.countLabel(shown.length)}
      </p>

      <ul className="mt-6 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
        {shown.map((ad) => (
          <li key={ad.key}>
            <AdTile ad={ad} onOpen={() => setOpen(ad)} />
          </li>
        ))}
      </ul>

      {open && <Lightbox ad={open} onClose={() => setOpen(null)} />}
    </>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`min-h-[44px] rounded-full px-4 text-sm font-medium transition-colors focus-ring ${
        active
          ? "bg-navy text-white"
          : "bg-navy/6 text-navy/70 hover:bg-navy/10 hover:text-navy"
      }`}
    >
      {children}
    </button>
  );
}

function AdTile({ ad, onOpen }: { ad: Ad; onOpen: () => void }) {
  const badges = adBadges(ad.label);
  const poster = ad.type === "video" ? videoPoster(ad.url) : optimize(ad.url, "grid");

  return (
    <figure>
      <button
        type="button"
        onClick={() => {
          onOpen();
          if (ad.type === "video") track("video_play", { ad: ad.key });
        }}
        className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl bg-navy/5 focus-ring"
        aria-label={ad.type === "video" ? `Play ${ad.title}` : `View ${ad.title}`}
      >
        <img
          src={poster}
          alt={ad.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {ad.type === "video" && (
          <span className="absolute inset-0 grid place-items-center bg-ink/20">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-amber text-ink shadow-amber-glow transition-transform group-hover:scale-110">
              <Play size={18} fill="currentColor" className="translate-x-[1px]" />
            </span>
          </span>
        )}
      </button>

      <figcaption className="mt-2.5 flex flex-wrap gap-1.5">
        {badges.map((b) => (
          <span
            key={b}
            className="rounded-full bg-navy/6 px-2.5 py-1 text-[11px] font-medium text-navy/60"
          >
            {b}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}

function Lightbox({ ad, onClose }: { ad: Ad; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ad.title}
      className="fixed inset-0 z-50 grid place-items-center bg-ink/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-ring"
      >
        <X size={22} />
      </button>

      <div
        className="max-h-[85vh] w-full max-w-lg overflow-hidden rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {ad.type === "video" ? (
          <video
            src={ad.url}
            controls
            autoPlay
            playsInline
            className="max-h-[85vh] w-full object-contain"
            aria-label={ad.title}
          />
        ) : (
          <img
            src={optimize(ad.url, "full")}
            alt={ad.title}
            className="max-h-[85vh] w-full object-contain"
          />
        )}
      </div>
    </div>
  );
}
