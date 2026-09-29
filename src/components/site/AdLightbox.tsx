import { useEffect } from "react";
import { X } from "lucide-react";
import { optimize, videoSrc, type Ad } from "../../data/ads";

/** Full-size view of one ad. Traps scroll and closes on Escape or backdrop. */
export function AdLightbox({ ad, onClose }: { ad: Ad; onClose: () => void }) {
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
            src={videoSrc(ad.url)}
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
