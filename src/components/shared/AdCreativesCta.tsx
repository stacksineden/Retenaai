import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useUserCountry } from "@/hooks/useUserLocation";

const AdCreativesCta = () => {
  const navigate = useNavigate();
  const { country } = useUserCountry();

  const isNigeria = country === "NG";
  
  return (
    <section className="relative bg-black text-white py-32 overflow-hidden border-t border-white/5">
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

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Synced Premium Typography */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-[1.05] tracking-tighter">
            Your Next Campaign Starts with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCA311] to-[#FFD166]">
              One Photo.
            </span>
          </h2>

          <p className="text-[#E5E5E5]/70 text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-12">
            Turn your ideas into stunning fashion visuals — no studio, no limits.
            Upload a single photo, and let RetenaAI engineer your next viral campaign.
          </p>

          {/* Button Logic (Untouched) */}
          {isNigeria ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-[#FCA311] to-[#E5E5E5] text-black px-8 py-6 text-base font-bold tracking-wide hover:scale-105 transition-transform duration-300 rounded-xl shadow-[0_0_20px_rgba(252,163,17,0.2)]"
                onClick={() => navigate("/contact")}
              >
                🔥 Request Free Spec Demo
              </Button>
              <Button
                className="bg-white/5 border border-white/10 text-white px-8 py-6 text-base font-bold tracking-wide hover:bg-white/10 transition-colors duration-300 rounded-xl"
                onClick={() => navigate("/packages")}
              >
                View Campaign Packages
              </Button>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-[#FCA311] to-[#E5E5E5] text-black px-8 py-6 text-base font-bold tracking-wide hover:scale-105 transition-transform duration-300 rounded-xl shadow-[0_0_20px_rgba(252,163,17,0.2)]"
                onClick={() => navigate("/contact")}
              >
                🔥 Request Free Spec Demo
              </Button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Decorative floating orbs (Untouched) */}
      <motion.div
        className="absolute bottom-12 left-1/4 w-28 h-28 bg-[#FCA311]/10 rounded-full blur-2xl pointer-events-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-20 right-1/3 w-40 h-40 bg-[#14213D]/20 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default AdCreativesCta;