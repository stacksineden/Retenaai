import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const FeaturedBrand = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-black py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Grid (Visual Content) */}
        <div className="grid grid-cols-2 gap-4">
          {/* Image 1 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src="/assets/mockups/women_gymsuit/gym4.png"
              alt="AI Fashion Visual 1"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src="/assets/mockups/women_gymsuit/gym5.png"
              alt="AI Fashion Visual 2"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Video (wider block) */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="col-span-2 rounded-2xl overflow-hidden shadow-lg"
          >
            <video
              src="/assets/mockups/women_gymsuit/Create_a_highenergy_202510160001_dkoqh.mp4"
              autoPlay
              muted
              loop
              className="w-full h-[360px] object-cover"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src="/assets/mockups/women_gymsuit/gym5.png"
              alt="AI Fashion Visual 2"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* UGC block */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src="/assets/mockups/women_gymsuit/gym8.png"
              alt="AI Fashion Visual 2"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right Grid (Text Content) */}
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#E5E5E5]">
              Styled by AI. <br />{" "}
              <span className="text-[#FCA311]">Inspired by You.</span>
            </h2>
            <p className="text-lg text-white">
              Your design. Your story. Our technology brings it to life.
            </p>
            <p className="text-base text-white leading-relaxed">
              We don&#8217;t just generate visuals — we translate your creative
              vision into premium campaign assets that move people. Each image
              is fine-tuned to your brand&#8217;s personality, textures, and
              tones — made to look handcrafted, but powered by AI precision.
            </p>
            <Button
              className="bg-[#E5E5E5] text-black hover:text-black hover:bg-[#E5E5E5] text-lg px-4 py-5 transform transition duration-300 hover:scale-90 border border-black"
              onClick={() => navigate("/packages")}
            >
              View Packages
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src="/assets/mockups/women_gymsuit/gym14.png"
                alt="AI Fashion Visual 1"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src="/assets/mockups/women_gymsuit/gym13.png"
                alt="AI Fashion Visual 2"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src="/assets/mockups/women_gymsuit/gym1.png"
                alt="AI Fashion Visual 1"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src="/assets/mockups/women_gymsuit/gym12.png"
                alt="AI Fashion Visual 2"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrand;
