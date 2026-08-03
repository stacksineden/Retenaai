import { motion } from "framer-motion";
import { LEAD_MAGNET } from "../../data/content";
import { Reveal } from "../Reveal";
import { Button } from "../ui/Button";

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
    body: "Against your current best performer, as a fair test. Your account, your budget, your call on how it's set up.",
  },
  {
    n: "03",
    title: "You send the numbers",
    body: "An Ads Manager screenshot at day 7. If it wins, we talk about monthly supply. If it loses, you've lost nothing and we've learned something.",
  },
];

export function LeadMagnet() {
  return (
    <section
      id="the-trade"
      className="gradient-dark noise-overlay relative overflow-hidden py-24 md:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(252,163,17,0.18) 0%, rgba(252,163,17,0) 65%)",
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal y={14}>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber">
              {LEAD_MAGNET.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="text-balance mt-6 font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl">
              I'll build you one ad,{" "}
              <span className="text-gradient-amber">free.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-balance mx-auto mt-6 text-base leading-relaxed text-white/60 md:text-lg">
              {LEAD_MAGNET.body}
            </p>
          </Reveal>
        </div>

        {/* Terms of the trade */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {TERMS.map((term, i) => (
            <motion.div
              key={term.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-all duration-400 hover:-translate-y-1.5 hover:border-amber/40 hover:bg-white/[0.07]"
            >
              <span className="font-display text-sm font-bold text-amber">
                {term.n}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">
                {term.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {term.body}
              </p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-14 max-w-2xl text-center">
            <Button to="/free-ad" variant="amber" withArrow>
              {LEAD_MAGNET.cta}
            </Button>

            <p className="mt-6 text-xs leading-relaxed text-white/40">
              {LEAD_MAGNET.fineprint}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
