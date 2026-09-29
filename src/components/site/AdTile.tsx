import { useState } from "react";
import { Play } from "lucide-react";
import { optimize, videoPoster, adBadges, type Ad } from "../../data/ads";
import { track } from "../../lib/track";

/**
 * One ad.
 *
 * No frame and no crop: the creative is shown at its own aspect ratio, because
 * a 9:16 ad cut into a square is a different ad. A tinted block holds the space
 * while the image loads, so the grid doesn't flash empty on a slow connection.
 */
export function AdTile({ ad, onOpen }: { ad: Ad; onOpen: () => void }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const badges = adBadges(ad.label);
  const poster =
    ad.type === "video" ? videoPoster(ad.url) : optimize(ad.url, "grid");

  return (
    <figure className="mb-4 break-inside-avoid sm:mb-5">
      <button
        type="button"
        onClick={() => {
          onOpen();
          if (ad.type === "video") track("video_play", { ad: ad.key });
        }}
        className={`group relative block w-full overflow-hidden rounded-2xl focus-ring ${
          loaded
            ? ""
            : `aspect-[4/5] bg-navy/5 ${failed ? "" : "animate-pulse"}`
        }`}
        aria-label={ad.type === "video" ? `Play ${ad.title}` : `View ${ad.title}`}
      >
        {/*
         * While loading, the image fills the placeholder box invisibly rather
         * than being hidden: a display:none image never intersects the
         * viewport, so loading="lazy" would never fetch it. Once it's in, the
         * box gives way to the image's own shape.
         */}
        {!failed && (
          <img
            src={poster}
            alt={ad.title}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={
              loaded
                ? "block w-full transition-transform duration-700 group-hover:scale-[1.03]"
                : "absolute inset-0 h-full w-full object-cover opacity-0"
            }
          />
        )}

        {ad.type === "video" && loaded && (
          <span className="absolute inset-0 grid place-items-center">
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
