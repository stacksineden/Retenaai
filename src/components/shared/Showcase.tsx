import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Showcase = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [isInView, controls]);

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
        className="relative flex justify-center items-center mt-4"
        initial="initial"
        animate={controls}
      >
        {/* Phase 1: Original Image */}
        <motion.img
          key="original"
          src="/assets/mockups/men_slippers/men_slippers_proto.JPG"
          variants={{
            initial: { opacity: 1, scale: 1 },
            animate: {
              opacity: 0,
              scale: 0.9,
              transition: { delay: 1.5, duration: 1 },
            },
          }}
          className="absolute rounded-2xl shadow-lg w-[850px] h-[750px] object-cover"
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
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[98%] md:w-[90%]"
        >
          <img
            src="/assets/mockups/men_slippers/men_slippers1.png"
            className="rounded-2xl"
          />
        
          <img
            src="/assets/mockups/men_slippers/men_slippers11.png"
            className="rounded-2xl"
          />
         
          <img
            src="/assets/mockups/men_slippers/men_slippers4.png"
            className="rounded-2xl"
          />
          <img
            src="/assets/mockups/men_slippers/men_slippers5.png"
            className="rounded-2xl"
          />
          <img
            src="/assets/mockups/men_slippers/men_slippers6.png"
            className="rounded-2xl"
          />
          <img
            src="/assets/mockups/men_slippers/men_slippers7.png"
            className="rounded-2xl"
          />
          <img
            src="/assets/mockups/men_slippers/men_slippers8.png"
            className="rounded-2xl"
          />
           <img
            src="/assets/mockups/men_slippers/men_slippers2.png"
            className="rounded-2xl"
          />
            <img
            src="/assets/mockups/men_slippers/men_slippers2.png"
            className="rounded-2xl"
          />
          <img
            src="/assets/mockups/men_slippers/men_slippers9.png"
            className="rounded-2xl"
          />
          <img
            src="/assets/mockups/men_slippers/men_slippers10.png"
            className="rounded-2xl"
          />
          <img
            src="/assets/mockups/men_slippers/men_slippers12.png"
            className="rounded-2xl"
          />
        </motion.div>

        {/* Phase 3: Generated Video */} 
        <motion.video
          key="video"
          src="/assets/mockups/men_slippers/vid2.mp4"
          autoPlay
          muted
          loop
          playsInline
          variants={{
            initial: { opacity: 0, scale: 0.95 },
            animate: {
              opacity: 1,
              scale: 1,
              transition: { delay: 5, duration: 1.5 },
            },
          }}
          className="absolute rounded-2xl shadow-2xl w-[900px] h-[500px] md:w-[900px] object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Showcase;

