import { motion } from "framer-motion";
import { STATS } from "../../data/content";
import { CountUp } from "../CountUp";
import { Reveal, StaggerGroup, StaggerItem } from "../Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

const BARS = [
  {
    label: "Your account",
    sub: "Small-tier average",
    value: 4.1,
    max: 8.09,
    tone: "muted" as const,
  },
  {
    label: "The brands beating you",
    sub: "Small-tier top quartile",
    value: 8.09,
    max: 8.09,
    tone: "amber" as const,
  },
];

export function VolumeGap() {
  return (
    <section id="volume-gap" className="relative bg-white py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="The gap"
          title={
            <>
              The brands beating you at the same budget aren't smarter.{" "}
              <span className="text-navy/40">They're testing more.</span>
            </>
          }
          body="Most advertisers blame the platform. The published data says something simpler and far more fixable: winners are a volume problem before they're a creative-quality problem."
        />

        {/* Bar comparison */}
        <Reveal className="mt-16" delay={0.1}>
          <div className="mx-auto max-w-3xl rounded-3xl border border-navy/8 bg-navy-50/50 p-6 shadow-premium sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy/45">
              New creatives launched per week
            </p>

            <div className="mt-8 space-y-8">
              {BARS.map((bar, i) => (
                <div key={bar.label}>
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <p className="font-display text-base font-semibold text-navy">
                        {bar.label}
                      </p>
                      <p className="text-xs text-navy/45">{bar.sub}</p>
                    </div>
                    <p
                      className={`font-display text-2xl font-semibold tabular-nums ${
                        bar.tone === "amber" ? "text-amber-600" : "text-navy/50"
                      }`}
                    >
                      <CountUp value={bar.value} decimals={2} />
                      <span className="ml-1 text-xs font-medium text-navy/40">
                        /wk
                      </span>
                    </p>
                  </div>

                  <div className="mt-3 h-3 overflow-hidden rounded-full bg-navy/8">
                    <motion.div
                      className={`h-full rounded-full ${
                        bar.tone === "amber"
                          ? "gradient-amber"
                          : "bg-navy/25"
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(bar.value / bar.max) * 100}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{
                        duration: 1.2,
                        delay: 0.2 + i * 0.15,
                        ease: EASE,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-navy/8">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber/15 text-[11px] font-bold text-amber-600">
                2x
              </span>
              <p className="text-sm leading-relaxed text-navy/65">
                Roughly twice the creative volume, on identical spend — which,
                at a ~5% win rate, works out to roughly twice the winners.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Stats */}
        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-3">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="group h-full rounded-2xl border border-navy/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-premium">
                <p className="font-display text-4xl font-semibold text-navy md:text-5xl">
                  <CountUp
                    value={stat.value}
                    decimals={stat.decimals ?? 0}
                    suffix={stat.suffix ?? ""}
                  />
                </p>
                <p className="mt-4 text-sm leading-relaxed text-navy/65">
                  {stat.label}
                </p>
                <p className="mt-4 border-t border-navy/8 pt-3 text-[11px] leading-relaxed text-navy/35">
                  {stat.source}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-navy/40">
            Figures from the Motion Creative Benchmarks 2026 report — 578,750
            creatives across 6,015 accounts and $1.29B in tracked Meta spend.
            Published third-party data, not our own claims.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
