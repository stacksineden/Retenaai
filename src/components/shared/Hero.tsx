import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative overflow-hidden flex items-center justify-center min-h-[35vh] md:min-h-[50vh]"
      // style={{ minHeight: "50vh" }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#14213D]/30 via-[#000000]/60 to-[#FCA311]/20 blur-3xl opacity-50"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      <motion.div
        className="absolute bottom-10 left-1/4 w-40 h-40 bg-[#FCA311]/10 rounded-full blur-3xl"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-20 right-1/3 w-52 h-52 bg-[#14213D]/20 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 w-32 h-32 bg-[#E5E5E5]/5 rounded-full blur-2xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* === Content === */}
      <div className="relative z-10 flex flex-col items-center text-center w-full h-full">
        <motion.div
          className="pt-16 md:pt-28 pb-10 w-[90%] md:w-[80%]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-white/80 text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            You&apos;re Still Paying for{" "}
            <span className="text-[#FCA311]">Fashion Shoots?</span>
            <span className="italic text-white block mt-4">
              That&apos;s 2020 Thinking
            </span>
          </motion.h1>

          <motion.p
            className="text-white/60 mb-8 text-center w-[100%] md:w-[90%] text-lg font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            RetenaAI creates{" "}
            <span className="text-white">high-performing ad creatives,</span>{" "}
            studio-quality visuals, and product videos for fashion brands —{" "}
            <span className="text-white">
              no models, no studio, no editing crew
            </span>
            . If your brand isn’t using AI to create content yet, your
            competitors soon will.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 mt-5 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Button
              className="bg-[#FCA311] text-black hover:text-black hover:bg-[#E5E5E5] text-lg px-4 py-5 transform transition duration-300 hover:scale-95 border border-black font-semibold"
              onClick={() => navigate("/packages-billing?mode=essentials_pack")}
            >
              🔥 Get Your First 10 Studio Visuals in 24 Hours 
            </Button>

            <Button
              className="bg-[#E5E5E5] text-black hover:text-black hover:bg-[#E5E5E5] text-lg px-4 py-5 transform transition duration-300 hover:scale-95 border border-black w-full md:w-[200px]"
              onClick={() => navigate("/packages")}
            >
              View Packages
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
