import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ANCHOR } from "../../data/content";
import { Reveal } from "../Reveal";
import { Button } from "../ui/Button";

export function Anchor() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      ref={ref}
      className="gradient-dark noise-overlay relative overflow-hidden py-24 md:py-32"
    >
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(circle, rgba(252,163,17,0.20) 0%, rgba(252,163,17,0) 65%)",
          }}
        />
      </motion.div>

      <div className="container-page relative text-center">
        <Reveal y={14}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber">
            <span className="h-px w-6 bg-current opacity-50" />
            The anchor number
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-8 max-w-4xl font-display text-[2.5rem] font-semibold leading-[1.05] text-white sm:text-6xl md:text-7xl">
            One new ad per{" "}
            <span className="text-gradient-amber">$3,000</span> of monthly
            spend.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="text-balance mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/55 md:text-lg">
            {ANCHOR.body}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-6">
            {[
              { spend: "$20k", ads: "7 ads" },
              { spend: "$45k", ads: "15 ads" },
              { spend: "$90k", ads: "30 ads" },
            ].map((row) => (
              <div
                key={row.spend}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors hover:border-amber/40"
              >
                <p className="text-xs uppercase tracking-wider text-white/40">
                  {row.spend} / month
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-white">
                  {row.ads}
                  <span className="ml-1 text-sm font-normal text-white/40">
                    / month
                  </span>
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-12">
            <Button to="/pricing" variant="amber" withArrow>
              Size your volume
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
