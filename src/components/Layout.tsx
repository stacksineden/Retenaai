import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { ScrollProgress } from "./ScrollProgress";
import { ImplementationsFooter, ImplementationsHeader } from "./ImplementationsChrome";

/** Unlisted pages that get their own minimal header and footer. */
const STANDALONE = new Set(["/implementations"]);

export function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const standalone = STANDALONE.has(pathname.replace(/\/$/, ""));

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <ScrollToTop />
      <ScrollProgress />
      {standalone ? <ImplementationsHeader /> : <Navbar />}
      <main className="flex-1">{children}</main>
      {standalone ? <ImplementationsFooter /> : <Footer />}
    </div>
  );
}
