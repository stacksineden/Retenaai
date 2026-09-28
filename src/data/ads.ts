/* ============================================================================
 * Ad portfolio
 * ============================================================================
 * The lookbook dataset gets ported here in Stage 3, together with the
 * LookBook component from the old product (its ?search= URL syncing and
 * category synonym map come across intact).
 *
 * Until then this is empty, so the homepage ad reel renders nothing rather
 * than showing unlabelled work.
 *
 * An ad only ever appears when it has a label in content/ads.labels.json with
 * published: true — see docs/HOW-TO-LABEL-ADS.md.
 * ========================================================================== */

import { adLabels, type AdLabel } from "../content";

export type Ad = {
  /** Cloudinary asset key — the stable id labels are keyed on. */
  key: string;
  url: string;
  /** Still frame shown before a video is played. */
  poster?: string;
  category: string;
  title: string;
  type: "video" | "image";
  label: AdLabel;
};

/** Ported in Stage 3 from the lookbook dataset. */
const ALL_ADS: Omit<Ad, "label">[] = [];

/** Labelled and approved for display, in dataset order. */
export const publishedAds: Ad[] = ALL_ADS.flatMap((ad) => {
  const label = adLabels[ad.key];
  return label?.published ? [{ ...ad, label }] : [];
});

/** How an ad must be labelled on screen. */
export const adBadges = (label: AdLabel): string[] => {
  const badges = [label.client_or_sample === "client" ? "Client ad" : "Sample ad"];
  if (label.ai_presenter) badges.push("AI-generated presenter");
  return badges;
};
