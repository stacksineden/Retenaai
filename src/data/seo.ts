/* ============================================================================
 * PER-ROUTE TITLE + DESCRIPTION
 * ============================================================================
 *
 * Used in two places, which is why it lives in one file:
 *
 * 1. At BUILD time (vite.config.ts) to write a real HTML file per route —
 *    dist/pricing.html, dist/free-ad.html, … — with these tags baked into
 *    <head>, plus Open Graph / Twitter tags.
 *
 *    This is the part that fixes link previews. WhatsApp, iMessage, Slack,
 *    LinkedIn and X read the raw HTML and never run JavaScript, so a title set
 *    by React is invisible to them.
 *
 * 2. At RUN time (usePageMeta) so the browser tab stays correct as visitors
 *    click between pages without a reload.
 *
 * Pure data only — no imports — because the build config loads it in Node.
 * ========================================================================== */

export const SITE_URL = "https://retenaai.com";
export const OG_IMAGE = `${SITE_URL}/brand/mark-light.png`;

export type RouteMeta = {
  /** URL path. */
  path: string;
  /** HTML file written to dist/ ("index.html" for home). */
  file: string;
  title: string;
  description: string;
};

export const ROUTE_META = {
  home: {
    path: "/",
    file: "index.html",
    title: "RetenaAI — Creative Supply for Brands That Test Fast",
    description:
      "New Meta ad concepts every week — video and static — for brands that sell physical products. One-off or monthly, at any spend level.",
  },
  pricing: {
    path: "/pricing",
    file: "pricing.html",
    title: "Pricing — RetenaAI | Ad creative, one-off or monthly",
    description:
      "Monthly ad creative priced by your mix of video and static concepts, or a one-off Creative Drop from $1,200. Pick your mix and see your price.",
  },
  freeAd: {
    path: "/free-ad",
    file: "free-ad.html",
    title: "Get one ad free — RetenaAI",
    description:
      "We build one Meta ad for your brand at no cost. Run it seven days against your best performer and send the numbers. No contract, no payment details.",
  },
  privacy: {
    path: "/privacy",
    file: "privacy.html",
    title: "Privacy Policy — RetenaAI",
    description:
      "How RetenaAI collects, uses and protects personal data belonging to prospects, clients and website visitors.",
  },
  terms: {
    path: "/terms",
    file: "terms.html",
    title: "Terms of Service — RetenaAI",
    description:
      "The terms governing RetenaAI's creative engagements — Drops, monthly supply, payment, ownership, the winner definition, and cancellation.",
  },
} satisfies Record<string, RouteMeta>;
