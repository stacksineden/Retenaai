/* ============================================================================
 * LEAD FORM CONFIG — PASTE YOUR ACCESS KEY HERE TO GO LIVE
 * ============================================================================
 *
 * The form posts to Web3Forms, which emails every submission to whichever
 * address you registered, and keeps a log in their dashboard.
 *
 * TO ACTIVATE (2 minutes, free, no card):
 *   1. Go to https://web3forms.com
 *   2. Enter hello@retenaai.com — they email you an access key
 *   3. Paste that key into ACCESS_KEY below
 *
 * UNTIL THEN: the form still works. With no key it falls back to opening the
 * user's mail client with every answer pre-written into the email body, so
 * nothing is broken while you set it up.
 *
 * SWITCHING PROVIDERS: Formspree, Basin and Netlify Forms all accept the same
 * kind of POST. Change ENDPOINT and the payload shape in LeadForm.tsx.
 * ========================================================================== */

export const FORM = {
  /** Web3Forms access key. Empty string = mailto fallback mode. */
  ACCESS_KEY: "3b4c8916-da15-4480-865b-d064566d9ffb",

  ENDPOINT: "https://api.web3forms.com/submit",

  /**
   * Optional. A Calendly / Cal.com link shown on the success screen.
   * Your own note: "every yes needs a date" — this is what dates it.
   * e.g. "https://cal.com/retenaai/15min". Leave "" to hide the step.
   */
  BOOKING_URL: "",

  /** Subject line on the notification email that lands in your inbox. */
  SUBJECT: "New free-ad request — RetenaAI",
};

/* --------------------------------------------------------------------------
 * The three screening questions, as answer options.
 * Bands rather than free text: faster to answer, and far more honest than
 * whatever someone types into an empty box.
 * ------------------------------------------------------------------------ */

/** "What should we make?" — asked after the notes field. */
export const MAKE_OPTIONS = [
  { value: "video", label: "Video" },
  { value: "static", label: "Static" },
  { value: "either", label: "Either, you decide" },
] as const;

export const PACE_OPTIONS = [
  { value: "0-2", label: "0–2 a week" },
  { value: "3-4", label: "3–4 a week" },
  { value: "5-8", label: "5–8 a week" },
  { value: "9-15", label: "9–15 a week" },
  { value: "15-plus", label: "More than 15 a week" },
] as const;

export const OWNER_OPTIONS = [
  { value: "me", label: "I do, day to day" },
  { value: "in-house", label: "An in-house media buyer" },
  { value: "agency", label: "An external agency" },
  { value: "nobody", label: "Nobody consistently" },
] as const;
