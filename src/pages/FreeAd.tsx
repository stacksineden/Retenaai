import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { LeadForm } from "../components/LeadForm";
import { Reveal } from "../components/Reveal";
import { usePageMeta } from "../hooks/usePageMeta";

const EASE = [0.16, 1, 0.3, 1] as const;

const TERMS = [
  {
    n: "01",
    title: "We build one ad, free",
    body: "On your existing best-performing angle, pulled from your ad library. Not a generic template — the aim is to win, not to be clever.",
  },
  {
    n: "02",
    title: "You run it for 7 days",
    body: "Against your current best performer. Your account, your budget, your call on how it's set up.",
  },
  {
    n: "03",
    title: "You send the numbers",
    body: "An Ads Manager screenshot at day 7. If it wins, we talk about monthly supply. If it loses, you've lost nothing and we've learned something.",
  },
];

export function FreeAd() {
  usePageMeta({
    title: "Claim your free ad — RetenaAI",
    description:
      "We'll build one Meta ad concept free, on your best-performing angle. Run it for 7 days against your control and send us the numbers.",
  });

  return (
    <section className="gradient-hero relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 right-[-10%] h-[460px] w-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(252,163,17,0.18) 0%, rgba(252,163,17,0) 70%)",
          }}
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* Left — the pitch */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600"
            >
              No upfront cost
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              className="text-balance mt-6 font-display text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl"
            >
              I'll build you one ad,{" "}
              <span className="text-gradient-amber">free.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
              className="mt-6 max-w-lg text-base leading-relaxed text-navy/65 md:text-lg"
            >
              The only condition: run it for 7 days against your current best
              performer and send me the numbers. It's a trade, not a gift.
            </motion.p>

            <div className="mt-10 space-y-6">
              {TERMS.map((term, i) => (
                <motion.div
                  key={term.n}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.24 + i * 0.1,
                    ease: EASE,
                  }}
                  className="flex gap-4"
                >
                  <span className="mt-0.5 font-display text-sm font-bold text-amber-600">
                    {term.n}
                  </span>
                  <div>
                    <h2 className="font-display text-base font-semibold text-navy">
                      {term.title}
                    </h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy/60">
                      {term.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Reveal delay={0.5}>
              <div className="mt-10 rounded-2xl border border-navy/8 bg-white/70 p-5 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-wider text-navy/45">
                  Who this is for
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    "DTC skincare, beauty or wellness",
                    "$20k+/month on Meta, in any market",
                    "Shipping fewer than 8 new creatives a month",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-navy/65"
                    >
                      <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-amber/15 text-amber-600">
                        <Check size={10} strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-navy/8 pt-3 text-[11px] leading-relaxed text-navy/40">
                  Limited to the first four brands. Tracked by name — when it's
                  done, it stops.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right — the form */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
