import { motion, AnimatePresence } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useRef } from "react";

// === Replace this with your video dataset ===
const videoMockups = [
  { src: "/assets/mockups/women_gymsuit/vid1.mp4" },
  { src: "/assets/mockups/men_slippers/vid2.mp4" },
  { src: "/assets/mockups/men_tshirt/vid2.mp4" },
  { src: "/assets/mockups/men_shoes/vid1.mp4" },
  { src: "/assets/mockups/men_senator/vid1.mp4" },
  { src: "/assets/mockups/men_tshirt/vid3.mp4" },
  { src: "/assets/mockups/men_agbada/vid1.mp4" },
  { src: "/assets/mockups/men_tshirt/vid1.mp4" },
  { src: "/assets/mockups/women_gymsuit/vid2.mp4" },
  { src: "/assets/mockups/men_sweatshirt/vid1.mp4" },
];

// === Flicker variants (same as your image version) ===
const flickerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    rotate: 2,
    filter: "blur(10px)",
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.08,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.9,
    rotate: -2,
    filter: "blur(8px)",
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const VideoMasonry = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section>
      <div className="container text-left my-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          You’ve probably seen our work.{" "} <br/>
          <span className="text-[#FCA311]">You just didn’t know it was AI.</span>
        </h2>
      </div>
      <section
        ref={containerRef}
        className="relative w-full overflow-hidden isolate"
        style={{
          height: "950px",
          backgroundColor: "black",
        }}
      >
        <div className="absolute inset-0 md:w-full h-full overflow-hidden w-[96%] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key="video-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 4 }}
              >
                <Masonry gutter="16px">
                  {videoMockups.map((vid, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={flickerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden rounded-2xl"
                    >
                      <motion.video
                        src={vid.src}
                        muted
                        playsInline
                        autoPlay
                        loop
                        className={`w-full h-auto rounded-2xl shadow-lg object-cover`}
                      />
                    </motion.div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </section>
  );
};

export default VideoMasonry;
