import type { ReactNode } from "react";
import { track, type TrackEvent } from "../../lib/track";
import { whatsappUrl } from "../../lib/whatsapp";

type Variant = "primary" | "amber" | "outline" | "plain";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-navy text-white shadow-premium hover:bg-navy-700 hover:-translate-y-0.5",
  amber:
    "bg-amber text-ink shadow-amber-glow hover:bg-amber-400 hover:-translate-y-0.5",
  outline:
    "border border-navy/15 bg-white text-navy hover:border-navy/35 hover:-translate-y-0.5",
  plain: "text-navy underline decoration-amber decoration-2 underline-offset-4",
};

/**
 * Opens WhatsApp with a prefilled message, and fires its own tracking event so
 * each button position can be told apart. Min height 48px for tap targets.
 */
export function WhatsAppCta({
  message,
  event,
  children,
  variant = "amber",
  className = "",
  fullWidth = false,
}: {
  message: string;
  event: TrackEvent;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  fullWidth?: boolean;
}) {
  const isButton = variant !== "plain";

  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track(event)}
      className={`inline-flex min-h-[48px] items-center justify-center gap-2 text-sm font-semibold transition-all focus-ring md:text-base ${
        isButton ? "rounded-full px-7 py-3.5" : ""
      } ${VARIANTS[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </a>
  );
}
