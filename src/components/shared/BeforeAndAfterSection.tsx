import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const transformations = [
  {
    before: "/assets/mockups/men_slippers/men_slippers4.png",
    after: "/assets/mockups/men_slippers/men_slippers_proto.JPG",
    label: "",
  },
  {
    before: "/assets/mockups/men_tshirt/men_tshirt5.png",
    after: "/assets/mockups/men_tshirt/proto_men_tshirt.webp",
    label: "",
  },
  {
    before: "/assets/mockups/women_jumpsuit/women_jumpsuit6.png",
    after: "/assets/mockups/women_jumpsuit/women_jumpsuit3.png",
    label: "",
  },
];

const BeforeAndAfterSection = () => {
  const ref = useRef(null);
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
            {/* ✅ Ensure container has height via aspect ratio */}
            <img
              src={item.before}
              alt="Before"
              className="absolute top-0 left-0 w-full h-full object-cover"
              //   onError={(e) => {}}
            />

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
                src={item.after}
                alt="After"
                className="w-full h-full object-cover"
                // onError={(e) => {}}
              />
            </motion.div>

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
              className="absolute top-0 h-full w-[3px] bg-white/80 z-10"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeforeAndAfterSection;
