import { proofAssets } from "@/modelDataset";
import { useEffect, useRef, useState } from "react";

// ── OPTIMIZATION UTILS ──────────────────────────────────────────────────────
const optimizeMedia = (url: string) => {
  if (!url || !url.includes("cloudinary.com")) return url;
  if (url.includes("w_600") || url.includes("f_auto")) return url;
  const splitUrl = url.split("/upload/");
  if (splitUrl.length !== 2) return url;
  return `${splitUrl[0]}/upload/w_600,f_auto,q_auto/${splitUrl[1]}`;
};

const getVideoPoster = (url: string) => {
  if (!url || !url.includes("cloudinary.com")) return "";
  const posterUrl = url.replace(".mp4", ".jpg").replace(".mov", ".jpg");
  return optimizeMedia(posterUrl);
};


// ── MEDIA CARD ──────────────────────────────────────────────────────────────
const MediaCard = ({ src, index }: { src: string; index: number }) => {
  const isVideo = src.endsWith(".mp4") || src.endsWith(".mov");
  const optimizedSrc = optimizeMedia(src);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isVideo || !videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {});
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [isVideo]);

  return (
    <div
      className="relative rounded-2xl overflow-hidden mb-4 md:mb-6 break-inside-avoid bg-[#0a0a0a] ring-1 ring-white/5 group shadow-2xl"
      style={{
        animation: `fadeUp 0.8s ease ${0.15 * index}s both`,
      }}
    >
      {isVideo ? (
        <video
          ref={videoRef}
          src={optimizedSrc}
          poster={getVideoPoster(src)}
          className="w-full h-auto object-cover transform transition-all duration-1000 group-hover:scale-[1.03] opacity-0"
          muted
          loop
          playsInline
          onCanPlay={(e) => e.currentTarget.classList.remove("opacity-0")}
        />
      ) : (
        <img
          src={optimizedSrc}
          alt="Fashion Ad Creative"
          className="w-full h-auto object-cover transform transition-all duration-1000 group-hover:scale-[1.03] opacity-0"
          loading="lazy"
          decoding="async"
          onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
        />
      )}
      
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
    </div>
  );
};

// ── WALL OF PROOF SECTION ───────────────────────────────────────────────────
export const WallOfProof = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  // Trigger text animation strictly when it enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.2 } // Triggers when 20% of the header is visible
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cinematicBlur {
          0% { filter: blur(12px); opacity: 0; transform: translateY(20px) scale(0.98); }
          100% { filter: blur(0px); opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes liquidGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: liquidGradient 4s linear infinite;
        }
      `}</style>

      <section className="relative w-full bg-black py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
        
        {/* Ambient Glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] pointer-events-none opacity-[0.04] blur-[100px] rounded-full"
          style={{
            background: "radial-gradient(circle, #FCA311 0%, transparent 70%)"
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Header wrapper with scroll ref */}
          <div ref={headerRef} className="text-center max-w-4xl mb-16 md:mb-24 px-2">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6 opacity-0"
              style={{ 
                animation: isHeaderVisible ? "cinematicBlur 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards" : "none" 
              }}
            >
              You've probably seen our work.
              <br className="hidden sm:block" />
              {/* Added the animate-shimmer class for continuous background motion */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCA311] via-[#FFD166] to-[#FCA311] animate-shimmer inline-block mt-2">
                {" "}You just didn't know it was AI.
              </span>
            </h2>
            <p
              className="text-[#E5E5E5]/70 text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto opacity-0"
              style={{ 
                animation: isHeaderVisible ? "cinematicBlur 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s forwards" : "none" 
              }}
            >
              We engineer hyper-realistic, cinematic motion that stops the scroll. 
              Perfect garment preservation. Zero studio time.
            </p>
          </div>

          <div className="w-full columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6">
            {proofAssets.map((src, index) => (
              <MediaCard key={`${src}-${index}`} src={src} index={index} />
            ))}
          </div>
          
        </div>
      </section>
    </>
  );
};

export default WallOfProof;