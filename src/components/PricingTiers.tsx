import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { PRICING_TIERS } from "../data/pricing";
import { StaggerGroup, StaggerItem } from "./Reveal";
import { Button } from "./ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

const usd = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

/** Pre-selects the spend band on the form when a tier card is clicked. */
const TIER_TO_BAND: Record<string, string> = {
  starter: "20-40k",
  growth: "40-75k",
  scale: "75k-plus",
};

const INCLUDED: Record<string, string[]> = {
  starter: [
    "12 net-new concepts a month",
    "3 delivered every Monday",
    "Free hook variants on winners",
    "One-page monthly log",
    "Month-to-month, no minimum",
  ],
  growth: [
    "20 net-new concepts a month",
    "5 delivered every Monday",
    "Free hook variants on winners",
    "One-page monthly log",
    "Priority angle research",
  ],
  scale: [
    "Volume sized to your spend",
    "Cadence built around your testing cycle",
    "Free hook variants on winners",
    "One-page monthly log",
    "Direct line for angle decisions",
  ],
};

export function PricingTiers() {
  const [founding, setFounding] = useState(true);

  return (
    <div>
      {/* Rate toggle */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex rounded-full border border-navy/10 bg-white p-1 text-xs font-semibold shadow-sm">
          {[
            { label: "Founding rate", on: true },
            { label: "Standard rate", on: false },
          ].map((opt) => (
            <button
              key={opt.label}
              type="button"
              onClick={() => setFounding(opt.on)}
              className={`relative rounded-full px-4 py-2 transition-colors focus-ring ${
                founding === opt.on
                  ? "text-ink"
                  : "text-navy/50 hover:text-navy"
              }`}
            >
              {founding === opt.on && (
                <motion.span
                  layoutId="tier-rate-pill"
                  className="absolute inset-0 rounded-full gradient-amber"
                  transition={{ duration: 0.3, ease: EASE }}
                />
              )}
              <span className="relative">{opt.label}</span>
            </button>
          ))}
        </div>

        <p className="h-4 text-xs text-navy/45">
          {founding
            ? "First three clients only. Conditional on shared results + a testimonial. Locked six months."
            : "Standard pricing, available to every client."}
        </p>
      </div>

      <StaggerGroup className="mt-12 grid gap-6 lg:grid-cols-3" stagger={0.1}>
        {PRICING_TIERS.map((tier) => {
          const featured = tier.id === "growth";
          const price = founding ? tier.founding : tier.standard;

          return (
            <StaggerItem key={tier.id}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-400 hover:-translate-y-1.5 ${
                  featured
                    ? "bg-navy text-white shadow-premium ring-1 ring-amber/40"
                    : "border border-navy/10 bg-white hover:shadow-premium"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 left-8 rounded-full gradient-amber px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink shadow-amber-glow">
                    Most common
                  </span>
                )}

                <h3
                  className={`font-display text-xl font-semibold ${
                    featured ? "text-white" : "text-navy"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-1.5 text-xs font-medium uppercase tracking-wider ${
                    featured ? "text-amber" : "text-amber-600"
                  }`}
                >
                  {tier.spendLabel}
                </p>

                <div className="mt-6 flex items-end gap-1.5">
                  {tier.custom || price === null ? (
                    <span
                      className={`font-display text-4xl font-semibold ${
                        featured ? "text-white" : "text-navy"
                      }`}
                    >
                      Custom
                    </span>
                  ) : (
                    <>
                      <motion.span
                        key={price}
                        initial={{ opacity: 0.3, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className={`font-display text-4xl font-semibold tabular-nums ${
                          featured ? "text-white" : "text-navy"
                        }`}
                      >
                        {usd(price)}
                      </motion.span>
                      <span
                        className={`pb-1.5 text-sm ${
                          featured ? "text-white/45" : "text-navy/45"
                        }`}
                      >
                        / month
                      </span>
                    </>
                  )}
                </div>

                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    featured ? "text-white/55" : "text-navy/55"
                  }`}
                >
                  {tier.blurb}
                </p>

                <ul className="mt-7 flex-1 space-y-3">
                  {(INCLUDED[tier.id] ?? []).map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2.5 text-sm ${
                        featured ? "text-white/75" : "text-navy/70"
                      }`}
                    >
                      <span
                        className={`mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full ${
                          featured
                            ? "bg-amber/20 text-amber"
                            : "bg-amber/15 text-amber-600"
                        }`}
                      >
                        <Check size={11} strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    to={`/free-ad?spend=${TIER_TO_BAND[tier.id]}`}
                    variant={featured ? "amber" : "secondary"}
                    size="md"
                    className="w-full"
                  >
                    {tier.custom ? "Talk to us" : "Get one ad free"}
                  </Button>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </div>
  );
}
