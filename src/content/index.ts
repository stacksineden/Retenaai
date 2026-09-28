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

const adLabelFile = import.meta.glob<{ default: { labels: Record<string, AdLabel> } }>(
  "../../content/ads.labels.json",
  { eager: true }
);

/** Published case studies only. */
export const caseStudies: CaseStudy[] = Object.values(caseStudyFiles)
  .map((m) => m.default)
  .filter((c) => c.published);

export const featuredCaseStudies: CaseStudy[] = caseStudies.filter((c) => c.featured);

/** Reviews with written permission only. Video testimonials first. */
export const reviews: Review[] = Object.values(reviewFiles)
  .map((m) => m.default)
  .filter((r) => r.permission_confirmed)
  .sort((a, b) => Number(Boolean(b.video_url)) - Number(Boolean(a.video_url)));

export const adLabels: Record<string, AdLabel> =
  Object.values(adLabelFile)[0]?.default?.labels ?? {};

export const reviewById = (id: string | null): Review | undefined =>
  id ? reviews.find((r) => r.id === id) : undefined;
