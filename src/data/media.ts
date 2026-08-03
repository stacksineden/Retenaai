/* ============================================================================
 * MEDIA — ALL VIDEOS, IMAGES AND LOGO PATHS
 * ============================================================================
 *
 * Assets are served from Cloudinary. The `f_auto,q_auto` in each URL means
 * Cloudinary picks the best format and compression per browser automatically —
 * which is why the two `.mov` links work everywhere despite the extension
 * (verified: they are delivered as H.264 MP4).
 *
 * TO ADD OR SWAP AN ASSET
 * -----------------------
 * 1. Hosted link → paste the direct file URL into `src`.
 * 2. Local file  → put it in /public/videos or /public/images, then use
 *                  src: "/videos/filename.mp4"
 *
 * VIDEO OR IMAGE? Either works in any slot — the type is detected from the
 * file extension, so you never need to set `kind` by hand.
 *
 * RATIO: set it to match the asset or it will be cropped by object-cover.
 * Options: "9:16" (vertical), "4:5", "3:4", "1:1" (square), "16:9".
 * ========================================================================== */

export type MediaAsset = {
  /** Direct URL or /public path. Leave "" to show the placeholder. */
  src: string;
  /** Still image shown before a video loads. Optional, videos only. */
  poster?: string;
  /**
   * Optional. Video vs image is detected from the file extension, so you can
   * drop a .jpg into any slot and it just works. Only set this by hand when
   * the URL has no extension (some CDNs), to force one or the other.
   */
  kind?: "video" | "image";
  /** Describes the asset for screen readers. Always fill this in. */
  alt: string;
};

export type MediaRatio = "9:16" | "4:5" | "3:4" | "1:1" | "16:9";

export type WorkSample = MediaAsset & {
  /** Shown on the card. Describes the CONCEPT, never a result. */
  title: string;
  /** Small label — the angle or format, e.g. "Problem–solution hook". */
  angle: string;
  /** Must match the asset's real shape or it gets cropped. */
  ratio?: MediaRatio;
};

/* ---------------------------------------------------------------------------
 * 1. HERO SHOWREEL — the centre card of the fanned hero row.
 *    Your strongest single asset. 15s, autoplays muted on loop.
 * ------------------------------------------------------------------------- */
export const HERO_REEL: MediaAsset = {
  src: "https://res.cloudinary.com/dast35q6f/video/upload/w_600,f_auto,q_auto/v1779190107/face-facts-ad1_hds0vl.mp4",
  poster: "",
  alt: "Skincare serum ad concept",
};

/* ---------------------------------------------------------------------------
 * 1b. HERO FAN — the four cards flanking the showreel in the hero.
 *     Keep these 9:16 videos; the fan only looks right with matching shapes.
 * ------------------------------------------------------------------------- */
export const HERO_FAN: MediaAsset[] = [
  {
    src: "https://res.cloudinary.com/dast35q6f/video/upload/w_600,f_auto,q_auto/v1779191359/wellman-ad1_kdx73g.mp4",
    alt: "Supplement ad concept",
  },
  {
    src: "https://res.cloudinary.com/dast35q6f/video/upload/w_600,f_auto,q_auto/v1779190140/face-facts-ugc1_msgmcs.mov",
    alt: "Skincare creator-style ad concept",
  },
  {
    src: "https://res.cloudinary.com/dyryfgjro/video/upload/w_600,f_auto,q_auto/v1781595420/curlumi-ugc_kwuf0o.mov",
    alt: "Haircare routine ad concept",
  },
  {
    src: "https://res.cloudinary.com/dast35q6f/video/upload/w_600,f_auto,q_auto/v1779191693/wellman-ugc1_k9mhfp.mp4",
    alt: "Supplement creator-style ad concept",
  },
];

/* ---------------------------------------------------------------------------
 * 2. WORK SAMPLES — the masonry grid in the "Work" section.
 *
 *    Order is purely visual: tall and square items alternate so videos and
 *    stills mix across the columns instead of clumping. Reorder freely.
 *
 *    These are presented as work samples only — no performance is stated or
 *    implied anywhere, and no client relationship is claimed.
 * ------------------------------------------------------------------------- */
export const WORK_SAMPLES: WorkSample[] = [
{
    src: "https://res.cloudinary.com/dast35q6f/video/upload/w_600,f_auto,q_auto/v1779191359/wellman-ad1_kdx73g.mp4",
    ratio: "9:16",
    title: "Supplement — problem-led opener",
    angle: "Problem–solution hook",
    alt: "Supplement ad concept",
  },
{
    src: "https://res.cloudinary.com/dast35q6f/image/upload/w_1600,f_auto,q_auto/v1779198601/wellman-asset1_q7btle.png",
    ratio: "1:1",
    title: "Supplement — problem-led static",
    angle: "Static placement",
    alt: "Supplement static ad concept",
  },
{
    src: "https://res.cloudinary.com/dast35q6f/video/upload/w_600,f_auto,q_auto/v1779190140/face-facts-ugc1_msgmcs.mov",
    ratio: "9:16",
    title: "Skincare — creator-style testimonial",
    angle: "UGC hook",
    alt: "Skincare creator-style ad concept",
  },
{
    src: "https://res.cloudinary.com/dast35q6f/image/upload/w_600,f_auto,q_auto/v1779190166/face-facts-asset1_tflbn6.png",
    ratio: "1:1",
    title: "Skincare — ingredient still",
    angle: "Static placement",
    alt: "Skincare ingredient static ad concept",
  },
{
    src: "https://res.cloudinary.com/dyryfgjro/video/upload/w_600,f_auto,q_auto/v1781595420/curlumi-ugc_kwuf0o.mov",
    ratio: "9:16",
    title: "Haircare — routine demonstration",
    angle: "Demonstration hook",
    alt: "Haircare routine ad concept",
  },
{
    src: "https://res.cloudinary.com/dast35q6f/image/upload/w_1600,f_auto,q_auto/v1779198612/wellman-asset3_m9mylo.png",
    ratio: "1:1",
    title: "Supplement — benefit breakdown",
    angle: "Static placement",
    alt: "Supplement benefit static ad concept",
  },
{
    src: "https://res.cloudinary.com/dast35q6f/video/upload/w_600,f_auto,q_auto/v1779191693/wellman-ugc1_k9mhfp.mp4",
    ratio: "9:16",
    title: "Supplement — creator-style monologue",
    angle: "Authority hook",
    alt: "Supplement creator-style ad concept",
  },
{
    src: "https://res.cloudinary.com/dast35q6f/image/upload/w_600,f_auto,q_auto/v1779190171/face-facts-asset2_u8sjim.png",
    ratio: "1:1",
    title: "Skincare — texture and finish",
    angle: "Static placement",
    alt: "Skincare texture static ad concept",
  },
{
    src: "https://res.cloudinary.com/dast35q6f/video/upload/w_600,f_auto,q_auto/v1779191948/wellman-ugc-1-chineese_u6zyaq.mp4",
    ratio: "9:16",
    title: "Same script, Mandarin market",
    angle: "Localised variant",
    alt: "Mandarin-language supplement ad concept",
  },
{
    src: "https://res.cloudinary.com/dyryfgjro/image/upload/w_1600,f_auto,q_auto/v1781594917/curlumi-ad4_ovqs8x.png",
    ratio: "3:4",
    title: "Haircare — benefit-led static",
    angle: "Static placement",
    alt: "Haircare static ad concept",
  },
{
    src: "https://res.cloudinary.com/dast35q6f/image/upload/w_600,f_auto,q_auto/v1779195053/face-facts-assets5_vwzz4b.png",
    ratio: "9:16",
    title: "Skincare — hero product still",
    angle: "Static placement",
    alt: "Skincare serum static ad concept",
  },
{
    src: "https://res.cloudinary.com/dast35q6f/image/upload/w_600,f_auto,q_auto/v1779190171/face-facts-assets3_zsg9aa.png",
    ratio: "1:1",
    title: "Skincare — offer-led static",
    angle: "Static placement",
    alt: "Skincare offer static ad concept",
  },
];

/* ---------------------------------------------------------------------------
 * 3. HOOK VARIANT STRIP — the row in the hook-variants explainer.
 *    Vertical UGC-style clips. The first two are the same script in two
 *    languages, which is the closest real variant pair in this set.
 * ------------------------------------------------------------------------- */
export const HOOK_VARIANTS: MediaAsset[] = [
  {
    src: "https://res.cloudinary.com/dast35q6f/video/upload/w_600,f_auto,q_auto/v1779191693/wellman-ugc1_k9mhfp.mp4",
    alt: "Creator-style ad variant",
  },
  {
    src: "https://res.cloudinary.com/dast35q6f/video/upload/w_600,f_auto,q_auto/v1779191948/wellman-ugc-1-chineese_u6zyaq.mp4",
    alt: "Same creative, Mandarin variant",
  },
  {
    src: "https://res.cloudinary.com/dast35q6f/video/upload/w_600,f_auto,q_auto/v1779190140/face-facts-ugc1_msgmcs.mov",
    alt: "Skincare creator-style variant",
  },
  {
    src: "https://res.cloudinary.com/dyryfgjro/video/upload/w_600,f_auto,q_auto/v1781595420/curlumi-ugc_kwuf0o.mov",
    alt: "Haircare creator-style variant",
  },
];

/* ---------------------------------------------------------------------------
 * 4. LOGO
 *
 *    Built from the four files you put in /public. Those originals are
 *    untouched; the web-ready versions live in /public/brand:
 *
 *      your file          →  built as                →  used for
 *      retenatextW.png    →  brand/logo-light.png    →  navbar
 *      retenatextB.png    →  brand/logo-dark.png     →  footer
 *      retenaL.png        →  brand/mark-light.png    →  square mark + favicon
 *      retenaLW.png       →  brand/mark-dark.png     →  spare mark for dark use
 *
 *    Each was trimmed of its transparent padding (the originals had ~19% dead
 *    space below the artwork, which would have made the logo render small and
 *    sit high) and downscaled from ~4300px to web sizes.
 *
 *    TO REGENERATE after replacing a source file, ask Claude to re-run the
 *    trim — or just point these paths straight at your own files.
 * ------------------------------------------------------------------------- */
export const LOGO = {
  /** Full lockup, black circle + black wordmark — navbar (white background). */
  light: "/brand/logo-light.png",
  /** Full lockup, grey circle + white wordmark — footer (dark navy). */
  dark: "/brand/logo-dark.png",
  /** Square R-in-circle, black version. Also the source of the favicon. */
  mark: "/brand/mark-light.png",
};
