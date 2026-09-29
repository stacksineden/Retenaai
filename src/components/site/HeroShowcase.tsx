import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { caseStudies } from "../../content";
import { adVideoSrc, publishedAds, videoPoster } from "../../data/ads";
import { HOMEPAGE_ADS } from "../../data/home";

/**
 * The hero visual: the three layers in one picture — an ad, the page it sends
 * people to, and the conversation that closes the sale.
 *
 * Both the ad and the page are real work, not mockups. The chat card is the
 * one illustrated element; swap it for a screenshot of our own WhatsApp when
 * there's one with customer details blurred.
 *
 * Speed: the poster still paints with the rest of the hero, and the video is
 * only attached once the page has finished loading, so it never competes with
 * first paint. Below `lg` the whole thing is dropped — the fold on a phone is
 * better spent on the headline and the buttons.
 */
export function HeroShowcase() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const ad =
    publishedAds.find((a) => a.key === HOMEPAGE_ADS[0] && a.type === "video") ??
    publishedAds.find((a) => a.type === "video");
  const study = caseStudies.find((c) => c.screenshots.length > 0);

  /*
   * The element is always in the tree with preload="none", so nothing is
   * fetched during first paint; calling play() after the load event is what
   * pulls the bytes. Gating the element itself on state raced React's mount
   * and left the video out of the DOM entirely.
   */
  useEffect(() => {
    const start = () => {
      const video = videoRef.current;
      if (!video) return;
      // The showcase is display:none below lg, but calling play() would still
      // pull the whole file — so a phone would pay for a video it never shows.
      if (!window.matchMedia("(min-width: 1024px)").matches) return;
      // React sets `muted` as an attribute, and the autoplay policy reads the
      // property — without this the browser treats it as sound-on and blocks.
      video.muted = true;
      const played = video.play();
      if (played) played.then(() => setPlaying(true)).catch(() => {});
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });

    // A tab opened in the background won't start video, and never retries on
    // its own — so the hero would sit frozen once the visitor switches to it.
    const onVisible = () => document.visibilityState === "visible" && start();
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      window.removeEventListener("load", start);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  if (!ad) return null;
  const poster = videoPoster(ad.url);

  return (
    <div className="relative hidden lg:block" aria-hidden="true">
      {/* Layer 1 — the ad. */}
      <div className="relative ml-auto w-[64%] overflow-hidden rounded-[1.4rem] bg-navy/5 shadow-premium">
        <img
          src={poster}
          alt=""
          className={playing ? "invisible block w-full" : "block w-full"}
        />
        <video
          ref={videoRef}
          src={adVideoSrc(ad.url)}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Layer 2 — the page it sends people to. */}
      {study && (
        <div className="absolute bottom-20 left-0 w-[54%] overflow-hidden rounded-xl border border-navy/10 bg-white shadow-premium">
          <div className="flex items-center gap-1.5 border-b border-navy/8 bg-navy-50 px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-navy/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-navy/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-navy/15" />
          </div>
          <img
            src={study.screenshots[0].src}
            alt=""
            loading="lazy"
            decoding="async"
            className="block w-full"
          />
        </div>
      )}

      {/* Layer 3 — the conversation. Illustrated, not a screenshot. */}
      <div className="absolute bottom-0 right-0 w-[56%] rounded-2xl border border-navy/10 bg-white p-3.5 shadow-premium">
        <div className="flex justify-start">
          <p className="max-w-[80%] rounded-2xl rounded-tl-sm bg-navy-50 px-3 py-2 text-[11px] leading-snug text-navy/70">
            Good evening, is this still available?
          </p>
        </div>
        <div className="mt-2 flex justify-end">
          <p className="max-w-[80%] rounded-2xl rounded-br-sm bg-navy px-3 py-2 text-[11px] leading-snug text-white/90">
            Yes — what size are you looking for?
          </p>
        </div>
        <p className="mt-2.5 flex items-center gap-1.5 text-[10px] font-medium text-navy/45">
          <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-amber text-ink">
            <Check size={9} strokeWidth={4} />
          </span>
          Answered in seconds, 11:42pm
        </p>
      </div>
    </div>
  );
}
