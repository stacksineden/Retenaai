import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, RotateCcw } from "lucide-react";
import { useCurrency } from "../context/currency";
import {
  RETAINER,
  formatMoney,
  monthlyTotal,
  totalConcepts,
  type ConceptKind,
  type Mix,
  type Rate,
} from "../data/pricing";

const EASE = [0.16, 1, 0.3, 1] as const;
const { minConcepts: MIN, maxConcepts: MAX, defaultMix: DEFAULT_MIX } = RETAINER;

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

/**
 * Monthly retainer configurator: videos + statics, 12–30 a month combined.
 *
 * Moving one slider past the combined limit nudges the other so the total
 * always stays in range — the slider never just refuses to move.
 *
 * Shows the monthly total ONLY. No unit or per-concept price anywhere; see the
 * display rule in src/data/pricing.ts.
 */
export function PricingConfigurator() {
  const { currency } = useCurrency();
  const [mix, setMix] = useState<Mix>(DEFAULT_MIX);
  const [rate, setRate] = useState<Rate>("founding");

  const total = totalConcepts(mix);
  const price = monthlyTotal(mix, rate, currency);
  const standardPrice = monthlyTotal(mix, "standard", currency);
  const isDefault = mix.video === DEFAULT_MIX.video && mix.static === DEFAULT_MIX.static;

  const setKind = (kind: ConceptKind, value: number) => {
    const other: ConceptKind = kind === "video" ? "static" : "video";
    setMix((m) => ({
      [kind]: value,
      [other]: clamp(m[other], Math.max(0, MIN - value), MAX - value),
    }) as Mix);
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-premium">
      <div className="grid lg:grid-cols-[1.05fr_1fr]">
        {/* ---------------- Mix ---------------- */}
        <div className="border-b border-navy/8 p-7 sm:p-10 lg:border-b-0 lg:border-r">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">
                Build your month
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-navy">
                Choose your mix.
              </h3>
            </div>
            {isDefault ? (
              <span className="mt-1 shrink-0 rounded-full bg-amber/15 px-3 py-1 text-[11px] font-semibold text-amber-600">
                Recommended mix
              </span>
            ) : (
              <button
                type="button"
                onClick={() => setMix(DEFAULT_MIX)}
                className="mt-1 inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-navy/50 ring-1 ring-navy/10 transition-colors hover:text-navy focus-ring"
              >
                <RotateCcw size={11} />
                Recommended mix
              </button>
            )}
          </div>

          <MixSlider
            id="videos"
            label="Video concepts"
            value={mix.video}
            onChange={(v) => setKind("video", v)}
          />
          <MixSlider
            id="statics"
            label="Static concepts"
            value={mix.static}
            onChange={(v) => setKind("static", v)}
          />

          {/* Combined total */}
          <div className="mt-9 rounded-2xl bg-navy-50/70 p-5">
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-xs uppercase tracking-wider text-navy/45">
                Concepts a month
              </p>
              <p className="font-display text-3xl font-semibold tabular-nums text-navy">
                {total}
              </p>
            </div>

            {/* Proportion bar: video vs static */}
            <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-navy/8">
              <motion.div
                className="h-full gradient-amber"
                animate={{ width: `${(mix.video / total) * 100}%` }}
                transition={{ duration: 0.3, ease: EASE }}
              />
              <motion.div
                className="h-full bg-navy/35"
                animate={{ width: `${(mix.static / total) * 100}%` }}
                transition={{ duration: 0.3, ease: EASE }}
              />
            </div>
            <div className="mt-2 flex justify-between text-xs text-navy/50">
              <span>
                <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-amber align-middle" />
                {mix.video} video
              </span>
              <span>
                {mix.static} static
                <span className="ml-1.5 inline-block h-2 w-2 rounded-full bg-navy/35 align-middle" />
              </span>
            </div>

            <p className="mt-4 border-t border-navy/8 pt-3 text-[11px] leading-relaxed text-navy/45">
              {MIN}–{MAX} concepts a month, combined. Want fewer? A one-off
              Creative Drop is below.
            </p>
          </div>
        </div>

        {/* ---------------- Total ---------------- */}
        <div className="relative flex flex-col bg-navy p-7 text-white sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(252,163,17,0.22) 0%, rgba(252,163,17,0) 70%)",
            }}
          />

          <div className="relative flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">
              Monthly total
            </p>
            {price !== null && <RateToggle value={rate} onChange={setRate} />}
          </div>

          <div className="relative mt-6 flex items-end gap-2">
            {price === null ? (
              <span className="font-display text-4xl font-semibold text-white">
                On request
              </span>
            ) : (
              <>
                <motion.span
                  key={`${rate}-${price}`}
                  initial={{ opacity: 0.4, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="font-display text-5xl font-semibold tabular-nums text-white sm:text-6xl"
                >
                  {formatMoney(price, currency)}
                </motion.span>
                <span className="pb-2 text-sm text-white/45">/ month</span>
              </>
            )}
          </div>

          {rate === "founding" && standardPrice !== null && (
            <p className="relative mt-3 text-xs text-amber">
              Founding rate — first three clients, locked six months. Standard{" "}
              {formatMoney(standardPrice, currency)} for this mix.
            </p>
          )}

          <ul className="relative mt-8 space-y-3">
            {[
              `${total} new concepts every month`,
              "Delivered every Monday",
              "Hook variants on anything that wins, within 48 hours",
              "One-page monthly log",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-white/75">
                <span className="mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-amber/20 text-amber">
                  <Check size={11} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="relative mt-auto pt-8">
            <Link
              to="/free-ad"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-semibold text-ink shadow-amber-glow transition-all hover:-translate-y-0.5 hover:bg-amber-400 focus-ring"
            >
              Start with one free ad
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-4 text-center text-[11px] text-white/35">
              Month-to-month, no minimum term. Half up front, half on day 15.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MixSlider({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="mt-9">
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium text-navy/70">
          {label}
        </label>
        <span className="font-display text-xl font-semibold tabular-nums text-navy">
          {value}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={0}
        max={MAX}
        step={1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="range-brand mt-4"
        style={{ "--range-progress": `${(value / MAX) * 100}%` } as React.CSSProperties}
        aria-valuetext={`${value} ${label.toLowerCase()} a month`}
      />
      <div className="mt-2 flex justify-between text-[11px] text-navy/35">
        <span>0</span>
        <span>{MAX}</span>
      </div>
    </div>
  );
}

function RateToggle({ value, onChange }: { value: Rate; onChange: (v: Rate) => void }) {
  return (
    <div className="flex shrink-0 rounded-full bg-white/10 p-0.5 text-[11px] font-semibold">
      {(["founding", "standard"] as const).map((r) => (
        <button
          key={r}
          type="button"
          onClick={() => onChange(r)}
          className={`relative rounded-full px-3 py-1.5 capitalize transition-colors focus-ring ${
            value === r ? "text-ink" : "text-white/55 hover:text-white"
          }`}
        >
          {value === r && (
            <motion.span
              layoutId="config-rate-pill"
              className="absolute inset-0 rounded-full bg-amber"
              transition={{ duration: 0.3, ease: EASE }}
            />
          )}
          <span className="relative">{r}</span>
        </button>
      ))}
    </div>
  );
}
