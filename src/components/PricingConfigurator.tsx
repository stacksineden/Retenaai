import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useVisitorLocation } from "../context/location";
import { RETAINER, formatMoney, monthlyTotal, type Rate } from "../data/pricing";

const EASE = [0.16, 1, 0.3, 1] as const;
const { minConcepts: MIN, maxConcepts: MAX, defaultConcepts: DEFAULT } = RETAINER;

/**
 * Monthly retainer: one slider, concepts a month (12–30), flat rate.
 *
 * The video/static mix is stated in copy, not chosen, so nobody can configure
 * an all-video month. The monthly total is the only price shown — never a
 * per-concept rate (see src/data/pricing.ts).
 *
 * Visitors in Nigeria keep the slider but get a "Request a quote" panel
 * instead of a price.
 */
export function PricingConfigurator() {
  const { resolved, isNigeria } = useVisitorLocation();
  const [concepts, setConcepts] = useState(DEFAULT);
  const [rate, setRate] = useState<Rate>("founding");

  const price = monthlyTotal(concepts, rate);
  const standardPrice = monthlyTotal(concepts, "standard");

  const features = [
    `${concepts} new concepts every month`,
    "Delivered every Monday",
    "Hook variants on anything that wins, within 48 hours",
    "One-page monthly log",
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-premium">
      <div className="grid lg:grid-cols-[1.05fr_1fr]">
        {/* ---------------- Volume ---------------- */}
        <div className="border-b border-navy/8 p-7 sm:p-10 lg:border-b-0 lg:border-r">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">
            Build your month
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-navy">
            How much do you want to test?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-navy/55">
            Typically 4 video and 8 static a month. We set the mix against what
            your account needs and what's winning — you don't have to decide up
            front.
          </p>

          <div className="mt-9">
            <div className="flex items-baseline justify-between gap-4">
              <label htmlFor="concepts" className="text-sm font-medium text-navy/70">
                Concepts a month
              </label>
              <span className="font-display text-xl font-semibold tabular-nums text-navy">
                {concepts}
              </span>
            </div>
            <input
              id="concepts"
              type="range"
              min={MIN}
              max={MAX}
              step={1}
              value={concepts}
              onChange={(e) => setConcepts(Number(e.target.value))}
              className="range-brand mt-4"
              style={
                {
                  "--range-progress": `${((concepts - MIN) / (MAX - MIN)) * 100}%`,
                } as React.CSSProperties
              }
              aria-valuetext={`${concepts} concepts a month`}
            />
            <div className="mt-2 flex justify-between text-[11px] text-navy/35">
              <span>{MIN}</span>
              <span>{MAX}</span>
            </div>
          </div>

          <p className="mt-8 text-[11px] leading-relaxed text-navy/45">
            {MIN}–{MAX} concepts a month. Want fewer? A one-off Creative Drop is
            below.
          </p>
        </div>

        {/* ---------------- Price / quote ---------------- */}
        <div className="relative flex flex-col bg-navy p-7 text-white sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(252,163,17,0.22) 0%, rgba(252,163,17,0) 70%)",
            }}
          />

          {!resolved ? (
            // Waiting on location, so no price flashes before a quote panel.
            <div className="relative" aria-hidden>
              <div className="h-3 w-24 rounded-full bg-white/10" />
              <div className="mt-7 h-14 w-48 animate-pulse rounded-xl bg-white/10" />
              <div className="mt-4 h-3 w-64 rounded-full bg-white/10" />
            </div>
          ) : isNigeria ? (
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">
                Pricing
              </p>
              <h3 className="mt-5 font-display text-4xl font-semibold text-white">
                Let's talk
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
                Pricing here works differently. Tell us what you're running and
                we'll come back with a number.
              </p>
            </div>
          ) : (
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">
                  Monthly total
                </p>
                <RateToggle value={rate} onChange={setRate} />
              </div>

              <div className="mt-6 flex items-end gap-2">
                <motion.span
                  key={`${rate}-${price}`}
                  initial={{ opacity: 0.4, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="font-display text-5xl font-semibold tabular-nums text-white sm:text-6xl"
                >
                  {formatMoney(price)}
                </motion.span>
                <span className="pb-2 text-sm text-white/45">/ month</span>
              </div>

              {rate === "founding" && (
                <p className="mt-3 text-xs text-amber">
                  Founding rate — first three clients, locked six months. Standard{" "}
                  {formatMoney(standardPrice)} at this volume.
                </p>
              )}
            </div>
          )}

          <ul className="relative mt-8 space-y-3">
            {features.map((item) => (
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
              to={isNigeria ? `/free-ad?interest=quote&concepts=${concepts}` : "/free-ad"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-semibold text-ink shadow-amber-glow transition-all hover:-translate-y-0.5 hover:bg-amber-400 focus-ring"
            >
              {isNigeria ? "Request a quote" : "Start with one free ad"}
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
