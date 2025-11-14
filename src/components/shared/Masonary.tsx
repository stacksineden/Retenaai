import { useEffect, useState, useRef } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { mockups } from "@/modelDataset";
import { motion, AnimatePresence } from "framer-motion";

// Flicker variants
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

const Masonary = () => {
  const [setIndex, setSetIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setSetIndex((prev) => (prev + 1) % mockups.length);
        setIsVisible(true);
      }, 1000);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden isolate"
      style={{
        height: "1900px", // 👈 Stable height — nothing above/below moves
        backgroundColor: "black", // optional for blending
      }}
    >
      <div className="absolute inset-0 md:w-full h-full overflow-hidden w-[96%] mx-auto">
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              key={setIndex}
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
                  {mockups[setIndex].map((img, i) => (
                    <motion.div
                      key={img}
                      custom={i}
                      variants={flickerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden rounded-2xl"
                    >
                      <motion.img
                        src={img}
                        alt={`AI mockup ${i + 1}`}
                        className="w-full h-auto object-cover rounded-2xl shadow-lg"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Masonary;
