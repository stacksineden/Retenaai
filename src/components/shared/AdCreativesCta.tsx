import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useUserCountry } from "@/hooks/useUserLocation";

const AdCreativesCta = () => {
  const navigate = useNavigate();
  const { country } = useUserCountry();

  const isNigeria = country === "NG";
  return (
    <section className="relative bg-black text-white py-32 overflow-hidden">
      {/* Background Gradient Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#14213D]/30 via-[#000000]/50 to-[#FCA311]/30 blur-3xl opacity-50"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Your Next Campaign Starts with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCA311] to-[#E5E5E5]">
            One Image.
          </span>
        </h2>

        <p className="text-lg text-[#E5E5E5]/80 mb-10 max-w-2xl mx-auto">
          Turn your ideas into stunning fashion visuals — no studio, no limits.
          Upload a single photo, and let AdCreative bring your vision to life.
        </p>

        {isNigeria ? (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-[#FCA311] to-[#E5E5E5] text-black px-4 py-6 text-base hover:scale-105 transition-transform duration-300"
              onClick={() => navigate("/packages-billing?mode=starter_pack")}
            >
              Upload Image
            </Button>
            <Button
              className="border border-[#E5E5E5]/40 text-[#E5E5E5] px-4 py-6 text-base hover:bg-[#14213D] transition-colors duration-300"
              onClick={() => navigate("/packages")}
            >
              View Packages
            </Button>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-[#FCA311] to-[#E5E5E5] text-black px-4 py-6 text-base hover:scale-105 transition-transform duration-300"
              onClick={() => navigate("/contact")}
            >
              Book a Discovery Call Today
            </Button>
          </div>
        )}
      </div>

      {/* Decorative floating orbs (brand-toned, subtle) */}
      <motion.div
        className="absolute bottom-12 left-1/4 w-28 h-28 bg-[#FCA311]/10 rounded-full blur-2xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-20 right-1/3 w-40 h-40 bg-[#14213D]/20 rounded-full blur-3xl"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default AdCreativesCta;
