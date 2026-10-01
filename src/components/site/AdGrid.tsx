import { useCallback, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { publishedAds } from "../../data/ads";
import { AdTile } from "./AdTile";
import { AdLightbox } from "./AdLightbox";
import { categoryLabel, WORK_PAGE } from "../../data/work";
import type { Ad } from "../../data/ads";

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

      {/* Columns, not a grid: every ad keeps its own shape and nothing is cropped. */}
      <div className="mt-6 columns-2 gap-4 sm:gap-5 md:columns-3 lg:columns-4">
        {shown.map((ad) => (
          <AdTile key={ad.key} ad={ad} onOpen={() => setOpen(ad)} />
        ))}
      </div>

      {open && <AdLightbox ad={open} onClose={() => setOpen(null)} />}
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
