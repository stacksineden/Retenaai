import { motion } from "framer-motion";
import { Check, TrendingUp } from "lucide-react";
import { EDGE } from "../../data/content";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Relative bar widths for the cost comparison. */
const MAX = 5000;

const ROWS = [
  { label: "12 UGC videos, market average", value: 2376, display: "$2,376" },
  { label: "Same 12, with paid usage rights", value: 3500, display: "~$3,500" },
  {
    label: "Full-service video agency / mo",
    value: 5000,
    display: "$5,000+",
  },
];

export function Edge() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow={EDGE.eyebrow}
              title="We carry zero usage rights. Creator agencies can't say that."
              body={EDGE.body}
            />

            <Reveal delay={0.18}>
              <ul className="mt-8 space-y-3">
                {[
                  "No creator fees that climb as your spend climbs",
                  "No usage-rights renewals every 90 days",
                  "No reshoot cost to test a new angle",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-navy/70"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-amber/15 text-amber-600">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Cost comparison */}
          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-navy/8 bg-navy-50/50 p-7 shadow-premium sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy/45">
                What 12 concepts costs elsewhere
              </p>

              <div className="mt-7 space-y-6">
                {ROWS.map((row, i) => (
                  <div key={row.label}>
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="text-sm text-navy/65">{row.label}</p>
                      <p className="font-display text-base font-semibold tabular-nums text-navy/70">
                        {row.display}
                      </p>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-navy/8">
                      <motion.div
                        className="h-full rounded-full bg-navy/25"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(row.value / MAX) * 100}%` }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{
                          duration: 1,
                          delay: 0.15 + i * 0.12,
                          ease: EASE,
                        }}
                      />
                    </div>
                  </div>
                ))}

                {/* Ours */}
                <div className="rounded-2xl bg-white p-5 ring-1 ring-amber/30">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-sm font-semibold text-navy">
                      RetenaAI, 12 concepts
                    </p>
                    <p className="font-display text-lg font-semibold tabular-nums text-amber-600">
                      from $1,500
                    </p>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-navy/8">
                    <motion.div
                      className="h-full rounded-full gradient-amber"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(1500 / MAX) * 100}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1, delay: 0.55, ease: EASE }}
                    />
                  </div>
                  <p className="mt-3 flex items-center gap-1.5 text-[11px] text-navy/45">
                    <TrendingUp size={12} className="text-amber-600" />
                    Founding rate, first three clients. Standard rate $2,500.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
