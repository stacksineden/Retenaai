import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Info, TrendingUp } from "lucide-react";
import { SITE } from "../data/content";
import { bandForPace, bandForSpend } from "../data/forms";
import {
  PRICING_TIERS,
  recommendedConceptsForSpend,
  tierForSpend,
} from "../data/pricing";

const EASE = [0.16, 1, 0.3, 1] as const;

const SPEND_MIN = 10_000;
const SPEND_MAX = 150_000;
const SPEND_STEP = 2_500;

const PACE_MIN = 0;
const PACE_MAX = 20;

/** Published benchmark: ~5% of creatives become winners. */
const WIN_RATE = 0.05;
const WEEKS_PER_MONTH = 4.33;

const usd = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

type Props = {
  /** Compact mode drops the secondary panels — used on the home page. */
  compact?: boolean;
};

export function PricingCalculator({ compact = false }: Props) {
  const [spend, setSpend] = useState(35_000);
  const [pace, setPace] = useState(4);
  const [founding, setFounding] = useState(true);

  const model = useMemo(() => {
    const tier = tierForSpend(spend);
    const belowMinimum = spend < PRICING_TIERS[0].spendMin;
    const isCustom = Boolean(tier.custom);

    const targetConcepts = recommendedConceptsForSpend(spend);
    const currentConcepts = pace * WEEKS_PER_MONTH;
    const suppliedConcepts = isCustom ? targetConcepts : tier.concepts;
    const combinedConcepts = currentConcepts + suppliedConcepts;

    const winnersNow = currentConcepts * WIN_RATE;
    const winnersWith = combinedConcepts * WIN_RATE;

    const price = founding ? tier.founding : tier.standard;
    const costPerConcept =
      price && suppliedConcepts ? price / suppliedConcepts : null;
    const shareOfSpend = price ? (price / spend) * 100 : null;

    return {
      tier,
      belowMinimum,
      isCustom,
      targetConcepts,
      currentConcepts,
      suppliedConcepts,
      combinedConcepts,
      winnersNow,
      winnersWith,
      price,
      costPerConcept,
      shareOfSpend,
      /** Is the client's own pace already meeting the benchmark? */
      meetsBenchmark: currentConcepts >= targetConcepts,
    };
  }, [spend, pace, founding]);

  const gapConcepts = Math.max(
    0,
    Math.round(model.targetConcepts - model.currentConcepts)
  );

  return (
    <div className="overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-premium">
      <div className="grid lg:grid-cols-[1.05fr_1fr]">
        {/* ---------------- Inputs ---------------- */}
        <div className="border-b border-navy/8 p-7 sm:p-10 lg:border-b-0 lg:border-r">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">
            Size your supply
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-navy">
            Two numbers is all it takes.
          </h3>

          {/* Spend slider */}
          <div className="mt-9">
            <div className="flex items-baseline justify-between gap-4">
              <label
                htmlFor="spend"
                className="text-sm font-medium text-navy/70"
              >
                Your monthly Meta spend
              </label>
              <span className="font-display text-xl font-semibold tabular-nums text-navy">
                {usd(spend)}
                {spend >= SPEND_MAX && "+"}
              </span>
            </div>

            <input
              id="spend"
              type="range"
              min={SPEND_MIN}
              max={SPEND_MAX}
              step={SPEND_STEP}
              value={spend}
              onChange={(e) => setSpend(Number(e.target.value))}
              className="range-brand mt-4"
              style={{
                // Fill the track up to the thumb.
                "--range-progress": `${
                  ((spend - SPEND_MIN) / (SPEND_MAX - SPEND_MIN)) * 100
                }%`,
              } as React.CSSProperties}
              aria-valuetext={`${usd(spend)} per month`}
            />

            <div className="mt-2 flex justify-between text-[11px] text-navy/35">
              <span>{usd(SPEND_MIN)}</span>
              <span>{usd(SPEND_MAX)}+</span>
            </div>
          </div>

          {/* Pace slider */}
          <div className="mt-9">
            <div className="flex items-baseline justify-between gap-4">
              <label htmlFor="pace" className="text-sm font-medium text-navy/70">
                New creatives you launch per week
              </label>
              <span className="font-display text-xl font-semibold tabular-nums text-navy">
                {pace}
              </span>
            </div>

            <input
              id="pace"
              type="range"
              min={PACE_MIN}
              max={PACE_MAX}
              step={1}
              value={pace}
              onChange={(e) => setPace(Number(e.target.value))}
              className="range-brand mt-4"
              style={{
                "--range-progress": `${
                  ((pace - PACE_MIN) / (PACE_MAX - PACE_MIN)) * 100
                }%`,
              } as React.CSSProperties}
              aria-valuetext={`${pace} new creatives per week`}
            />

            <div className="mt-2 flex justify-between text-[11px] text-navy/35">
              <span>0 / week</span>
              <span>20 / week</span>
            </div>
          </div>

          {/* Benchmark readout */}
          <div className="mt-9 rounded-2xl bg-navy-50/70 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-navy/45">
                  Benchmark volume at your spend
                </p>
                <p className="mt-1 font-display text-2xl font-semibold text-navy">
                  {model.targetConcepts}
                  <span className="ml-1.5 text-sm font-normal text-navy/45">
                    concepts / month
                  </span>
                </p>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-navy/50 ring-1 ring-navy/8">
                1 ad / $3,000
              </span>
            </div>

            <div className="mt-4 border-t border-navy/8 pt-4">
              <p className="text-xs uppercase tracking-wider text-navy/45">
                You're currently shipping
              </p>
              <p className="mt-1 font-display text-2xl font-semibold text-navy/60">
                {Math.round(model.currentConcepts)}
                <span className="ml-1.5 text-sm font-normal text-navy/40">
                  concepts / month
                </span>
              </p>

              {gapConcepts > 0 ? (
                <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-amber/15 px-3 py-1 text-xs font-semibold text-amber-600">
                  <TrendingUp size={12} />
                  {gapConcepts} concepts short of the benchmark
                </p>
              ) : (
                <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-navy/8 px-3 py-1 text-xs font-semibold text-navy/60">
                  You're already at benchmark volume
                </p>
              )}
            </div>
          </div>
        </div>

        {/* ---------------- Output ---------------- */}
        <div className="relative bg-navy p-7 text-white sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(252,163,17,0.22) 0%, rgba(252,163,17,0) 70%)",
            }}
          />

          {/* Keyed on the tier so React remounts — and re-animates — the panel
              whenever the slider crosses a tier boundary. */}
          <motion.div
            key={`${model.tier.id}-${model.belowMinimum}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="relative"
          >
              {model.belowMinimum ? (
                <BelowMinimum />
              ) : (
                <>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">
                      Your tier
                    </p>
                    {!model.isCustom && (
                      <RateToggle value={founding} onChange={setFounding} />
                    )}
                  </div>

                  <h3 className="mt-4 font-display text-3xl font-semibold text-white">
                    {model.tier.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/50">
                    {model.tier.spendLabel}
                  </p>

                  {/* Price */}
                  <div className="mt-7 flex items-end gap-2">
                    {model.isCustom || model.price === null ? (
                      <span className="font-display text-4xl font-semibold text-white">
                        Custom
                      </span>
                    ) : (
                      <>
                        <motion.span
                          key={model.price}
                          initial={{ opacity: 0.4, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, ease: EASE }}
                          className="font-display text-5xl font-semibold tabular-nums text-white"
                        >
                          {usd(model.price)}
                        </motion.span>
                        <span className="pb-2 text-sm text-white/45">
                          / month
                        </span>
                      </>
                    )}
                  </div>

                  {founding && !model.isCustom && (
                    <p className="mt-2 text-xs text-amber">
                      Founding rate — first three clients, locked six months.
                      Standard {usd(model.tier.standard ?? 0)}.
                    </p>
                  )}

                  {/* Breakdown */}
                  <dl className="mt-8 space-y-px overflow-hidden rounded-2xl bg-white/[0.06]">
                    <Row
                      label="Concepts delivered"
                      value={
                        model.isCustom
                          ? `${model.targetConcepts}+ / month`
                          : `${model.suppliedConcepts} / month`
                      }
                    />
                    <Row
                      label="Delivered every Monday"
                      value={
                        model.isCustom
                          ? "Custom cadence"
                          : `${Math.round(model.suppliedConcepts / 4)} concepts`
                      }
                    />
                    {model.costPerConcept && (
                      <Row
                        label="Cost per concept"
                        value={usd(Math.round(model.costPerConcept))}
                      />
                    )}
                    {model.shareOfSpend && (
                      <Row
                        label="Share of your ad spend"
                        value={`${model.shareOfSpend.toFixed(1)}%`}
                      />
                    )}
                    <Row
                      label="Hook variants on winners"
                      value="Included"
                      highlight
                    />
                  </dl>

                  {!compact && (
                    <WinnerProjection
                      now={model.winnersNow}
                      with_={model.winnersWith}
                    />
                  )}

                  {/* Carries the two answers they've already given, so the
                      form arrives with those questions pre-selected. */}
                  <Link
                    to={`/free-ad?spend=${bandForSpend(spend)}&pace=${bandForPace(
                      pace
                    )}`}
                    className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-semibold text-ink shadow-amber-glow transition-all hover:-translate-y-0.5 hover:bg-amber-400 focus-ring"
                  >
                    {model.isCustom ? "Talk about custom volume" : "Start with one free ad"}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <p className="mt-4 text-center text-[11px] text-white/35">
                    Month-to-month, no minimum. Half up front, half on day 15.
                  </p>
                </>
              )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 bg-navy px-5 py-3.5">
      <dt className="text-sm text-white/50">{label}</dt>
      <dd
        className={`text-sm font-semibold tabular-nums ${
          highlight ? "text-amber" : "text-white"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}

function RateToggle({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex rounded-full bg-white/10 p-0.5 text-[11px] font-semibold">
      {[
        { label: "Founding", on: true },
        { label: "Standard", on: false },
      ].map((opt) => (
        <button
          key={opt.label}
          type="button"
          onClick={() => onChange(opt.on)}
          className={`relative rounded-full px-3 py-1.5 transition-colors focus-ring ${
            value === opt.on ? "text-ink" : "text-white/55 hover:text-white"
          }`}
        >
          {value === opt.on && (
            <motion.span
              layoutId="rate-pill"
              className="absolute inset-0 rounded-full bg-amber"
              transition={{ duration: 0.3, ease: EASE }}
            />
          )}
          <span className="relative">{opt.label}</span>
        </button>
      ))}
    </div>
  );
}

function WinnerProjection({ now, with_ }: { now: number; with_: number }) {
  const max = Math.max(with_, 1);

  return (
    <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/45">
          Modelled winners per month
        </p>
        <span
          className="group relative mt-0.5 cursor-help text-white/30"
          title="Modelled at the published ~5% win rate from the Motion Creative Benchmarks 2026 report. An estimate based on volume — not a guarantee of results."
        >
          <Info size={13} />
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {[
          { label: "At your current pace", value: now, amber: false },
          { label: "With RetenaAI supply", value: with_, amber: true },
        ].map((row) => (
          <div key={row.label}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-xs text-white/55">{row.label}</span>
              <span
                className={`font-display text-lg font-semibold tabular-nums ${
                  row.amber ? "text-amber" : "text-white/70"
                }`}
              >
                {row.value.toFixed(1)}
              </span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className={`h-full rounded-full ${
                  row.amber ? "gradient-amber" : "bg-white/30"
                }`}
                animate={{ width: `${(row.value / max) * 100}%` }}
                transition={{ duration: 0.5, ease: EASE }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[10px] leading-relaxed text-white/30">
        Volume × the ~5% published win rate. An estimate to size the decision —
        we don't hold your account and we don't promise results.
      </p>
    </div>
  );
}

function BelowMinimum() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">
        Below our minimum
      </p>
      <h3 className="mt-4 font-display text-3xl font-semibold text-white">
        Under $20k/month, this isn't worth your money yet.
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-white/55">
        At that spend you don't have the budget to run enough of the volume we'd
        supply, so you'd be paying for concepts that never get a fair test. Come
        back when you're consistently past $20k — or email us anyway and we'll
        tell you honestly what we'd do in your position.
      </p>
      <a
        href={`mailto:${SITE.email}`}
        className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10 focus-ring"
      >
        Email us anyway
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </a>
    </div>
  );
}
