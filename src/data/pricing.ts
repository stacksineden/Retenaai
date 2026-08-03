export type PricingTier = {
  id: "starter" | "growth" | "scale";
  name: string;
  spendLabel: string;
  spendMin: number;
  spendMax: number | null;
  concepts: number;
  founding: number | null;
  standard: number | null;
  custom?: boolean;
  blurb: string;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter Supply",
    spendLabel: "$20k–$40k / mo Meta spend",
    spendMin: 20_000,
    spendMax: 40_000,
    concepts: 12,
    founding: 1_500,
    standard: 2_500,
    blurb: "For accounts finally shipping enough volume to find winners consistently.",
  },
  {
    id: "growth",
    name: "Growth Supply",
    spendLabel: "$40k–$75k / mo Meta spend",
    spendMin: 40_000,
    spendMax: 75_000,
    concepts: 20,
    founding: 2_500,
    standard: 3_800,
    blurb: "For accounts scaling budget faster than their creative team can keep up.",
  },
  {
    id: "scale",
    name: "Scale Supply",
    spendLabel: "$75k+ / mo Meta spend",
    spendMin: 75_000,
    spendMax: null,
    concepts: 0,
    founding: null,
    standard: null,
    custom: true,
    blurb: "Custom volume, custom cadence. We size the batch to your testing velocity.",
  },
];

export function tierForSpend(spend: number): PricingTier {
  return (
    PRICING_TIERS.find(
      (t) => spend >= t.spendMin && (t.spendMax === null || spend < t.spendMax)
    ) ?? PRICING_TIERS[PRICING_TIERS.length - 1]
  );
}

/** Anchor benchmark: one new ad per $3,000 of monthly spend. */
export function recommendedConceptsForSpend(spend: number): number {
  return Math.max(4, Math.round(spend / 3000));
}
