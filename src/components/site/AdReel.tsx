import { useState } from "react";
import { Play } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";
import {
  adBadges,
  optimize,
  publishedAds,
  videoPoster,
  type Ad,
} from "../../data/ads";
import { track } from "../../lib/track";

/**
 * 3–4 ads in phone frames. Click-to-play with a poster image; nothing
 * autoplays and no video bytes load until a visitor asks for them.
 *
 * Renders nothing while no ads are labelled and published.
 */
export function AdReel({ limit = 4 }: { limit?: number }) {
  const ads = publishedAds.slice(0, limit);
  if (ads.length === 0) return null;

  return (
    <ul className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {ads.map((ad) => (
        <li key={ad.key}>
          <AdCard ad={ad} />
        </li>
      ))}
    </ul>
  );
}

function AdCard({ ad }: { ad: Ad }) {
  const [playing, setPlaying] = useState(false);
  const badges = adBadges(ad.label);

  return (
    <figure>
      <PhoneFrame>
        {ad.type === "video" && playing ? (
          <video
            src={ad.url}
            controls
            autoPlay
            playsInline
            className="h-full w-full object-cover"
            aria-label={ad.title}
          />
        ) : (
          <button
            type="button"
            onClick={() => {
              if (ad.type === "video") {
                setPlaying(true);
                track("video_play", { ad: ad.key });
              }
            }}
            className="group relative block h-full w-full focus-ring"
            aria-label={ad.type === "video" ? `Play ${ad.title}` : ad.title}
          >
            <img
              src={ad.type === "video" ? videoPoster(ad.url) : optimize(ad.url, "grid")}
              alt={ad.title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            {ad.type === "video" && (
              <span className="absolute inset-0 grid place-items-center bg-ink/20">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-amber text-ink shadow-amber-glow transition-transform group-hover:scale-110">
                  <Play size={18} fill="currentColor" className="translate-x-[1px]" />
                </span>
              </span>
            )}
          </button>
        )}
      </PhoneFrame>

      <figcaption className="mt-3 flex flex-wrap justify-center gap-1.5">
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
