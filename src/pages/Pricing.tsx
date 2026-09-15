import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { PricingConfigurator } from "../components/PricingConfigurator";
import { DropCard } from "../components/DropCard";
import { RETAINER, formatMoney, monthlyTotal } from "../data/pricing";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { Faq } from "../components/sections/Faq";
import { FinalCta } from "../components/sections/FinalCta";

import { usePageMeta } from "../hooks/usePageMeta";
import { ROUTE_META } from "../data/seo";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Our column in the comparison table, from the same data as the configurator. */
const DEFAULT_MONTHLY = monthlyTotal(RETAINER.defaultConcepts, "founding");

type ComparisonRow = {
  label: string;
  us: boolean;
  ugc: boolean;
  agency: boolean;
  usNote?: string;
  agencyNote?: string;
};

const COMPARISON: ComparisonRow[] = [
  {
    label: "12 concepts a month",
    us: true,
    ugc: true,
    agency: false,
    agencyNote: "Usually 4–6",
  },
  { label: "Fixed cost as your spend scales", us: true, ugc: false, agency: false },
  { label: "No usage-rights renewals", us: true, ugc: false, agency: false },
  { label: "New hooks on winners in 48h", us: true, ugc: false, agency: false },
  { label: "Monthly written testing log", us: true, ugc: false, agency: false },
  { label: "Month-to-month, no minimum", us: true, ugc: true, agency: false },
  {
    label: "One-off, no commitment",
    us: true,
    usNote: "Drop, from $1,200",
    ugc: true,
    agency: false,
  },
  { label: "Real people on camera", us: false, ugc: true, agency: true },
];

export function Pricing() {
  usePageMeta(ROUTE_META.pricing);

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -top-32 right-[-5%] h-[420px] w-[420px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(252,163,17,0.18) 0%, rgba(252,163,17,0) 70%)",
            }}
            animate={{ y: [0, 22, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy/70 shadow-sm backdrop-blur"
            >
              Pricing
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              className="text-balance mt-6 font-display text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl md:text-6xl"
            >
              Your price is a function of{" "}
              <span className="text-gradient-amber">how much you want to test.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
              className="text-balance mx-auto mt-6 max-w-xl text-lg leading-relaxed text-navy/65"
            >
              Slide to how many concepts you want each month and the total
              updates as you go. Month-to-month, with hook variants on winners
              included.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Monthly retainer configurator */}
      <section className="relative bg-white pb-24 md:pb-32">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: EASE }}
          >
            <PricingConfigurator />
          </motion.div>
        </div>
      </section>

      {/* One-off */}
      <section id="drop" className="relative scroll-mt-20 bg-navy-50/40 py-24 md:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="One-off"
            title="Not ready for a retainer?"
            body="A Creative Drop is a single batch of concepts, paid once, with no monthly commitment."
          />

          <div className="mx-auto mt-14 max-w-4xl">
            <DropCard />
          </div>
        </div>
      </section>

      {/* What it replaces */}
      <section id="compare" className="relative scroll-mt-20 bg-white py-24 md:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="What it replaces"
            title="Against the alternatives, at the same volume."
            body="We're not the right answer for every kind of creative. Where a real person on camera is the whole point, hire a creator. Where volume is the constraint, this is cheaper and faster by a wide margin."
          />

          <Reveal className="mt-14" delay={0.1}>
            <div className="mx-auto max-w-4xl overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-navy/10">
                    <th className="py-4 pr-4 text-xs font-semibold uppercase tracking-wider text-navy/40">
                      &nbsp;
                    </th>
                    <th className="w-32 py-4 text-center">
                      <span className="font-display text-sm font-semibold text-navy">
                        RetenaAI
                      </span>
                      <span className="mt-1 block text-[11px] font-normal text-amber-600">
                        {formatMoney(DEFAULT_MONTHLY)}/mo, {RETAINER.defaultConcepts} concepts
                      </span>
                    </th>
                    <th className="w-32 py-4 text-center">
                      <span className="font-display text-sm font-semibold text-navy/70">
                        UGC creators
                      </span>
                      <span className="mt-1 block text-[11px] font-normal text-navy/40">
                        ~$3,500 w/ rights
                      </span>
                    </th>
                    <th className="w-32 py-4 text-center">
                      <span className="font-display text-sm font-semibold text-navy/70">
                        Video agency
                      </span>
                      <span className="mt-1 block text-[11px] font-normal text-navy/40">
                        $5,000+/mo
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <motion.tr
                      key={row.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.05,
                        ease: EASE,
                      }}
                      className="border-b border-navy/6 transition-colors hover:bg-navy-50/50"
                    >
                      <td className="py-4 pr-4 text-sm text-navy/70">
                        {row.label}
                      </td>
                      <td className="py-4 text-center">
                        <Mark on={row.us} note={row.usNote} />
                      </td>
                      <td className="py-4 text-center">
                        <Mark on={row.ugc} />
                      </td>
                      <td className="py-4 text-center">
                        <Mark on={row.agency} note={row.agencyNote} />
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mx-auto mt-12 max-w-2xl rounded-3xl bg-navy p-8 text-center md:p-10">
              <h3 className="font-display text-xl font-semibold text-white md:text-2xl">
                Why we can hold this price while creator costs climb
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                We carry zero usage rights. A creator's fee goes up as your spend
                goes up, because rights are priced against reach. Ours don't move.
                That gap widens the more you scale — which is the entire reason
                this business works.
              </p>
              <div className="mt-8">
                <Button to="/free-ad" variant="amber" withArrow>
                  Get one ad free
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="bg-navy-50/40">
        <Faq />
      </div>
      <FinalCta />
    </>
  );
}

function Mark({ on, note }: { on: boolean; note?: string }) {
  if (on) {
    return (
      <span className="flex flex-col items-center gap-1">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-amber/15 text-amber-600">
          <Check size={14} strokeWidth={3} />
        </span>
        {note && <span className="text-[10px] text-amber-600">{note}</span>}
      </span>
    );
  }

  return (
    <span className="flex flex-col items-center gap-1">
      <span className="grid h-7 w-7 place-items-center rounded-full bg-navy/6 text-navy/25">
        <Minus size={14} strokeWidth={3} />
      </span>
      {note && <span className="text-[10px] text-navy/35">{note}</span>}
    </span>
  );
}
