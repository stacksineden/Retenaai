import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ── OPTIMIZATION UTILS ──────────────────────────────────────────────────────
const optimizeUrl = (url: string) => {
  if (!url || !url.includes("cloudinary.com")) return url;
  if (url.includes("w_600") || url.includes("f_auto")) return url;
  const splitUrl = url.split("/upload/");
  if (splitUrl.length !== 2) return url;
  return `${splitUrl[0]}/upload/w_600,f_auto,q_auto/${splitUrl[1]}`;
};

// ── ASSETS ──────────────────────────────────────────────────────────────────
// Now mapped to Raw Input (Image) -> Generated Output (Video)
const transformations = [
  {
    rawImage: "https://res.cloudinary.com/dyryfgjro/image/upload/v1776267068/ar-before1_dvfyzb.png",
    outputVideo: "https://res.cloudinary.com/dyryfgjro/video/upload/v1776165398/arike-reel2_clyipu.mov",
  },
  {
    rawImage: "https://res.cloudinary.com/dyryfgjro/image/upload/v1776267341/mv-before_cggoxo.png",
    outputVideo: "https://res.cloudinary.com/dyryfgjro/video/upload/v1776166225/hero-hype_xraeo0.mov",
  },
  {
    rawImage: "https://res.cloudinary.com/dyryfgjro/image/upload/v1776265995/rove-before_veaieo.png",
    outputVideo: "https://res.cloudinary.com/dyryfgjro/video/upload/v1775896819/rove-vid2_gwpglb.mp4",
  },
];

const BeforeAndAfterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative bg-[#030303] text-white py-9 md:py-32 px-4 sm:px-6 overflow-hidden border-t border-white/5"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-[#FCA311]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* ── ALIGNED HEADER ── */}
        <div className="text-center mb-16 md:mb-24 px-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6 break-words">
              Real Transformations. <br className="hidden sm:block" />
              <span className="text-[#FCA311]">Real Growth.</span>
            </h2>
            <p className="text-[#E5E5E5]/70 text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto px-2">
              See how a single raw image evolves into a campaign-ready cinematic visual — perfectly aligned with your brand story.
            </p>
          </motion.div>
        </div>

        {/* ── SLIDER GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {transformations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[9/16] bg-[#0a0a0a] ring-1 ring-white/10"
            >
              {/* BASE LAYER (Generated Video playing continuously) */}
              <video
                src={optimizeUrl(item.outputVideo)}
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
              />

              {/* OVERLAY LAYER (Raw Input wiping away to reveal video) */}
              <motion.div
                initial={{ clipPath: "inset(0 0 0 0)" }}
                animate={
                  isInView
                    ? {
                        clipPath: [
                          "inset(0 0 0 0)",      // Fully covers (Shows Raw)
                          "inset(0 100% 0 0)",   // Wipes right-to-left (Reveals Video)
                          "inset(0 0 0 0)",      // Wipes back (Shows Raw)
                        ],
                        transition: {
                          delay: i * 0.4,        // Staggered starts
                          duration: 5,           // Slower, more cinematic wipe
                          repeat: Infinity,
                          repeatDelay: 1,        // Pauses briefly at full open/close
                          ease: "easeInOut",
                        },
                      }
                    : {}
                }
                className="absolute top-0 left-0 w-full h-full z-10"
              >
                <img
                  src={optimizeUrl(item.rawImage)}
                  alt="Raw Phone Input"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-90 grayscale-[20%]" // Slight grayscale makes the video reveal pop harder
                />
              </motion.div>

              {/* THE GOLDEN SCANNER BAR */}
              <motion.div
                initial={{ left: "100%" }}
                animate={
                  isInView
                    ? {
                        left: ["100%", "0%", "100%"],
                        transition: {
                          delay: i * 0.4,
                          duration: 5,
                          repeat: Infinity,
                          repeatDelay: 1,
                          ease: "easeInOut",
                        },
                      }
                    : {}
                }
                className="absolute top-0 h-full w-[2px] bg-[#FCA311] z-20 shadow-[0_0_20px_#FCA311]"
              />

              {/* FLOATING LABELS (To ensure the user knows what they are looking at) */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between z-30 pointer-events-none">
                <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-mono font-bold text-white/70 uppercase tracking-widest border border-white/10">
                  Raw Photo
                </span>
                <span className="bg-[#FCA311]/90 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-mono font-bold text-black uppercase tracking-widest shadow-[0_0_10px_rgba(252,163,17,0.5)]">
                  Cinematic Ad
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAndAfterSection;