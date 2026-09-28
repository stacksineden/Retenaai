import { MessageCircle } from "lucide-react";
import { track } from "../../lib/track";
import { WHATSAPP_MESSAGES, whatsappUrl } from "../../lib/whatsapp";

/**
 * Fixed WhatsApp button, phones only — most visitors arrive from a forwarded
 * WhatsApp link and never scroll back up. Sits above the home indicator on
 * iPhones via safe-area padding.
 */
export function StickyWhatsApp() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-lg md:hidden">
      <a
        href={whatsappUrl(WHATSAPP_MESSAGES.audit)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("audit_click_sticky")}
        className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-amber px-6 text-base font-semibold text-ink shadow-amber-glow focus-ring"
      >
        <MessageCircle size={20} />
        Book a free business audit
      </a>
    </div>
  );
}
