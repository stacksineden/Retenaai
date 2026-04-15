import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useUserCountry } from "@/hooks/useUserLocation";
import { ArrowRight } from "lucide-react";

// ── UTILS ───────────────────────────────────────────────────────────────────
const optimizeUrl = (url: string) => {
  if (url.includes("cloudinary.com") && !url.includes("f_auto")) {
    return url.replace("/upload/", "/upload/f_auto,q_auto/");
  }
  return url;
};


const COL1 = [
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1763802767/vid1_xxbqb1.mp4",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1776165739/vg-hype-reel-updated_kc4q0l.mov",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1775821123/rove-reel-3-min_m2hohq.mov",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1776168857/mv-vid5_hg06g1.mov",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1774516143/viding1_hkga82.mp4",
];

const COL2 = [
  "https://res.cloudinary.com/dyryfgjro/video/upload/f_auto,q_auto/v1771431785/archive5_kyn25y.mov",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1775896853/rove-vid6_u2rhct.mp4",
  "https://res.cloudinary.com/dyryfgjro/video/upload/f_auto,q_auto/v1763803339/vid2_zwswld.mp4",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1775896823/rove-vid4_xzb0zx.mp4",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1776165739/vg-hype-reel-updated_kc4q0l.mov"
];

const COL3 = [
  "https://res.cloudinary.com/dyryfgjro/video/upload/f_auto,q_auto/v1774516173/viding8_epmmid.mp4",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1776165876/viding4_r7pdgt.mp4",
  "https://res.cloudinary.com/dyryfgjro/video/upload/f_auto,q_auto/v1763803053/vid1_zezmaw.mp4",
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
  const optimized = optimizeUrl(src);
  const isVideo = src.endsWith(".mp4") || src.endsWith(".mov"); // Also checking for .mov since you added some

  return (
    <div className="relative w-full rounded-xl overflow-hidden aspect-[9/16] bg-[#0a0a0a] flex-shrink-0">
      {isVideo ? (
        <video
          src={optimized}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
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
      {/* subtle vignette on each tile */}
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
  // Duplicate for seamless loop
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

  return (
    <>
      {/* ── Keyframes injected via style tag ── */}
      <style>{`
        @keyframes scrollUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0%   { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(252,163,17,0.4); }
          50%       { box-shadow: 0 0 0 8px rgba(252,163,17,0); }
        }
      `}</style>

      <section className="relative w-full min-h-[70svh] md:min-h-[100svh] bg-black overflow-hidden flex items-center justify-center">
        {/* ── SCROLLING GRID BACKGROUND (MOBILE: 2 COLUMNS) ── */}
        <div
          className="grid md:hidden absolute inset-0 grid-cols-2 gap-2 px-2"
          aria-hidden="true"
        >
          {/* Merged columns for mobile to retain all assets */}
          <ScrollCol items={[...COL1, ...COL3]} direction="up" duration={40} />
          <ScrollCol
            items={[...COL2, ...COL4]}
            direction="down"
            duration={35}
          />
        </div>

        {/* ── SCROLLING GRID BACKGROUND (DESKTOP: ORIGINAL 4 COLUMNS) ── */}
        <div
          className="hidden md:grid absolute inset-0 gap-3 px-3"
          style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
          aria-hidden="true"
        >
          <ScrollCol items={COL1} direction="up" duration={30} />
          <ScrollCol items={COL2} direction="down" duration={26} />
          <ScrollCol items={COL3} direction="up" duration={34} />
          <ScrollCol items={COL4} direction="down" duration={28} />
        </div>

        {/* ── GRADIENT OVERLAYS ── */}
        {/* Slightly darker background on mobile to ensure text readability against 2 columns */}
        <div className="absolute inset-0 bg-black/40 md:bg-transparent pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-10" />
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 60%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[#FCA311]/5 pointer-events-none z-10 mix-blend-overlay" />

        {/* ── HERO CONTENT ── */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-4xl mx-auto py-12">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-[#FCA311]/10 border border-[#FCA311]/40 rounded-full px-3 py-1.5 md:px-4 md:py-1.5 mb-6 md:mb-8"
            style={{
              animation:
                "badgePulse 3s ease-in-out infinite, fadeUp 0.6s ease forwards",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FCA311] animate-pulse" />
            <span className="text-[10px] md:text-xs font-mono text-[#FCA311] tracking-widest uppercase">
              Performance-Driven Video Ads
            </span>
          </div>

          {/* Headline - Responsive scaling to prevent edge squeezing */}
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight md:leading-[0.95] tracking-tight mb-4 md:mb-6 px-2 md:px-0"
            style={{ animation: "fadeUp 0.7s ease 0.1s both" }}
          >
            One Photo.
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FCA311 0%, #FFD166 50%, #FCA311 100%)",
                backgroundSize: "200% auto",
              }}
            >
              A Full Campaign.
            </span>
          </h1>

          {/* Subheadline - Responsive text and extra padding for mobile */}
          <p
            className="text-[#E5E5E5]/90 text-sm sm:text-base md:text-xl max-w-xl leading-relaxed mb-8 md:mb-10 px-4 md:px-0 md:font-medium"
            style={{ animation: "fadeUp 0.7s ease 0.25s both" }}
          >
            We turn a single product photo into campaign-ready{" "}
            <span className="text-white font-semibold">video ads</span>, static
            creatives, and ad copy — delivered in{" "}
            <span className="text-[#FCA311] font-semibold">48 hours</span>. No
            studio. No photographer. No photoshoot budget.
          </p>

          {/* CTAs - Full width on mobile, auto on desktop */}
          <div
            className="flex flex-col w-full sm:w-auto sm:flex-row items-center gap-3 md:gap-4 px-4 md:px-0"
            style={{ animation: "fadeUp 0.7s ease 0.4s both" }}
          >
            <Button
              className="w-full sm:w-auto group bg-[#FCA311] text-black hover:bg-white text-sm md:text-lg px-8 py-4 h-auto rounded-xl font-bold shadow-[0_0_30px_rgba(252,163,17,0.4)] hover:shadow-[0_0_40px_rgba(252,163,17,0.6)] transition-all duration-300 md:hover:scale-105"
              onClick={() => navigate(isNigeria ? "/packages" : "/contact")}
            >
              🔥 View Campaign Packages
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="ghost"
              className="w-full sm:w-auto text-white/80 md:text-white/60 hover:text-white bg-white/5 md:bg-transparent hover:bg-white/10 text-sm md:text-lg px-6 py-4 h-auto rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
              onClick={() => navigate("/look-book")}
            >
              See the Lookbook
            </Button>
          </div>

          {/* Social proof strip - Wrapping enabled for mobile */}
          <div
            className="mt-10 md:mt-12 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 md:gap-6 text-white/50 md:text-white/40 text-[10px] md:text-xs font-mono tracking-wider max-w-xs md:max-w-none mx-auto"
            style={{ animation: "fadeUp 0.7s ease 0.55s both" }}
          >
            <span>T-SHIRTS</span>
            <span className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
            <span>GYMWEAR</span>
            <span className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
            <span>FOOTWEAR</span>
            <span className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
            <span>NATIVE</span>
            <span className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
            <span>STREETWEAR</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default RetenaHero;
