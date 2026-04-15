import  { useEffect, useRef, useState } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const PackagesTeaser = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes scaleUpFade {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      <section ref={sectionRef} className="relative w-full bg-black py-24 px-4 sm:px-6 overflow-hidden">
        
        <div 
          className="relative z-10 w-full max-w-5xl mx-auto bg-[#050505] border border-white/10 rounded-3xl p-10 md:p-16 text-center overflow-hidden opacity-0"
          style={{ animation: isVisible ? "scaleUpFade 0.8s ease forwards" : "none" }}
        >
          {/* Subtle flare behind the text */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-full pointer-events-none opacity-[0.05] blur-[80px] bg-[#FCA311]" />

          <div className="relative z-20 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#FCA311]/10 flex items-center justify-center mb-6 ring-1 ring-[#FCA311]/30">
              <Zap className="w-6 h-6 text-[#FCA311]" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Ready to unlock your <span className="text-[#FCA311]">campaign arsenal?</span>
            </h2>
            
            <p className="text-[#E5E5E5]/70 text-base md:text-lg max-w-xl mx-auto mb-10">
              Explore our tiered monthly packages designed for scaling fashion and footwear brands. One transparent price, zero hidden studio fees.
            </p>

            <Button 
              onClick={() => navigate("/packages")}
              className="group bg-[#FCA311] text-black hover:bg-white text-base md:text-lg px-8 py-6 h-auto rounded-xl font-bold shadow-[0_0_30px_rgba(252,163,17,0.3)] hover:shadow-[0_0_50px_rgba(252,163,17,0.5)] transition-all duration-300"
            >
              View Campaign Packages
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default PackagesTeaser;