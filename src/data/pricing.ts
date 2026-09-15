/* ============================================================================
 * PRICING
 * ============================================================================
 *
 * Two products:
 *
 *   1. MONTHLY RETAINER — one slider: concepts a month, 12–30. Flat price per
 *      concept, no bulk discount, no tiers. The video/static mix is not a
 *      visitor choice; it's stated in copy ("typically 4 video and 8 static")
 *      and set by us against what the account needs.
 *
 *   2. CREATIVE DROP — a separate one-off product below the configurator.
 *
 * Nothing here relates to the visitor's ad spend.
 *
 * ⚠️ DISPLAY RULE: the per-concept rate below exists only to compute the total.
 * Never render it — not on a card, not in a tooltip or hover, not as
 * "from $X/concept". The monthly total is the only price on screen.
 *
 * NIGERIA: visitors in Nigeria see no published price at all — the price panel
 * becomes a "Request a quote" panel. Dollar prices are never converted to naira.
 * ========================================================================== */

export type Rate = "founding" | "standard";

/** Internal only — see DISPLAY RULE. */
const RATE_PER_CONCEPT: Record<Rate, number> = {
  founding: 100,
  standard: 200,
};

export const RETAINER = {
  /** Below 12 there's no weekly cadence — that's the Drop, not a gate. */
  minConcepts: 12,
  maxConcepts: 30,
  defaultConcepts: 12,
};

/** Monthly total: concepts × flat rate. */
export const monthlyTotal = (concepts: number, rate: Rate) =>
  concepts * RATE_PER_CONCEPT[rate];

export const DROP = {
  name: "Creative Drop",
  concepts: 5,
  workingDays: 5,
  price: 1_200,
};

/** "$1,200" */
export const formatMoney = (amount: number) =>
  `$${Math.round(amount).toLocaleString("en-US")}`;
