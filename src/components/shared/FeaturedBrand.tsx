import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useUserCountry } from "@/hooks/useUserLocation";

// === PERFORMANCE OPTIMIZER ===
const optimizeUrl = (url: string) => {
  if (url.includes("cloudinary.com") && !url.includes("f_auto")) {
    return url.replace("/upload/", "/upload/f_auto,q_auto/");
  }
  return url;
};

const FeaturedBrand = () => {
  const navigate = useNavigate();
  const { country } = useUserCountry();

  const isNigeria = country === "NG";

  // Pre-process the video URL for cleaner JSX
  const rawVideoUrl = "https://res.cloudinary.com/dyryfgjro/video/upload/v1763803284/vid1_zdphwh.mp4";
  const optimizedVideoUrl = optimizeUrl(rawVideoUrl);

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
              src={optimizeUrl("https://res.cloudinary.com/dyryfgjro/image/upload/v1763819973/gym4_wfqbb1.png")}
              alt="AI Fashion Visual 1"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src={optimizeUrl("https://res.cloudinary.com/dyryfgjro/image/upload/v1763820036/gym5_zra0oq.png")}
              alt="AI Fashion Visual 2"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Video (wider block) */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="col-span-2 rounded-2xl overflow-hidden shadow-lg"
          >
            <video
              src={optimizedVideoUrl}
              poster={optimizedVideoUrl.replace(".mp4", ".jpg")} // Auto-generated placeholder
              autoPlay
              muted
              loop
              playsInline // Critical for iOS autoplay
              preload="metadata" // Saves initial bandwidth
              className="w-full h-[360px] object-cover"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src={optimizeUrl("https://res.cloudinary.com/dyryfgjro/image/upload/v1763820036/gym5_zra0oq.png")}
              alt="AI Fashion Visual 3"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* UGC block */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src={optimizeUrl("https://res.cloudinary.com/dyryfgjro/image/upload/v1763820099/gym8_jyertv.png")}
              alt="AI Fashion Visual 4"
              loading="lazy"
              decoding="async"
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
              onClick={() => navigate(isNigeria ? "/packages" : "/contact")}
            >
              {isNigeria ? "View Packages" : "Book a Discovery Call"}
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src={optimizeUrl("https://res.cloudinary.com/dyryfgjro/image/upload/v1771537658/gym14_rznllc.png")}
                alt="AI Fashion Visual 5"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src={optimizeUrl("https://res.cloudinary.com/dyryfgjro/image/upload/v1763820320/gym13_tkdqpf.png")}
                alt="AI Fashion Visual 6"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src={optimizeUrl("https://res.cloudinary.com/dyryfgjro/image/upload/v1763819886/gym1_fz0u4q.png")}
                alt="AI Fashion Visual 7"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src={optimizeUrl("https://res.cloudinary.com/dyryfgjro/image/upload/v1763820275/gym12_avweup.png")}
                alt="AI Fashion Visual 8"
                loading="lazy"
                decoding="async"
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