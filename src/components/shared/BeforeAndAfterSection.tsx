import { optimizeUrl } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";




const transformations = [
  {
    before: "https://res.cloudinary.com/dyryfgjro/image/upload/v1771533901/men_slippers_After3_vjz6ly.png",
    after: "https://res.cloudinary.com/dyryfgjro/image/upload/v1771533575/men_slippers_A_Before_qy44y1.jpg",
    label: "",
  },
  {
    before: "https://res.cloudinary.com/dyryfgjro/image/upload/v1763818430/men_tshirt5_hd7kmk.png",
    after: "https://res.cloudinary.com/dyryfgjro/image/upload/v1764853767/men_tshirt_Before1_c7bikg.png",
    label: "",
  },
  {
    before: "https://res.cloudinary.com/dyryfgjro/image/upload/v1771538588/women_jumpsuit6_xhinio.png",
    after: "https://res.cloudinary.com/dyryfgjro/image/upload/v1764854797/Gemini_Generated_Image_aa0730aa0730aa07_1_fwks4x.png",
    label: "",
  },
];

const BeforeAndAfterSection = () => {
  const ref = useRef(null);
  // Triggers animation only when 30% of the component is visible in the viewport
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="bg-black text-white py-6 md:py-24 px-6 md:px-16 overflow-hidden"
    >
      <div className="text-center mb-16 px-2">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight break-words">
          Real Transformations.
          <span className="text-[#FCA311]"> Real Growth.</span>
        </h2>
        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed px-2">
          See how one image evolves into campaign-ready visuals — perfectly
          aligned with your brand story.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
        {transformations.map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/5] bg-gray-800"
          >
            {/* BASE IMAGE (The "Before" / Generated Visual) */}
            <img
              src={optimizeUrl(item.before)}
              alt="Final Campaign Visual"
              loading="lazy"
              decoding="async"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* OVERLAY IMAGE (The "After" / Raw Input) */}
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={
                isInView
                  ? {
                      clipPath: [
                        "inset(0 100% 0 0)",
                        "inset(0 0 0 0)",
                        "inset(0 100% 0 0)",
                      ],
                      transition: {
                        delay: i * 0.4,
                        duration: 4,
                        repeat: Infinity,
                        repeatDelay: 1.5,
                        ease: "easeInOut",
                      },
                    }
                  : {}
              }
              className="absolute top-0 left-0 w-full h-full"
            >
              <img
                src={optimizeUrl(item.after)}
                alt="Raw Phone Input"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* THE SWIPE BAR */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={
                isInView
                  ? {
                      x: ["-100%", "100%", "-100%"],
                      transition: {
                        delay: i * 0.4,
                        duration: 4,
                        repeat: Infinity,
                        repeatDelay: 1.5,
                        ease: "easeInOut",
                      },
                    }
                  : {}
              }
              className="absolute top-0 h-full w-[3px] bg-white/80 z-10 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeforeAndAfterSection;