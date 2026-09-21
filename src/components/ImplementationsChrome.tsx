import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { SITE } from "../data/content";

/**
 * Header and footer for /implementations only. The main site's navbar and
 * footer would put the ad-creative product, pricing and "Get one ad free" on a
 * page for a different buyer, so this page gets its own minimal chrome.
 * The logo is deliberately not a link back to the main site.
 */
export function ImplementationsHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/85 shadow-[0_1px_0_0_rgba(20,33,61,0.08)] backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between">
        <Logo />
        <button
          type="button"
          onClick={() =>
            document.getElementById("quote")?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-premium transition-all hover:-translate-y-0.5 hover:bg-navy-700 focus-ring"
        >
          Tell us what's broken
        </button>
      </div>
    </header>
  );
}

export function ImplementationsFooter() {
  return (
    <footer className="gradient-dark text-white">
      <div className="container-page flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <Logo dark />
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/55">
          <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-amber">
            {SITE.email}
          </a>
          <Link to="/privacy" className="transition-colors hover:text-amber">
            Privacy Policy
          </Link>
          <span className="text-white/35">© {new Date().getFullYear()} {SITE.name}</span>
        </div>
      </div>
    </footer>
  );
}
