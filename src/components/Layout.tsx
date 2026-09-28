import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { ScrollProgress } from "./ScrollProgress";
import { ImplementationsFooter, ImplementationsHeader } from "./ImplementationsChrome";
import { SiteNav } from "./site/SiteNav";
import { SiteFooter } from "./site/SiteFooter";
import { StickyWhatsApp } from "./site/StickyWhatsApp";

/** Unlisted pages that get their own minimal header and footer. */
const STANDALONE = new Set(["/implementations"]);

/** The Nigerian site: its own nav, footer and a sticky WhatsApp button. */
const MAIN_SITE = new Set(["/", "/work"]);

export function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, "") || "/";
  const standalone = STANDALONE.has(path);
  const mainSite = MAIN_SITE.has(path) || path.startsWith("/work/");

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <ScrollToTop />
      <ScrollProgress />
      {standalone ? <ImplementationsHeader /> : mainSite ? <SiteNav /> : <Navbar />}
      <main className="flex-1">{children}</main>
      {standalone ? <ImplementationsFooter /> : mainSite ? <SiteFooter /> : <Footer />}
      {mainSite && <StickyWhatsApp />}
    </div>
  );
}
