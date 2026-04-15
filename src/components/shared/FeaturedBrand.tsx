import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Sparkles, Image as ImageIcon } from "lucide-react";

// ── OPTIMIZATION UTILS ──────────────────────────────────────────────────────
const optimizeMedia = (url: string) => {
  if (!url || !url.includes("cloudinary.com")) return url;
  if (url.includes("w_600") || url.includes("f_auto")) return url;
  const splitUrl = url.split("/upload/");
  if (splitUrl.length !== 2) return url;
  return `${splitUrl[0]}/upload/w_600,f_auto,q_auto/${splitUrl[1]}`;
};

// ── ASSETS ──────────────────────────────────────────────────────────────────
const BEFORE_IMAGE = "https://res.cloudinary.com/dyryfgjro/image/upload/v1776265995/rove-before_veaieo.png";

const OUTPUT_ASSETS = [
  {
    src: "https://res.cloudinary.com/dyryfgjro/video/upload/v1775821123/rove-reel-3-min_m2hohq.mov",
    type: "video" as const,
    label: "TikTok Performance Hook",
  },
  {
    src: "https://res.cloudinary.com/dyryfgjro/video/upload/v1775896817/rove-vid3_myukx5.mp4",
    type: "video" as const,
    label: "Cinematic Brand Ad",
  },
  {
    src: "https://res.cloudinary.com/dyryfgjro/image/upload/v1775807400/rove-demo7_ri28ha.jpg",
    type: "image" as const,
    label: "Website Hero Image",
  },
  {
    src: "https://res.cloudinary.com/dyryfgjro/image/upload/v1775807393/rove-demo9_kgtskb.jpg",
    type: "image" as const,
    label: "Instagram Carousel",
  },
];

export const MadeByHere = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#030303] py-24 md:py-32 px-4 sm:px-6 overflow-hidden border-t border-white/5"
    >
      {/* ── BACKGROUND AMBIENCE ── */}
      <motion.div
        style={{ y: glowY }}
        className="absolute top-1/2 left-0 w-full max-w-3xl h-[500px] bg-[#FCA311]/5 blur-[150px] rounded-full pointer-events-none z-0"
      />

      <div className="relative z-10 w-full max-w-[85rem] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* ── LEFT COLUMN: THE STORY & CATALYST (Sticky) ── */}
        <div className="w-full lg:w-[40%] lg:sticky lg:top-32 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#FCA311]" />
              <span className="text-[10px] md:text-xs font-mono text-[#FCA311] tracking-widest uppercase">
                Case Study
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter mb-6">
              From Mirror <br />
              <span className="text-[#FCA311]">Selfie to Masterpiece.</span>
            </h2>

            <p className="text-[#E5E5E5]/70 text-base md:text-lg font-medium leading-relaxed max-w-md">
              She had a flawless product vision, but only a dark mirror selfie
              for her launch. We transformed that singular input into a
              cohesive, high-fidelity athletic campaign. No photographer
              required.
            </p>
          </motion.div>

          {/* The Catalyst Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden bg-[#0a0a0a] ring-1 ring-white/10 p-3 shadow-2xl"
          >
            <img
              src={BEFORE_IMAGE}
              alt="Raw Mirror Selfie"
              className="w-full h-full object-cover rounded-2xl opacity-70 grayscale-[30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none rounded-3xl" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                <span className="text-white/50 font-mono text-xs uppercase tracking-widest">
                  Input
                </span>
                <span className="text-white font-bold text-sm">
                  Mirror Selfie
                </span>
              </div>
              <p className="text-white/50 text-xs leading-relaxed">
                Raw lighting, unstyled environment, heavy shadows.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN: THE CAMPAIGN OUTPUT (2-Column Grid) ── */}
        <div className="w-full lg:w-[60%] lg:pt-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Output Column */}
            <div className="flex flex-col gap-6 lg:gap-8">
              {[OUTPUT_ASSETS[0], OUTPUT_ASSETS[2]].map((asset, index) => (
                <OutputCard
                  key={`left-${index}`}
                  asset={asset}
                  index={index}
                  delayOffset={0.4}
                />
              ))}
            </div>

            {/* Right Output Column (Staggered Down) */}
            <div className="flex flex-col gap-6 lg:gap-8 sm:mt-16">
              {[OUTPUT_ASSETS[1], OUTPUT_ASSETS[3]].map((asset, index) => (
                <OutputCard
                  key={`right-${index}`}
                  asset={asset}
                  index={index}
                  delayOffset={0.6}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ── TYPES ───────────────────────────────────────────────────────────────────
interface OutputAsset {
  src: string;
  type: "video" | "image";
  label: string;
}

interface OutputCardProps {
  asset: OutputAsset;
  index: number;
  delayOffset: number;
}

// ── REUSABLE ASSET CARD ─────────────────────────────────────────────────────
const OutputCard = ({ asset, index, delayOffset }: OutputCardProps) => {
  const isVideo = asset.type === "video";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: delayOffset + index * 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative w-full rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-2xl group ${
        isVideo ? "aspect-[9/16]" : "aspect-[4/5]"
      }`}
    >
      {isVideo ? (
        <video
          src={optimizeMedia(asset.src)}
          className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-[1.03]"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <img
          src={optimizeMedia(asset.src)}
          alt={asset.label}
          className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-[1.03]"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none" />

      <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10">
        {isVideo ? (
          <Play className="w-3.5 h-3.5 text-[#FCA311] fill-[#FCA311]" />
        ) : (
          <ImageIcon className="w-3.5 h-3.5 text-white/70" />
        )}
        <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">
          {asset.type}
        </span>
      </div>

      <div className="absolute bottom-5 left-5 right-5">
        <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
          {asset.label}
        </h3>
      </div>
    </motion.div>
  );
};

export default MadeByHere;
