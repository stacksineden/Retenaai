import { useMemo } from "react";
import { publishedAds } from "../../data/ads";
import { HOMEPAGE_ADS } from "../../data/home";
import { AutoAdTile } from "./AutoAdTile";

/**
 * The homepage ad strip — a hand-picked set, in the order it's listed in
 * HOMEPAGE_ADS, playing by itself with no frame and no play button.
 *
 * An ad listed there but not yet labelled and published is skipped rather than
 * leaving a hole, and the whole strip disappears if none of them are live.
 */
export function AdReel() {
  const ads = useMemo(() => {
    const byKey = new Map(publishedAds.map((ad) => [ad.key, ad]));
    return HOMEPAGE_ADS.flatMap((key) => {
      const ad = byKey.get(key);
      return ad ? [ad] : [];
    });
  }, []);

  if (ads.length === 0) return null;

  return (
    <div className="columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
      {ads.map((ad) => (
        <AutoAdTile key={ad.key} ad={ad} />
      ))}
    </div>
  );
}
