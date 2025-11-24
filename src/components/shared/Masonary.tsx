import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { mockups } from "@/modelDataset";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const Masonary: React.FC = () => {
  // const allImages = mockups.flat(); // flatten all arrays into one image list
  const INITIAL_COUNT = 20; // how many images to show initially
  const LOAD_MORE = 15; // how many to reveal on each click

  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE, mockups.length));
  };

  return (
    <section
      className="relative w-full overflow-hidden isolate pb-20"
      style={{
        backgroundColor: "black",
      }}
    >
      <div className="relative w-[96%] mx-auto">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 4 }}>
          <Masonry gutter="16px">
            {mockups.slice(0, visibleCount).map((img: string) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-2xl relative"
              >
                <img
                  src={img}
                  alt="mockup"
                  className="w-full h-auto object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        {/* Bottom blur overlay + Show More button */}
        {visibleCount < mockups.length && (
          <div
            className="absolute bottom-0 left-0 right-0 h-40 flex items-end justify-center"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Button
              onClick={showMore}
              className="mb-6 px-6 py-3 bg-white/90 rounded-xl font-semibold hover:bg-white transition text-black"
            >
              Show More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Masonary;
