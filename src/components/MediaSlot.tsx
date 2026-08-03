import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";
import type { MediaAsset, MediaRatio } from "../data/media";

const RATIO_CLASS: Record<string, string> = {
  "9:16": "aspect-[9/16]",
  "4:5": "aspect-[4/5]",
  "3:4": "aspect-[3/4]",
  "1:1": "aspect-square",
  "16:9": "aspect-video",
};

const IMAGE_EXT = /\.(jpe?g|png|webp|avif|gif|svg)(\?.*)?$/i;
const VIDEO_EXT = /\.(mp4|webm|ogv|mov|m4v)(\?.*)?$/i;

/**
 * Works out whether a slot holds a video or an image from the file extension,
 * so you can paste any path into media.ts without also remembering to update
 * `kind`. An explicit `kind` still wins — set it when the URL has no extension.
 */
function resolveKind(asset: MediaAsset): "video" | "image" {
  if (IMAGE_EXT.test(asset.src)) return "image";
  if (VIDEO_EXT.test(asset.src)) return "video";
  return asset.kind ?? "video";
}

type MediaSlotProps = {
  asset: MediaAsset;
  ratio?: MediaRatio;
  className?: string;
  /** Label drawn on the placeholder so empty slots still read as intentional. */
  placeholderLabel?: string;
  rounded?: string;
};

/**
 * Renders a video or image once `asset.src` is filled in (see src/data/media.ts).
 * Until then it draws a branded placeholder, so the layout is never broken and
 * the page can be reviewed and shipped before the assets land.
 *
 * Videos only play while on screen. With a dozen clips on the home page,
 * autoplaying all of them at once would make the page crawl.
 */
export function MediaSlot({
  asset,
  ratio = "9:16",
  className = "",
  placeholderLabel,
  rounded = "rounded-2xl",
}: MediaSlotProps) {
  const [failed, setFailed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  // Start loading slightly before it scrolls into view.
  const inView = useInView(containerRef, { margin: "250px 0px" });

  const hasSrc = Boolean(asset.src) && !failed;
  const kind = resolveKind(asset);
  const ratioClass = RATIO_CLASS[ratio] ?? RATIO_CLASS["9:16"];

  useEffect(() => {
    const video = videoRef.current;
    if (!video || kind !== "video" || !hasSrc) return;

    if (inView) {
      // Rejects if the browser blocks playback — nothing we can do, so ignore.
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, kind, hasSrc]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-navy ${ratioClass} ${rounded} ${className}`}
    >
      {hasSrc ? (
        kind === "video" ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={asset.src}
            poster={asset.poster || undefined}
            muted
            loop
            playsInline
            preload={inView ? "metadata" : "none"}
            aria-label={asset.alt}
            onError={() => setFailed(true)}
          />
        ) : (
          <img
            className="h-full w-full object-cover"
            src={asset.src}
            alt={asset.alt}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
        )
      ) : (
        <Placeholder label={placeholderLabel ?? asset.alt} />
      )}
    </div>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div
      className="absolute inset-0 grid place-items-center"
      style={{
        background:
          "linear-gradient(150deg, #14213d 0%, #0d1730 55%, #000000 100%)",
      }}
    >
      {/* Slow sweeping sheen so empty slots still feel alive */}
      <motion.div
        aria-hidden
        className="absolute inset-y-0 w-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(252,163,17,0.10) 50%, transparent 100%)",
        }}
        animate={{ x: ["-120%", "220%"] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(229,229,229,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(229,229,229,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-3 px-5 text-center">
        <span className="grid h-11 w-11 place-items-center rounded-full border border-amber/40 bg-amber/10 text-amber">
          <Play size={16} className="translate-x-[1px]" fill="currentColor" />
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/45">
          {label}
        </span>
      </div>
    </div>
  );
}
