/* ============================================================================
 * PRICING
 * ============================================================================
 *
 * Two products:
 *
 *   1. MONTHLY RETAINER — built in the configurator. The visitor picks how many
 *      video and static concepts they want a month (12–30 combined) and sees
 *      the monthly total. Price is flat per unit: no volume discount, because
 *      each concept is a real production day.
 *
 *   2. CREATIVE DROP — a separate one-off product for brands not ready for a
 *      retainer. Not part of the configurator.
 *
 * Nothing here relates to the visitor's ad spend.
 *
 * ⚠️ DISPLAY RULE: the per-unit prices below exist only to compute the total.
 * Never render them — not on a card, not in a tooltip, not as a "cost per
 * concept" line. Show the monthly total only. A visible unit rate turns the
 * offer into a per-ad menu.
 * ========================================================================== */

export type Currency = "USD" | "NGN";
export type Money = Record<Currency, number | null>;
export type Rate = "founding" | "standard";
export type ConceptKind = "video" | "static";
export type Mix = Record<ConceptKind, number>;

/**
 * NAIRA IS OFF until a naira price grid is set. While false, every visitor —
 * including visitors in Nigeria — sees dollar prices. Location detection stays
 * wired, so flipping this to true (after filling the NGN values below) is the
 * only change needed.
 *
 * Naira is a separate market, not an exchange-rate translation of the dollar
 * price. Never derive NGN values from USD ones.
 */
export const NAIRA_PRICING_LIVE: boolean = false;

const SYMBOL: Record<Currency, string> = { USD: "$", NGN: "₦" };

/** "$1,520" / "₦400,000". Formatted by hand so every browser renders the ₦ sign. */
export function formatMoney(amount: number, currency: Currency): string {
  return `${SYMBOL[currency]}${Math.round(amount).toLocaleString("en-US")}`;
}

/* ---------------------------------------------------------------------------
 * Monthly retainer
 * ------------------------------------------------------------------------- */

/**
 * Per-unit prices — internal only (see DISPLAY RULE above).
 * Derived from the original retainer: 4 video + 8 static =
 *   founding $1,520 (the $1,500 tier) · standard $2,480 (the $2,500 tier).
 */
const UNIT_PRICE: Record<Rate, Record<ConceptKind, Money>> = {
  founding: {
    video: { USD: 250, NGN: null },
    static: { USD: 65, NGN: null },
  },
  standard: {
    video: { USD: 400, NGN: null },
    static: { USD: 110, NGN: null },
  },
};

export const RETAINER = {
  /** Below 12 there's no weekly cadence — that's the Drop, not a gate. */
  minConcepts: 12,
  maxConcepts: 30,
  /** Recommended mix; the configurator loads here. */
  defaultMix: { video: 4, static: 8 } as Mix,
};

export const totalConcepts = (mix: Mix) => mix.video + mix.static;

/** Monthly total for a mix. Null if that currency has no published price. */
export function monthlyTotal(
  mix: Mix,
  rate: Rate,
  currency: Currency
): number | null {
  const video = UNIT_PRICE[rate].video[currency];
  const stat = UNIT_PRICE[rate].static[currency];
  if (video === null || stat === null) return null;
  return mix.video * video + mix.static * stat;
}

/* ---------------------------------------------------------------------------
 * Creative Drop — one-off
 * ------------------------------------------------------------------------- */
export const DROP = {
  name: "Creative Drop",
  concepts: 5,
  workingDays: 5,
  price: { USD: 1_200, NGN: null } as Money,
};
