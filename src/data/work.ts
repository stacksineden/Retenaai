/* ============================================================================
 * /work page copy
 * ============================================================================
 * NOT from the approved v2 copy file — that one covers the homepage only.
 * Written to the same rules: no invented results, no prices, nothing claimed
 * that can't be sourced. Rewrite freely; flag it if a line overreaches.
 * ========================================================================== */

export const WORK_META = {
  title: "Our work — RetenaAI",
  description:
    "Ads we've made, pages we've built and systems we've set up for Nigerian businesses. Case studies, ad creative and reviews in one place.",
  ogTitle: "Work we've shipped",
  ogDescription:
    "Ads, landing pages and WhatsApp systems for Nigerian businesses.",
};

export const WORK_PAGE = {
  eyebrow: "Our work",
  heading: "Work we've shipped.",
  intro:
    "Ads we've made, pages we've built, and systems we've set up. Everything here ran for a real business or was made as a sample — each piece says which.",

  caseStudies: {
    heading: "Case studies",
    empty: "Case studies go live here as clients approve them.",
  },

  ads: {
    heading: "Ad creative",
    intro:
      "Made in-house. Samples are made to show a format; client ads ran on a client's account. Some use AI-generated presenters — where we know which, the ad says so.",
    empty: "Ads go live here once they're labelled.",
    all: "All",
    countLabel: (n: number) => `${n} ${n === 1 ? "ad" : "ads"}`,
  },

  reviews: {
    heading: "In their words",
    empty: "Reviews go up here once clients have agreed to us sharing them.",
  },

  cta: {
    heading: "Want this for your business?",
    body: "Start with a free 45-minute audit. We find where your customers are slipping away before we sell you anything.",
    button: "Book my free audit",
  },
};

/** Category keys come from the old lookbook; these are what a visitor reads. */
export const CATEGORY_LABELS: Record<string, string> = {
  face_serum: "Skincare",
  men_supplements: "Supplements",
  hair_curler: "Haircare",
  jersey: "Jerseys",
  varsity_jacket: "Varsity jackets",
  tshirts: "T-shirts",
  chilli_sauce: "Chilli sauce",
  twopieces: "Two-piece sets",
  sauce: "Sauce",
  shoe: "Footwear",
  hoodie: "Hoodies",
  home_decor: "Home decor",
  female_gymwear: "Gymwear",
  men_slide: "Slides",
  food_cusine: "Food",
};

export const categoryLabel = (key: string): string =>
  CATEGORY_LABELS[key] ??
  key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
