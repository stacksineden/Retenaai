import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useUserCountry } from "@/hooks/useUserLocation";
import { ArrowRight } from "lucide-react";

// ── UTILS ───────────────────────────────────────────────────────────────────

/**
 * Optimizes Cloudinary URLs by:
 * 1. Scaling width to 400px (plenty for small grid tiles)
 * 2. Setting automatic format (WebP/AV1)
 * 3. Setting automatic quality
 */
const optimizeUrl = (url: string) => {
  if (url.includes("cloudinary.com") && !url.includes("f_auto")) {
    // w_400 reduces the file size by up to 80% compared to original 1080p uploads
    return url.replace("/upload/", "/upload/w_400,f_auto,q_auto/");
  }
  return url;
};

/**
 * Generates a static JPG thumbnail from a Cloudinary video URL
 * This allows the UI to look "finished" while the video loads.
 */
const getPosterUrl = (url: string) => {
  const optimized = optimizeUrl(url);
  return optimized.replace(/\.(mp4|mov)$/, ".jpg");
};

const COL1 = [
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1763802767/vid1_xxbqb1.mp4",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1776165739/vg-hype-reel-updated_kc4q0l.mov",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1775821123/rove-reel-3-min_m2hohq.mov",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1776168857/mv-vid5_hg06g1.mov",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1774516143/viding1_hkga82.mp4",
];

const COL2 = [
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1771431785/archive5_kyn25y.mov",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1775896853/rove-vid6_u2rhct.mp4",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1763803339/vid2_zwswld.mp4",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1775896823/rove-vid4_xzb0zx.mp4",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1776165739/vg-hype-reel-updated_kc4q0l.mov"
];

const COL3 = [
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1774516173/viding8_epmmid.mp4",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1776165876/viding4_r7pdgt.mp4",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1763803053/vid1_zezmaw.mp4",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1776165398/arike-reel2_clyipu.mov",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1775896817/rove-vid5_miugmx.mp4"
];

const COL4 = [
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1775896819/rove-vid2_gwpglb.mp4",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1775897427/arike-reel2_dba6zd.mov",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1775896941/omolara-reel1_x87yo3.mov",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1776165906/viding7_p4dkfo.mp4",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1776166225/hero-hype_xraeo0.mov"
];

// ── MEDIA TILE ───────────────────────────────────────────────────────────────
const MediaTile = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const optimized = optimizeUrl(src);
  const isVideo = src.endsWith(".mp4") || src.endsWith(".mov");
  const posterUrl = isVideo ? getPosterUrl(src) : undefined;

  useEffect(() => {
    if (!isVideo || !videoRef.current) return;

    // Use Intersection Observer to play only when visible to save mobile CPU/Battery
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {}); // Catch prevents console errors for interrupted plays
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [isVideo]);

  return (
    <div className="relative w-full rounded-xl overflow-hidden aspect-[9/16] bg-[#0a0a0a] flex-shrink-0">
      {isVideo ? (
        <video
          ref={videoRef}
          src={optimized}
          poster={posterUrl}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
        />
      ) : (
        <img
          src={optimized}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="absolute inset-0 rounded-xl ring-1 ring-white/5" />
    </div>
  );
};

// ── SCROLLING COLUMN ─────────────────────────────────────────────────────────
interface ScrollColProps {
  items: string[];
  direction: "up" | "down";
  duration?: number;
}

const ScrollCol = ({ items, direction, duration = 28 }: ScrollColProps) => {
  const doubled = [...items, ...items];
  return (
    <div className="relative flex flex-col overflow-hidden h-full">
      <div
        className="flex flex-col gap-2 md:gap-3"
        style={{
          animation: `scroll${direction === "up" ? "Up" : "Down"} ${duration}s linear infinite`,
          willChange: "transform",
        }}
      >
        {doubled.map((src, i) => (
          <MediaTile key={`${src}-${i}`} src={src} />
        ))}
      </div>
    </div>
  );
};

// ── HERO ─────────────────────────────────────────────────────────────────────
const RetenaHero = () => {
  const navigate = useNavigate();
  const { country } = useUserCountry();
  const isNigeria = country === "NG";
  
  // Logic to detect mobile and prevent rendering the hidden desktop grid
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <style>{`
        @keyframes scrollUp { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
        @keyframes scrollDown { 0% { transform: translateY(-50%); } 100% { transform: translateY(0); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes badgePulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(252,163,17,0.4); } 50% { box-shadow: 0 0 0 8px rgba(252,163,17,0); } }
      `}</style>

      <section className="relative w-full min-h-[70svh] md:min-h-[100svh] bg-black overflow-hidden flex items-center justify-center">
        
        {/* Only render the grid once we know the screen size to avoid double-loading 40+ videos */}
        {isMobile !== null && (
          <>
            {isMobile ? (
              <div className="absolute inset-0 grid grid-cols-2 gap-2 px-2" aria-hidden="true">
                <ScrollCol items={[...COL1, ...COL3]} direction="up" duration={40} />
                <ScrollCol items={[...COL2, ...COL4]} direction="down" duration={35} />
              </div>
            ) : (
              <div 
                className="absolute inset-0 grid gap-3 px-3" 
                style={{ gridTemplateColumns: "repeat(4, 1fr)" }} 
                aria-hidden="true"
              >
                <ScrollCol items={COL1} direction="up" duration={30} />
                <ScrollCol items={COL2} direction="down" duration={26} />
                <ScrollCol items={COL3} direction="up" duration={34} />
                <ScrollCol items={COL4} direction="down" duration={28} />
              </div>
            )}
          </>
        )}

        {/* ── GRADIENT OVERLAYS ── */}
        <div className="absolute inset-0 bg-black/40 md:bg-transparent pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-10" />
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 60%, transparent 100%)",
          }}
        />

        {/* ── HERO CONTENT ── */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-4xl mx-auto py-12">
          <div
            className="inline-flex items-center gap-2 bg-[#FCA311]/10 border border-[#FCA311]/40 rounded-full px-3 py-1.5 mb-6 md:mb-8"
            style={{ animation: "badgePulse 3s ease-in-out infinite, fadeUp 0.6s ease forwards" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FCA311] animate-pulse" />
            <span className="text-[10px] md:text-xs font-mono text-[#FCA311] tracking-widest uppercase">Performance-Driven Video Ads</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-4" style={{ animation: "fadeUp 0.7s ease 0.1s both" }}>
            One Photo.<br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #FCA311 0%, #FFD166 50%, #FCA311 100%)", backgroundSize: "200% auto" }}>A Full Campaign.</span>
          </h1>

          <p className="text-[#E5E5E5]/90 text-sm md:text-xl max-w-xl leading-relaxed mb-8" style={{ animation: "fadeUp 0.7s ease 0.25s both" }}>
            We turn a single product photo into campaign-ready <span className="text-white font-semibold">video ads</span>, delivered in <span className="text-[#FCA311] font-semibold">48 hours</span>.
          </p>

          <div className="flex flex-col w-full sm:w-auto sm:flex-row items-center gap-3 md:gap-4" style={{ animation: "fadeUp 0.7s ease 0.4s both" }}>
            <Button
              className="w-full sm:w-auto bg-[#FCA311] text-black hover:bg-white text-sm md:text-lg px-8 py-4 h-auto rounded-xl font-bold shadow-[0_0_30px_rgba(252,163,17,0.4)] transition-all duration-300"
              onClick={() => navigate(isNigeria ? "/packages" : "/contact")}
            >
              🔥 View Campaign Packages
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              className="w-full sm:w-auto text-white/80 border border-white/10 text-sm md:text-lg px-6 py-4 h-auto rounded-xl hover:bg-white/10"
              onClick={() => navigate("/look-book")}
            >
              See the Lookbook
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default RetenaHero;