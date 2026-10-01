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
  /**
   * A short extract for the strip under the hero, where the full quote would
   * run too long. Must be words lifted from `quote` exactly — never a
   * paraphrase, and never something they didn't write.
   */
  pull_quote?: string | null;
  name: string;
  role: string;
  business: string;
  /** Standing worth naming, e.g. a former ambassadorship. Shown under the role. */
  credential?: string | null;
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
 * REVIEWS
 * ---------------------------------------------------------------------------
 * Set this to false to pull every review off the site at once — the homepage
 * section, the strip under the hero, the section on /work and the quote on a
 * case study all read from `reviews` below, so they appear and disappear
 * together.
 *
 * Add a review by dropping a file in content/reviews/ — see the README there
 * for the template and the permission rule.
 * ------------------------------------------------------------------------- */
export const REVIEWS_ENABLED = true;

/**
 * Reviews with confirmed permission only. Video testimonials first.
 *
 * The placeholders that stood in before a real review existed are deleted —
 * there's a real one now, and a fake quote sitting next to it helps nobody.
 */
export const reviews: Review[] = !REVIEWS_ENABLED
  ? []
  : Object.values(reviewFiles)
      .map((m) => m.default)
      .filter((r) => r.permission_confirmed)
      .sort((a, b) => Number(Boolean(b.video_url)) - Number(Boolean(a.video_url)));

/** Businesses we've worked with, in the order they're listed. */
export const clients: Client[] = (
  Object.values(clientFile)[0]?.default?.clients ?? []
).filter((c) => c.published);

export const adLabels: Record<string, AdLabel> =
  Object.values(adLabelFile)[0]?.default?.labels ?? {};

export const reviewById = (id: string | null): Review | undefined =>
  id ? reviews.find((r) => r.id === id) : undefined;
