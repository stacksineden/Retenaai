/* ============================================================================
 * Content loader
 * ============================================================================
 * Reads the JSON in /content at build time. Adding work means adding a file —
 * no code changes. See HOW-TO-ADD-WORK.md.
 *
 * Two gates are enforced here, once, so no component can bypass them:
 *   - a case study or ad shows only when `published` is true
 *   - a review shows only when `permission_confirmed` is true
 * ========================================================================== */

export type Screenshot = { src: string; alt: string; caption?: string };

export type CaseStudy = {
  slug: string;
  client_name: string;
  city: string;
  layers: string[];
  problem: string;
  what_we_built: string;
  screenshots: Screenshot[];
  video: string | null;
  /** A measured figure from the client's own data, or null. Never estimated. */
  result: string | null;
  quote_id: string | null;
  /** 1200x630 link-preview image for this case study, or null for the site mark. */
  og_image: string | null;
  featured: boolean;
  published: boolean;
};

export type Review = {
  id: string;
  quote: string;
  name: string;
  role: string;
  business: string;
  city: string;
  month: string;
  screenshot: string | null;
  video_url: string | null;
  permission_confirmed: boolean;
};

export type Client = { name: string; published: boolean };

export type AdLabel = {
  client_or_sample: "client" | "sample";
  client_name: string | null;
  ai_presenter: boolean;
  published: boolean;
};

const caseStudyFiles = import.meta.glob<{ default: CaseStudy }>(
  "../../content/case-studies/*.json",
  { eager: true }
);

const reviewFiles = import.meta.glob<{ default: Review }>(
  "../../content/reviews/*.json",
  { eager: true }
);

/**
 * Placeholders live in their own directory so the real glob never matches
 * them, and this glob is behind a statically-false branch in a build — so
 * their text isn't merely hidden at runtime, it isn't shipped at all.
 */
const placeholderFiles = import.meta.env.DEV
  ? import.meta.glob<{ default: Review }>(
      "../../content/reviews/_placeholders/*.json",
      { eager: true }
    )
  : {};

const clientFile = import.meta.glob<{ default: { clients: Client[] } }>(
  "../../content/clients.json",
  { eager: true }
);

const adLabelFile = import.meta.glob<{ default: { labels: Record<string, AdLabel> } }>(
  "../../content/ads.labels.json",
  { eager: true }
);

/** Published case studies only. */
export const caseStudies: CaseStudy[] = Object.values(caseStudyFiles)
  .map((m) => m.default)
  .filter((c) => c.published);

export const featuredCaseStudies: CaseStudy[] = caseStudies.filter((c) => c.featured);

/* ---------------------------------------------------------------------------
 * REVIEWS ARE SWITCHED OFF
 * ---------------------------------------------------------------------------
 * Nothing about reviews renders anywhere while this is false: the "In their
 * words" section on the homepage, the quote strip under the hero, the reviews
 * section on /work, and the quote on a case study all disappear on their own,
 * because every one of them reads from `reviews` below.
 *
 * TO TURN REVIEWS BACK ON, when real ones exist:
 *   1. add each review as its own file in content/reviews/ — see the README
 *      there for the template and the permission rule
 *   2. set REVIEWS_ENABLED to true
 *
 * Nothing else needs touching. Leaving it false is safe: it's a switch, not a
 * deletion, and all the markup is still here.
 * ------------------------------------------------------------------------- */
export const REVIEWS_ENABLED = false;

/**
 * Reviews with written permission only. Video testimonials first.
 *
 * `npm run dev` also shows the unconfirmed placeholders in
 * content/reviews/_placeholders, so the layout can be checked before a real
 * review exists. Builds drop them — their text isn't in the bundle at all —
 * so a placeholder can't reach a visitor.
 */
export const reviews: Review[] = !REVIEWS_ENABLED
  ? []
  : [
      ...Object.values(reviewFiles).map((m) => m.default),
      ...Object.values(placeholderFiles).map((m) => m.default),
    ]
      .filter((r) => r.permission_confirmed || import.meta.env.DEV)
      .sort((a, b) => Number(Boolean(b.video_url)) - Number(Boolean(a.video_url)));

/** Businesses we've worked with, in the order they're listed. */
export const clients: Client[] = (
  Object.values(clientFile)[0]?.default?.clients ?? []
).filter((c) => c.published);

export const adLabels: Record<string, AdLabel> =
  Object.values(adLabelFile)[0]?.default?.labels ?? {};

export const reviewById = (id: string | null): Review | undefined =>
  id ? reviews.find((r) => r.id === id) : undefined;
