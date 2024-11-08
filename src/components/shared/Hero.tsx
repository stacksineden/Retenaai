import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [currentSet, setCurrentSet] = useState(0);
  const [direction, setDirection] = useState(0); // Track direction

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // Move to next set
      setCurrentSet((prev) => (prev + 1) % imageSets.length);
    }, 4000); // Increase interval time for longer animations

    return () => clearInterval(interval);
  }, []);

  // Define variants with explicit typing for direction
  const variants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100, // Slide in from right or left
      scale: 1.1, // Slightly scale up when entering
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1, // Normalize scale
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction < 0 ? 100 : -100, // Slide out to right or left
      scale: 0.9, // Slightly scale down when exiting
    }),
  };

  return (
    <section className="bg-accent">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        <div className="flex flex-col justify-center py-14 md:py-0">
          <div className="border border-accent p-2 rounded-full bg-white text-base font-medium shadow-md w-[20em] text-center my-2 text-primary-blue flex items-center gap-1 justify-center">
          <Star className="text-yellow-400 h-7 w-7"/>
            1.3K+ Photoshoots generated
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-primary-black text-5xl lg:text-6xl font-bold">
              Elevate Your Aesthetic with AI Photoshoots!
            </h1>
            <p className="text-primary-black xl:max-w-[500px] text-lg">
              Say goodbye to costly photographers and complicated setups. Create
              stunning, professional-quality photos effortlessly with AI, right
              from your device in minutes.
            </p>
            <div className="mt-4 flex items-center gap-2 flex-col md:flex-row">
              <Button
                className="bg-primary-black hover:bg-primary-blue text-white text-base px-4 py-7 transform transition duration-300 hover:scale-90"
                onClick={() => navigate("/sign-up")}
              >
                Start Your Photoshoot Today!
                <ArrowRight className="text-white h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="h-full w-full p-4 grid grid-cols-2 gap-3">
          {imageSets[currentSet].map((src, index) => (
            <motion.div
              key={index}
              custom={direction} // Use the direction state for animation
              className="bg-accent h-[330px] rounded-xl overflow-hidden"
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              transition={{ duration: 1 }} // Longer duration for smoother animation
              onAnimationComplete={() => {
                // Reset direction after animation completes
                if (index === imageSets[currentSet].length - 1) {
                  setDirection(0);
                }
              }}
            >
              <img
                src={src}
                alt={`heroimage-${index}`}
                className="h-full w-full object-cover rounded-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

const imageSets = [
  [
    "/assets/psedo-generations/pro-headshhot1.webp",
    "/assets/psedo-generations/pro-headshhot2.png",
    "/assets/psedo-generations/pro-headshhot3.png",
    "/assets/psedo-generations/pro-headshhot4.png",
  ],
  [
    "/assets/psedo-generations/xmashoot1.webp",
    "/assets/psedo-generations/xmashoot2.webp",
    "/assets/psedo-generations/xmashoot3.webp",
    "/assets/psedo-generations/xmashoot4.webp",
  ],
  [
    "/assets/psedo-generations/fashion1.webp",
    "/assets/psedo-generations/fashion2.png",
    "/assets/psedo-generations/fashion3.png",
    "/assets/psedo-generations/fashion4.png",
  ],
  [
    "/assets/psedo-generations/vagas1.webp",
    "/assets/psedo-generations/vagas2.png",
    "/assets/psedo-generations/vagas3.png",
    "/assets/psedo-generations/vagas4.png",
  ],
  [
    "/assets/psedo-generations/polaroid1.webp",
    "/assets/psedo-generations/polaroid2.png",
    "/assets/psedo-generations/polaroid3.png",
    "/assets/psedo-generations/polaroid4.png",
  ],
  [
    "/assets/psedo-generations/swimsuit1.webp",
    "/assets/psedo-generations/swimsuit2.png",
    "/assets/psedo-generations/swimsuit3.png",
    "/assets/psedo-generations/swimsuit4.png",
  ],
  [
    "/assets/psedo-generations/nature1.png",
    "/assets/psedo-generations/nature2.png",
    "/assets/psedo-generations/nature3.png",
    "/assets/psedo-generations/nature4.png",
  ],
  [
    "/assets/psedo-generations/selfies1.png",
    "/assets/psedo-generations/selfies2.png",
    "/assets/psedo-generations/selfies3.png",
    "/assets/psedo-generations/selfies4.png",
  ],
  [
    "/assets/psedo-generations/mobster1.webp",
    "/assets/psedo-generations/mobster2.png",
    "/assets/psedo-generations/mobster3.png",
    "/assets/psedo-generations/mobster4.png",
  ],
];
