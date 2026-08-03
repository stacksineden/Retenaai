import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll on route change, and smooth-scrolls to the target when a
 * route carries a hash (e.g. /#pricing) — including when arriving from
 * another page, where the section isn't mounted until after navigation.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      return;
    }

    // Wait a frame so the destination section exists in the DOM.
    const id = hash.slice(1);
    const raf = requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: "smooth" });
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname, hash]);

  return null;
}
