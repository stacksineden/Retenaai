import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, SITE } from "../data/content";
import { Button } from "./ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(20,33,61,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          to="/"
          className="focus-ring rounded-md transition-transform hover:scale-[1.02]"
          aria-label={`${SITE.name} home`}
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === location.pathname ||
              (location.hash && link.href === `/${location.hash}`);

            return (
              <Link
                key={link.href}
                to={link.href}
                className={`group relative text-sm font-medium transition-colors focus-ring rounded-sm ${
                  active ? "text-navy" : "text-navy/70 hover:text-navy"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-amber transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button to="/free-ad" variant="primary" size="md">
            Get one ad free
          </Button>
        </div>

        <button
          className="focus-ring rounded-md p-2 text-navy md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden border-t border-navy/10 bg-white/97 backdrop-blur-xl md:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-5">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={link.href}
                    className="block rounded-xl px-3 py-3.5 text-base font-medium text-navy/80 transition-colors hover:bg-navy-50 hover:text-navy"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <Link
                to="/free-ad"
                className="mt-3 inline-flex items-center justify-center rounded-full bg-navy px-5 py-3.5 text-sm font-semibold text-white shadow-premium"
              >
                Get one ad free
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
