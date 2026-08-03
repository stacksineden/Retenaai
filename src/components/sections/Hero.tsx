import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { HERO } from "../../data/content";
import { HERO_FAN, HERO_REEL } from "../../data/media";
import { MediaSlot } from "../MediaSlot";
import { Marquee } from "../Marquee";
import { Button } from "../ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

const TICKER = [
  "DTC skincare",
  "Beauty",
  "Wellness",
  "Any market",
  "$20k+/mo Meta spend",
  "12 concepts a month",
  "3 every Monday",
];

/** Fanned card angles — centre card upright, outer cards tilted away. */
const FAN = [
  { rotate: -7, y: 28, z: 0 },
  { rotate: -3, y: 8, z: 1 },
  { rotate: 0, y: -8, z: 2 },
  { rotate: 3, y: 8, z: 1 },
  { rotate: 7, y: 28, z: 0 },
];

export function Hero() {
  const reelRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: reelRef,
    offset: ["start end", "end start"],
  });

  const reelY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  // Showreel sits in the middle, flanked by the four fan cards.
  const cards = [
    HERO_FAN[0],
    HERO_FAN[1],
    HERO_REEL,
    HERO_FAN[2],
    HERO_FAN[3],
  ];

  return (
    <section className="gradient-hero relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Ambient shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(252,163,17,0.22) 0%, rgba(252,163,17,0) 70%)",
          }}
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 left-[-15%] h-[380px] w-[380px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(20,33,61,0.12) 0%, rgba(20,33,61,0) 70%)",
          }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy/70 shadow-sm backdrop-blur"
          >
            <Sparkles size={14} className="text-amber" />
            {HERO.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="text-balance mt-6 font-display text-4xl font-semibold leading-[1.06] text-navy sm:text-5xl md:text-[4rem]"
          >
            You're not shipping enough ads to{" "}
            <span className="relative inline-block">
              <span className="text-gradient-amber">find a winner.</span>
              <motion.span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full gradient-amber"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
            className="text-balance mx-auto mt-7 max-w-xl text-lg leading-relaxed text-navy/65"
          >
            {HERO.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: EASE }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button to="/free-ad" variant="primary" withArrow>
              {HERO.ctaPrimary}
            </Button>
            <Button to="/pricing" variant="secondary">
              {HERO.ctaSecondary}
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-5 text-xs text-navy/45"
          >
            No retainer to claim it. Run it for 7 days, send the numbers.
          </motion.p>
        </div>

        {/* Fanned showreel */}
        <motion.div
          ref={reelRef}
          style={{ y: reelY }}
          className="mt-16 flex items-end justify-center gap-2 sm:gap-4 md:mt-20"
        >
          {cards.map((asset, i) => {
            const fan = FAN[i];
            // Outermost pair only appears once there's room for it.
            const responsive = i === 0 || i === 4 ? "hidden sm:block" : "";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, rotate: 0 }}
                animate={{ opacity: 1, y: fan.y, rotate: fan.rotate }}
                transition={{ duration: 0.9, delay: 0.5 + i * 0.08, ease: EASE }}
                whileHover={{ y: fan.y - 14, rotate: 0, scale: 1.03 }}
                style={{ zIndex: fan.z }}
                className={`w-[29vw] max-w-[190px] sm:w-[21vw] ${responsive}`}
              >
                <MediaSlot
                  asset={asset}
                  ratio="9:16"
                  placeholderLabel="Concept"
                  className="shadow-premium ring-1 ring-navy/10"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="container-page relative mt-20">
        <Marquee items={TICKER} />
      </div>
    </section>
  );
}
