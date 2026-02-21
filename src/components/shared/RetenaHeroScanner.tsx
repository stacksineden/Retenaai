import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useUserCountry } from "@/hooks/useUserLocation";
import { optimizeUrl } from "@/lib/utils";

// === DATA CONFIGURATION ===
const CAMPAIGN_SETS = [
  {
    id: 1,
    category: "T-SHIRT",
    rawImage:
      "https://res.cloudinary.com/dyryfgjro/image/upload/v1764853767/men_tshirt_Before1_c7bikg.png",
    assets: [
      "https://res.cloudinary.com/dyryfgjro/image/upload/v1763818582/men_tshirt8_ln4k4c.png",
      "https://res.cloudinary.com/dyryfgjro/video/upload/v1771331077/Input_based_on_1080p_202602131227_tmgh1s.mp4",
      "https://res.cloudinary.com/dyryfgjro/image/upload/v1763819461/men_tshirtad1_ejs88w.png",
      "https://res.cloudinary.com/dyryfgjro/image/upload/v1763818633/men_tshirt9_arkh9p.png",
    ],
  },
  {
    id: 2,
    category: "SLIPPERS",
    rawImage: "https://res.cloudinary.com/dyryfgjro/image/upload/v1771533575/men_slippers_A_Before_qy44y1.jpg",
    assets: [
      "https://res.cloudinary.com/dyryfgjro/image/upload/v1771533278/men_slippers_After7_swtfla.png",
      "https://res.cloudinary.com/dyryfgjro/video/upload/v1763802767/vid1_xxbqb1.mp4",
      "https://res.cloudinary.com/dyryfgjro/image/upload/v1771533835/men_slippers_After6_m8wjty.png",
      "https://res.cloudinary.com/dyryfgjro/image/upload/v1771533901/men_slippers_After3_vjz6ly.png",
    ],
  },
  {
    id: 3,
    category: "GYMSUIT",
    rawImage:
      "https://res.cloudinary.com/dyryfgjro/image/upload/v1771331330/women_gymsuit_A_Before_u4q9aw.png",
    assets: [
      "https://res.cloudinary.com/dyryfgjro/image/upload/v1763820099/gym8_jyertv.png",
      "https://res.cloudinary.com/dyryfgjro/video/upload/v1763803284/vid1_zdphwh.mp4",
      "https://res.cloudinary.com/dyryfgjro/image/upload/v1763820036/gym5_zra0oq.png",
      "https://res.cloudinary.com/dyryfgjro/image/upload/v1763820002/gymad1_rmft8w.png",
    ],
  },
  {
    id: 4,
    category: "2PIECE",
    rawImage:
      "https://res.cloudinary.com/dyryfgjro/image/upload/v1771672919/mv-before_ufdi9g.png",
    assets: [
      "https://res.cloudinary.com/dyryfgjro/image/upload/v1771332215/mv-demo9_x6ptiu.png",
      "https://res.cloudinary.com/dyryfgjro/video/upload/v1771409217/mv-vid1_uunsvg.mp4",
      "https://res.cloudinary.com/dyryfgjro/image/upload/v1771407932/mv-demo2_g7ik3b.png",
      "https://res.cloudinary.com/dyryfgjro/image/upload/v1771332039/mv-demo4_dxuwgy.png",
    ],
  },
  {
    id: 5,
    category: "FOOTWEAR",
    rawImage:
      "https://res.cloudinary.com/dyryfgjro/image/upload/v1771411051/asset4a_wsgutc.jpg",
    assets: [
      "https://res.cloudinary.com/dyryfgjro/image/upload/v1771411010/ads17_vkkisd.png",
      "https://res.cloudinary.com/dyryfgjro/video/upload/v1771410814/izzy-vid2_wenfcs.mp4",
      "https://res.cloudinary.com/dyryfgjro/image/upload/v1771411002/ads14_ibcrxk.png",
      "https://res.cloudinary.com/dyryfgjro/image/upload/v1771410999/ads3_xtw1iv.png",
    ],
  },
];

const RetenaInfinityEngine = () => {
  const navigate = useNavigate();
  const { country } = useUserCountry();
  const isNigeria = country === "NG";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFading, setIsFading] = useState(false);

  // === TIMING FIX ===
  useEffect(() => {
    const cycleTime = 6000;
    const interval = setInterval(() => {
      // Step 1: Contract the satellites back to center
      setIsExpanded(false); 
      
      setTimeout(() => {
        // Step 2: Fade out the center image completely
        setIsFading(true); 
        
        setTimeout(() => {
          // Step 3: Swap the data WHILE it is invisible
          setCurrentIndex((prev) => (prev + 1) % CAMPAIGN_SETS.length);
          
          // Step 4: The Silent Loading Buffer (Wait 500ms before fading back in)
          // This gives the browser time to download the new assets in the background
          setTimeout(() => {
            setIsFading(false); // Reveal the new center image
            setTimeout(() => {
              setIsExpanded(true); // Explode the new satellites outward
            }, 500);
          }, 500); 

        }, 500);
      }, 1000);
    }, cycleTime);

    // Initial Trigger
    setTimeout(() => setIsExpanded(true), 500);
    return () => clearInterval(interval);
  }, []);

  const currentSet = CAMPAIGN_SETS[currentIndex];

  // === KEY REMOUNT FIX ===
  // Added an 'assetIndex' parameter to generate strictly unique keys for React
  const renderAsset = (url: string, className: string, assetIndex: number) => {
    const optimizedUrl = optimizeUrl(url);

    if (url.endsWith(".mp4")) {
      return (
        <video
          // FIX: Adding a unique key forces React to destroy the old video completely
          key={`video-${currentSet.id}-${assetIndex}`}
          src={optimizedUrl}
          poster={optimizedUrl.replace(".mp4", ".jpg")}
          className={className}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      );
    }
    return (
      <img
        // FIX: Unique key forces the old image to disappear instantly
        key={`img-${currentSet.id}-${assetIndex}`}
        src={optimizedUrl}
        alt="Asset"
        className={className}
        decoding="async"
      />
    );
  };

  return (
    <div className="relative w-full min-h-[850px] md:min-h-[950px] bg-[#000000] overflow-hidden flex flex-col items-center justify-center pt-14 md:pt-16 pb-4 md:pb-32">
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(229,229,229,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(229,229,229,0.1)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] opacity-20 pointer-events-none"></div>

      {/* === HERO TEXT SECTION === */}
      <div className="relative z-40 text-center px-4 mb-4 md:mb-16 max-w-4xl mx-auto">
        <div className="inline-block bg-[#FCA311]/10 backdrop-blur-md border border-[#FCA311]/30 rounded-full px-3 py-1 md:px-4 md:py-1.5 mb-4 md:mb-6">
          <span className="text-[10px] md:text-xs font-mono text-[#FCA311] tracking-widest uppercase">
            ● The Future of Fashion Production
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold text-[#FFFFFF] mb-4 tracking-tight leading-tight">
          The Virtual Studio <br className="hidden md:block" />
          for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCA311] to-[#E5E5E5]">
            Modern Brands.
          </span>
        </h1>

        <p className="text-[#E5E5E5] text-sm md:text-lg max-w-xl mx-auto leading-relaxed mb-6 opacity-80">
          Turn a single phone photo into a global campaign.{" "}
          <br className="hidden md:block" />
          No models. No logistics. Just world-class visuals.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full my-7 px-4">
          <Button
            className="bg-[#FCA311] text-black hover:text-black hover:bg-[#E5E5E5] text-sm md:text-lg px-6 py-4 rounded md:rounded-lg transform transition duration-300 hover:scale-95 border border-black font-semibold shadow-[0_0_20px_rgba(252,163,17,0.3)] w-full md:w-auto"
            onClick={() =>
              navigate(
                isNigeria
                  ? "/packages-billing?mode=essentials_pack"
                  : "/contact",
              )
            }
          >
            🔥 Get Your First 10 Studio Visuals in 24 Hours
          </Button>
        </div>
        <div
          className={`transition-all duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}
        >
          <p className="text-xs font-mono text-[#FCA311] tracking-[0.2em] uppercase font-bold">
            Rendering: {currentSet.category}
          </p>
        </div>
      </div>

      {/* === ANIMATION ENGINE === */}
      <div className="relative w-full max-w-[1000px] h-[450px] md:h-[600px] flex items-center justify-center mt-4">
        {/* SVG Lines */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[1200px] md:h-[1200px] pointer-events-none z-0 opacity-30 md:opacity-50">
          <line
            x1="50%" y1="50%" x2="15%" y2="15%" stroke="#E5E5E5" strokeWidth="2"
            className={`transition-all duration-1000 ease-out ${isExpanded ? "opacity-100" : "opacity-0"}`}
          />
          <line
            x1="50%" y1="50%" x2="85%" y2="15%" stroke="#E5E5E5" strokeWidth="2"
            className={`transition-all duration-1000 ease-out ${isExpanded ? "opacity-100" : "opacity-0"}`}
          />
          <line
            x1="50%" y1="50%" x2="15%" y2="85%" stroke="#E5E5E5" strokeWidth="2"
            className={`transition-all duration-1000 ease-out ${isExpanded ? "opacity-100" : "opacity-0"}`}
          />
          <line
            x1="50%" y1="50%" x2="85%" y2="85%" stroke="#E5E5E5" strokeWidth="2"
            className={`transition-all duration-1000 ease-out ${isExpanded ? "opacity-100" : "opacity-0"}`}
          />
        </svg>

        {/* === CENTER CORE === */}
        <div
          className={`relative w-40 md:w-80 aspect-[3/4] bg-[#14213D]/50 rounded-xl md:rounded-2xl border border-[#14213D] shadow-2xl z-20 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] 
          ${isExpanded ? "scale-100 ring-2 ring-[#FCA311] shadow-[0_0_50px_rgba(252,163,17,0.3)]" : "scale-110 ring-0"}
          ${isFading ? "opacity-0 blur-sm scale-90" : "opacity-100 blur-0"}
        `}
        >
          <img
            // FIX: Unique key for the raw center image
            key={`raw-${currentSet.id}`}
            src={optimizeUrl(currentSet.rawImage)}
            alt="Raw Input"
            className="w-full h-full object-cover rounded-xl md:rounded-2xl opacity-60 transition-all duration-500"
            decoding="async"
          />
          <div className="absolute -bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 bg-[#000000] text-[#FCA311] text-[10px] md:text-xs font-mono font-bold px-3 py-1 rounded-full border border-[#14213D] whitespace-nowrap">
            RAW INPUT
          </div>
        </div>

        {/* === SATELLITES === */}
        {/* Notice the third parameter (0, 1, 2, 3) passed to renderAsset. This is the index for the unique Key. */}
        <div
          className={`absolute w-28 md:w-64 aspect-[9/16] bg-[#14213D]/30 rounded-lg md:rounded-xl border border-[#14213D] shadow-xl overflow-hidden z-10 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${isExpanded && !isFading ? "-translate-x-[95%] -translate-y-[85%] md:-translate-x-[160%] md:-translate-y-[60%] opacity-100 rotate-[-6deg]" : "translate-x-0 translate-y-0 opacity-0 scale-50"}
        `}
        >
          {renderAsset(currentSet.assets[0], "w-full h-full object-cover", 0)}
          <div className="absolute top-1 left-1 md:top-3 md:left-3 bg-[#FCA311] text-black text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
            IG STORY
          </div>
        </div>

        <div
          className={`absolute w-40 md:w-96 aspect-video bg-[#14213D]/30 rounded-lg md:rounded-xl border border-[#14213D] shadow-xl overflow-hidden z-10 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] delay-75
          ${isExpanded && !isFading ? "translate-x-[85%] -translate-y-[90%] md:translate-x-[130%] md:-translate-y-[80%] opacity-100 rotate-[3deg]" : "translate-x-0 translate-y-0 opacity-0 scale-50"}
        `}
        >
          {renderAsset(currentSet.assets[1], "w-full h-full object-cover", 1)}
          <div className="absolute bottom-1 right-1 md:bottom-3 md:right-3 bg-[#FCA311] text-black text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
            ADVERT
          </div>
        </div>

        <div
          className={`absolute w-32 md:w-60 aspect-square bg-[#14213D]/30 rounded-lg md:rounded-xl border border-[#14213D] shadow-xl overflow-hidden z-10 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] delay-150
          ${isExpanded && !isFading ? "-translate-x-[95%] translate-y-[80%] md:-translate-x-[180%] md:translate-y-[60%] opacity-100 rotate-[5deg]" : "translate-x-0 translate-y-0 opacity-0 scale-50"}
        `}
        >
          {renderAsset(currentSet.assets[2], "w-full h-full object-cover", 2)}
        </div>

        <div
          className={`absolute w-32 md:w-72 aspect-[4/5] bg-[#14213D]/30 rounded-lg md:rounded-xl border border-[#14213D] shadow-xl overflow-hidden z-10 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] delay-100
          ${isExpanded && !isFading ? "translate-x-[90%] translate-y-[80%] md:translate-x-[140%] md:translate-y-[50%] opacity-100 rotate-[-4deg]" : "translate-x-0 translate-y-0 opacity-0 scale-50"}
        `}
        >
          {renderAsset(currentSet.assets[3], "w-full h-full object-cover", 3)}
          <div className="absolute top-1 right-1 md:top-3 md:right-3 bg-[#FCA311] text-black text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
            CAMPAIGN
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetenaInfinityEngine;