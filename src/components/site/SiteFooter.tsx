import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { SITE } from "../../data/content";
import { FOOTER } from "../../data/home";
import { WHATSAPP_DISPLAY, WHATSAPP_MESSAGES, whatsappUrl } from "../../lib/whatsapp";

/** Same address the creative site uses, so it's only written down once. */
const EMAIL = SITE.email;

export function SiteFooter() {
  return (
    <footer className="gradient-dark text-white">
      <div className="container-page py-14 pb-28 md:pb-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo dark />
            <p className="mt-4 text-sm text-white/55">
              {FOOTER.name}
              <br />
              {FOOTER.location}
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.audit)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center text-white/70 transition-colors hover:text-amber"
            >
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex min-h-[44px] items-center text-white/70 transition-colors hover:text-amber"
            >
              {EMAIL}
            </a>
            <a
              href="/#refer"
              className="inline-flex min-h-[44px] items-center text-white/70 transition-colors hover:text-amber"
            >
              {FOOTER.refer}
            </a>
            <Link
              to="/creative"
              className="inline-flex min-h-[44px] items-center text-white/70 transition-colors hover:text-amber"
            >
              {FOOTER.creative}
            </Link>
            <Link
              to="/privacy"
              className="inline-flex min-h-[44px] items-center text-white/70 transition-colors hover:text-amber"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} {FOOTER.name}
        </p>
      </div>
    </footer>
  );
}
