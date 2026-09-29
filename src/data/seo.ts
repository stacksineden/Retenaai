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
  /** e.g. "noindex, nofollow" — baked into the route's HTML at build time. */
  robots?: string;
  /** Link-preview overrides, where the shared title should differ from the tab title. */
  ogTitle?: string;
  ogDescription?: string;
};

export const ROUTE_META = {
  home: {
    path: "/",
    file: "index.html",
    title:
      "RetenaAI: Ads, pages and WhatsApp systems that turn enquiries into sales",
    description:
      "We make the ads, build where customers land, and set up WhatsApp so every enquiry gets answered and tracked. Start with a free business audit.",
    ogTitle: "Stop losing customers in your DMs",
    ogDescription:
      "Ads, landing pages and WhatsApp systems for Nigerian businesses. Free audit.",
  },
  work: {
    path: "/work",
    file: "work.html",
    title: "Our work — RetenaAI",
    description:
      "Ads we've made, pages we've built and systems we've set up for Nigerian businesses. Case studies, ad creative and reviews in one place.",
    ogTitle: "Work we've shipped",
    ogDescription:
      "Ads, landing pages and WhatsApp systems for Nigerian businesses.",
  },
  /** The creative-supply site for international brands — moved here from "/". */
  creative: {
    path: "/creative",
    file: "creative.html",
    title: "RetenaAI — Creative Supply for Brands That Test Fast",
    description:
      "New Meta ad concepts every week — video and static — for brands that sell physical products. One-off or monthly, at any spend level.",
  },
  pricing: {
    path: "/pricing",
    file: "pricing.html",
    title: "Pricing — RetenaAI | Ad creative, one-off or monthly",
    description:
      "Monthly ad creative priced by how much you want to test — 12 to 30 concepts a month — or a one-off Creative Drop from $1,200.",
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
  /**
   * Unlisted: not in the nav, footer or any sitemap, and not linked from the
   * main site. noindex here + Disallow in public/robots.txt.
   */
  implementations: {
    path: "/implementations",
    file: "implementations.html",
    title: "Implementations — RetenaAI",
    description:
      "Creative gets attention. The system catches it. Websites, WhatsApp ordering, lead capture and creative — built so the sale doesn't get lost after the hard part.",
    robots: "noindex, nofollow",
  },
} satisfies Record<string, RouteMeta>;

/**
 * Meta for one case study. Structurally typed rather than importing the
 * CaseStudy type, because this file is loaded by the Vite config in Node and
 * must stay free of imports.
 *
 * og_image is a 1200x630 image per case study; without one it falls back to
 * the site mark, which previews correctly but generically.
 */
export function caseStudyMeta(study: {
  slug: string;
  client_name: string;
  city: string;
  problem: string;
  what_we_built: string;
  og_image?: string | null;
}): RouteMeta & { ogImage: string } {
  const where = study.city ? `${study.client_name}, ${study.city}` : study.client_name;
  return {
    path: `/work/${study.slug}`,
    file: `work/${study.slug}.html`,
    title: `${where} — RetenaAI`,
    description:
      study.what_we_built || study.problem || `What we built for ${where}.`,
    ogTitle: `${where} — what we built`,
    ogDescription: study.problem || study.what_we_built || "",
    ogImage: study.og_image || OG_IMAGE,
  };
}
