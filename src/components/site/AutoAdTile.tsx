import { useEffect, useRef, useState } from "react";
import {
  adBadges,
  adVideoSrc,
  optimize,
  videoPoster,
  type Ad,
} from "../../data/ads";
import { track } from "../../lib/track";

/**
 * An ad that plays by itself — no play button, no frame.
 *
 * Kept cheap on purpose:
 *   - nothing is fetched until the tile is within 300px of the viewport, so a
 *     visitor who never scrolls past the fold downloads no video at all
 *   - video is requested at w_600, not full size
 *   - playback pauses the moment the tile leaves the screen, so phones aren't
 *     decoding video they can't see
 *   - the poster frame (one still) carries the tile until the video is ready,
 *     so the grid never shows a gap
 */
export function AutoAdTile({ ad }: { ad: Ad }) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const badges = adBadges(ad.label);
  const poster = ad.type === "video" ? videoPoster(ad.url) : optimize(ad.url, "grid");

  // Two thresholds: one to start fetching, one to start playing.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fetcher = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setNear(true),
      { rootMargin: "300px" }
    );
    const player = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );
    fetcher.observe(el);
    player.observe(el);
    return () => {
      fetcher.disconnect();
      player.disconnect();
    };
  }, []);

  // `ready` and `near` are dependencies too: the tile can scroll into view
  // before the video element exists, and without them the play attempt would
  // fire once against a null ref and never run again.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || ad.type !== "video") return;
    if (visible) {
      const started = video.play();
      // Autoplay can still be refused (Low Power Mode); the poster stays up.
      if (started) started.catch(() => {});
      track("video_play", { ad: ad.key, auto: true });
    } else {
      video.pause();
    }
  }, [visible, near, ready, ad.type, ad.key]);

  return (
    <figure ref={ref} className="mb-4 break-inside-avoid sm:mb-5">
      <div
        className={`relative w-full overflow-hidden rounded-xl ${
          loaded || ready ? "" : "aspect-[9/16] animate-pulse bg-navy/5"
        }`}
      >
        {ad.type === "video" ? (
          <>
            <img
              src={poster}
              alt={ad.title}
              loading="lazy"
              decoding="async"
              onLoad={() => setLoaded(true)}
              className={`w-full ${ready ? "invisible absolute inset-0" : "block"}`}
            />
            {near && (
              <video
                ref={videoRef}
                src={adVideoSrc(ad.url)}
                poster={poster}
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={ad.title}
                onCanPlay={() => setReady(true)}
                className={ready ? "block w-full" : "absolute inset-0 h-full w-full opacity-0"}
              />
            )}
          </>
        ) : (
          <img
            src={poster}
            alt={ad.title}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={loaded ? "block w-full" : "absolute inset-0 h-full w-full object-cover opacity-0"}
          />
        )}
      </div>

      <figcaption className="mt-2 flex flex-wrap gap-1.5">
        {badges.map((b) => (
          <span
            key={b}
            className="rounded-full bg-navy/6 px-2 py-0.5 text-[10px] font-medium text-navy/55"
          >
            {b}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
