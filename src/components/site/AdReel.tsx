import { useMemo, useState } from "react";
import { publishedAds, type Ad } from "../../data/ads";
import { AdTile } from "./AdTile";
import { AdLightbox } from "./AdLightbox";

/**
 * A sample of the ad portfolio for the homepage.
 *
 * Takes one ad per category before repeating, and puts videos first within a
 * category, so a visitor sees the range of the work instead of four
 * near-identical stills from whichever campaign leads the dataset.
 *
 * Renders nothing while no ads are labelled and published.
 */
export function AdReel({ limit = 8 }: { limit?: number }) {
  const [open, setOpen] = useState<Ad | null>(null);

  const ads = useMemo(() => {
    const byCategory = new Map<string, Ad[]>();
    for (const ad of publishedAds) {
      const list = byCategory.get(ad.category) ?? [];
      list.push(ad);
      byCategory.set(ad.category, list);
    }

    const queues = [...byCategory.values()].map((list) =>
      [...list].sort(
        (a, b) => Number(b.type === "video") - Number(a.type === "video")
      )
    );

    const picked: Ad[] = [];
    for (let round = 0; picked.length < limit; round++) {
      const before = picked.length;
      for (const queue of queues) {
        if (picked.length >= limit) break;
        if (queue[round]) picked.push(queue[round]);
      }
      if (picked.length === before) break;
    }
    return picked;
  }, [limit]);

  if (ads.length === 0) return null;

  return (
    <>
      <div className="columns-2 gap-4 sm:gap-5 md:columns-3 lg:columns-4">
        {ads.map((ad) => (
          <AdTile key={ad.key} ad={ad} onOpen={() => setOpen(ad)} />
        ))}
      </div>
      {open && <AdLightbox ad={open} onClose={() => setOpen(null)} />}
    </>
  );
}
