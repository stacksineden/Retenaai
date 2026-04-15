import  { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ImageIcon, Video, ArrowRight } from "lucide-react";

// ── OPTIMIZATION UTILS ──────────────────────────────────────────────────────
const optimizeMedia = (url: string) => {
  if (!url || !url.includes("cloudinary.com")) return url;
  if (url.includes("w_600") || url.includes("f_auto")) return url;
  const splitUrl = url.split("/upload/");
  if (splitUrl.length !== 2) return url;
  return `${splitUrl[0]}/upload/w_600,f_auto,q_auto/${splitUrl[1]}`;
};

// ── ASSETS ──────────────────────────────────────────────────────────────────
const INPUT_IMAGE = "https://res.cloudinary.com/dyryfgjro/image/upload/v1774516071/vg-proto_nfqqkd.png";

const OUTPUT_VIDEOS = [
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1774516143/viding1_hkga82.mp4",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1774516173/viding8_epmmid.mp4",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1776165739/vg-hype-reel-updated_kc4q0l.mov"
];

const OUTPUT_STATICS = [
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1774516030/ads16_adyqmu.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1774515917/ads12_ibjexf.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1774515112/ads4_v0gl0e.png" 
];

export const StudioPipeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative w-full bg-[#030303] py-24 md:py-32 px-4 sm:px-6 overflow-hidden border-t border-white/5 selection:bg-orange-500/20 selection:text-white">
      
      {/* Subtle Studio Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[300px] bg-[#FCA311]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-[85rem] mx-auto flex flex-col items-center" ref={containerRef}>
        
        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
              One Asset In. <br />
              <span className="text-[#FCA311]">An Entire Campaign Out.</span>
            </h2>
            <p className="text-[#E5E5E5]/70 text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              We don't just animate a photo. We engineer a structured suite of cinematic 
              video hooks and complementary static ads from a single input.
            </p>
          </motion.div>
        </div>

        {/* ── THE PIPELINE UI ── */}
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* 1. THE INPUT (Left Column) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[40%] flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4 px-2">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <span className="text-white font-mono text-xs">01</span>
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">The Input</h3>
            </div>

            <div className="relative flex-grow bg-[#0a0a0a] rounded-[2rem] border border-white/10 p-5 flex flex-col overflow-hidden shadow-2xl">
              {/* Scanning Laser Animation */}
              <motion.div 
                initial={{ top: 0, opacity: 0 }}
                animate={isInView ? { top: ["0%", "100%", "0%"], opacity: [0, 1, 0] } : {}}
                transition={{ duration: 3, ease: "linear", delay: 0.5 }}
                className="absolute left-0 right-0 h-[2px] bg-[#FCA311] shadow-[0_0_20px_#FCA311] z-20 pointer-events-none"
              ></motion.div>

              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-black ring-1 ring-white/5">
                <img 
                  src={optimizeMedia(INPUT_IMAGE)} 
                  alt="Raw Input" 
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5">
                  <span className="text-[#FCA311] font-mono text-sm font-bold uppercase tracking-widest bg-black/50 px-4 py-1.5 rounded-lg backdrop-blur-md border border-[#FCA311]/20">
                    Raw Photo
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. THE CONNECTION (Middle - Desktop Only) */}
          <div className="hidden lg:flex flex-col justify-center items-center px-2 relative">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-12 xl:w-16 h-[2px] bg-gradient-to-r from-transparent via-[#FCA311] to-transparent origin-left"
            ></motion.div>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="absolute w-10 h-10 rounded-full bg-[#050505] border border-[#FCA311]/50 flex items-center justify-center shadow-[0_0_15px_rgba(252,163,17,0.2)]"
            >
              <ArrowRight className="w-5 h-5 text-[#FCA311]" />
            </motion.div>
          </div>

          {/* 3. THE CREATIVE SUITE (Right Column) */}
          <div className="w-full lg:w-[60%] flex flex-col">
            <div className="flex items-center gap-3 mb-4 px-2 lg:mt-0 mt-8">
              <div className="w-8 h-8 rounded-full bg-[#FCA311]/10 flex items-center justify-center border border-[#FCA311]/20">
                <span className="text-[#FCA311] font-mono text-xs">02</span>
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">The Creative Suite</h3>
            </div>

            {/* Final Explicit Grid to guarantee 9:16 video sizing */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full">
              
              {/* Column 1 */}
              <div className="flex flex-col gap-4 md:gap-6">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 group"
                >
                  <video src={optimizeMedia(OUTPUT_VIDEOS[0])} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10">
                    <Video className="w-3.5 h-3.5 text-[#FCA311]" />
                    <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">Video 1</span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full aspect-square rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10"
                >
                  <img src={optimizeMedia(OUTPUT_STATICS[0])} alt="Static Ad" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10">
                    <ImageIcon className="w-3.5 h-3.5 text-white/70" />
                    <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">Ad Creative</span>
                  </div>
                </motion.div>
              </div>

              {/* Column 2 (Staggered down) */}
              <div className="flex flex-col gap-4 md:gap-6 md:mt-12">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full aspect-square rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10"
                >
                  <img src={optimizeMedia(OUTPUT_STATICS[1])} alt="Static Ad" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10">
                    <ImageIcon className="w-3.5 h-3.5 text-white/70" />
                    <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">Ad Creative</span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 group"
                >
                  <video src={optimizeMedia(OUTPUT_VIDEOS[1])} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10">
                    <Video className="w-3.5 h-3.5 text-[#FCA311]" />
                    <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">Video 2</span>
                  </div>
                </motion.div>
              </div>

              {/* Column 3 (Spans full width on mobile, 3rd column on desktop) */}
              <div className="flex flex-col gap-4 md:gap-6 col-span-2 md:col-span-1">
                {/* Video 3 (Tall) */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 group"
                >
                  <video src={optimizeMedia(OUTPUT_VIDEOS[2])} autoPlay muted loop playsInline className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10">
                    <Video className="w-3.5 h-3.5 text-[#FCA311]" />
                    <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">Video 3</span>
                  </div>
                </motion.div>

                {/* NEW: Static 3 (Square) - Added to fill the vacant space */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] }} // Incremented delay
                  className="relative w-full aspect-square rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10"
                >
                  <img src={optimizeMedia(OUTPUT_STATICS[2])} alt="Static Ad 3" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10">
                    <ImageIcon className="w-3.5 h-3.5 text-white/70" />
                    <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">Ad Creative</span>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default StudioPipeline;