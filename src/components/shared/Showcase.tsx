import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { optimizeUrl } from "@/lib/utils";


// === DATA EXTRACTION (Cleaner Code) ===
const GALLERY_IMAGES = [
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771535003/men_slippers1_1_chfkw1.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771533278/men_slippers_After7_swtfla.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771533901/men_slippers_After3_vjz6ly.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771535324/men_slippers_After4_e1oyjs.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771535439/men_slippers_After5_hnsta3.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771533835/men_slippers_After6_m8wjty.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771535661/men_slippers_After10_ew3ysx.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771535784/men_slippers_After1_ktpmuw.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771536266/men_slippers_After2_cyre6a.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771536457/men_slippers_After8_ygyjpz.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771536766/men_slippers_After9_qvn7sl.png",
  "https://www.retenaai.com/assets/mockups/men_slippers/men_slippers7.png", // Non-cloudinary link will bypass optimization safely
];

const Showcase = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [isInView, controls]);

  const rawVideoUrl = "https://res.cloudinary.com/dyryfgjro/video/upload/v1763802956/vid2_a8pyj6.mp4";
  const optimizedVideoUrl = optimizeUrl(rawVideoUrl);

  return (
    <section
      ref={ref}
      className="container relative bg-black text-white py-24 overflow-hidden" 
    >
      {/* Heading */}
      <div className="text-left my-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          One Image. <span className="text-[#FCA311]">Infinite Possibilities.</span>
        </h2>
        <p className="text-lg text-white/70 max-w-2xl">
          Upload a single photo — and watch it evolve into stunning campaigns,
          motion visuals, and branded assets.
        </p>
      </div>

      {/* Animation Sequence */}
      <motion.div
        className="relative flex justify-center items-center mt-4 min-h-[500px] md:min-h-[750px]"
        initial="initial"
        animate={controls}
      >
        {/* Phase 1: Original Image */}
        <motion.img
          key="original"
          src={optimizeUrl("https://res.cloudinary.com/dyryfgjro/image/upload/v1771533575/men_slippers_A_Before_qy44y1.jpg")}
          alt="Original Raw Input"
          decoding="async" // Stops main thread blocking
          variants={{
            initial: { opacity: 1, scale: 1 },
            animate: {
              opacity: 0,
              scale: 0.9,
              transition: { delay: 1.5, duration: 1 },
            },
          }}
          className="absolute z-30 rounded-2xl shadow-lg w-[90%] md:w-[850px] h-[500px] md:h-[750px] object-cover"
        />

        {/* Phase 2: Generated Gallery */}
        <motion.div
          key="generated"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 2.8, duration: 1.5 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[98%] md:w-[90%] z-20"
        >
          {GALLERY_IMAGES.map((imgSrc, idx) => (
            <img
              key={`gallery-img-${idx}`}
              src={optimizeUrl(imgSrc)}
              alt={`Generated iteration ${idx + 1}`}
              loading="lazy"
              decoding="async"
              className="rounded-2xl w-full h-auto object-cover shadow-md"
            />
          ))}
        </motion.div>

        {/* Phase 3: Generated Video */} 
        <motion.video
          key="video"
          src={optimizedVideoUrl}
          poster={optimizedVideoUrl.replace(".mp4", ".jpg")} // Auto poster generated
          autoPlay
          muted
          loop
          playsInline
          preload="metadata" // Only fetch video details initially, saves bandwidth until phase 3
          variants={{
            initial: { opacity: 0, scale: 0.95 },
            animate: {
              opacity: 1,
              scale: 1,
              transition: { delay: 5, duration: 1.5 },
            },
          }}
          className="absolute z-40 rounded-2xl shadow-2xl w-[95%] md:w-[900px] h-[400px] md:h-[500px] object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Showcase;