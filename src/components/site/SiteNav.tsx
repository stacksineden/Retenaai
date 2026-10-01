import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "../Logo";
import { WhatsAppCta } from "./WhatsAppCta";
import { WHATSAPP_MESSAGES } from "../../lib/whatsapp";

const LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Work", href: "/work" },
  { label: "Free audit", href: "/#free-audit" },
  { label: "Refer a business", href: "/#refer" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-white/95 shadow-[0_1px_0_0_rgba(20,33,61,0.08)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          to="/"
          className="flex min-h-[44px] items-center focus-ring rounded-md"
          aria-label="RetenaAI home"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="flex min-h-[44px] items-center text-sm font-medium text-navy/70 transition-colors hover:text-navy focus-ring rounded-sm"
            >
              {link.label}
            </Link>
          ))}
          <WhatsAppCta
            message={WHATSAPP_MESSAGES.audit}
            event="audit_click_nav"
            variant="primary"
            className="!text-sm"
          >
            Book a free audit
          </WhatsAppCta>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-12 w-12 place-items-center rounded-md text-navy focus-ring md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy/10 bg-white md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[48px] items-center rounded-xl px-3 text-base font-medium text-navy/80 hover:bg-navy-50 hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
