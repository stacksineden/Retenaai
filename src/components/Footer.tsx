import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { Logo } from "./Logo";
import { HAS_REGISTERED_ENTITY, LEGAL, SITE } from "../data/content";

const SITE_LINKS = [
  { label: "How it works", to: "/#how-it-works" },
  { label: "What you get", to: "/#offer" },
  { label: "Work", to: "/#work" },
  { label: "Pricing", to: "/pricing" },
  { label: "FAQ", to: "/#faq" },
  { label: "Get one ad free", to: "/free-ad" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="gradient-dark noise-overlay text-white">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              {SITE.tagline} Creative supply for DTC beauty, skincare and
              wellness brands running $20k+/month on Meta.
            </p>

            <a
              href={`mailto:${SITE.email}`}
              className="group mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/80 transition-all hover:border-amber/50 hover:text-white focus-ring"
            >
              <Mail size={15} className="text-amber" />
              {SITE.email}
            </a>
          </div>

          <FooterColumn title="Site">
            {SITE_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-white/60 transition-colors hover:text-amber"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Legal">
            {LEGAL_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-white/60 transition-colors hover:text-amber"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-14 space-y-6 border-t border-white/10 pt-8">
          <p className="max-w-3xl text-[11px] leading-relaxed text-white/30">
            Benchmark figures cited on this site are from the Motion Creative
            Benchmarks 2026 report and describe the market generally. They are
            not a forecast of your results. Work samples are shown as examples of
            concepts produced — no performance is implied. RetenaAI is not
            affiliated with, endorsed by, or sponsored by Meta Platforms, Inc.
          </p>

          {/* Registered details — appears only once the company exists. Real
              businesses show an address, and cold-email recipients check. */}
          {HAS_REGISTERED_ENTITY && (
            <p className="text-xs leading-relaxed text-white/40">
              {LEGAL.entityName}
              {LEGAL.rcNumber ? ` (RC ${LEGAL.rcNumber})` : ""} ·{" "}
              {LEGAL.registeredAddress}
            </p>
          )}

          <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/40">
              © {year} {SITE.name}. All rights reserved.
            </p>
            <p className="text-xs text-white/40">Built for brands that ship.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm">{children}</ul>
    </div>
  );
}
