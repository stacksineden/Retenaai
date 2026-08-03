import { motion } from "framer-motion";
import { FINAL_CTA } from "../../data/content";
import { Reveal } from "../Reveal";
import { Button } from "../ui/Button";

export function FinalCta() {
  return (
    <section className="relative bg-white pb-24 pt-8 md:pb-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-8 py-16 text-center md:px-16 md:py-24">
          {/* Animated aurora */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <motion.div
              className="absolute left-1/4 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(252,163,17,0.28) 0%, rgba(252,163,17,0) 65%)",
              }}
              animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 right-1/4 h-[360px] w-[360px] translate-x-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(229,229,229,0.16) 0%, rgba(229,229,229,0) 65%)",
              }}
              animate={{ x: [0, -60, 0], y: [0, -30, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <Reveal>
              <h2 className="text-balance font-display text-3xl font-semibold leading-[1.1] text-white sm:text-4xl md:text-5xl">
                {FINAL_CTA.headline}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-balance mx-auto mt-6 text-base leading-relaxed text-white/60 md:text-lg">
                {FINAL_CTA.body}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button to="/free-ad" variant="amber" withArrow>
                  {FINAL_CTA.cta}
                </Button>
                <Button to="/pricing" variant="ghost-dark">
                  Size your volume
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <p className="mt-8 text-xs text-white/35">
                Replies come from a person, usually same day.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
