import WebLayoutWrapper from "@/components/shared/WebLayoutWrapper";
import { Button } from "@/components/ui/button";
import { packages } from "@/modelDataset";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
};

const Packages = () => {
  const navigate = useNavigate();
  return (
    <WebLayoutWrapper>
      <section className="bg-black text-white py-24 px-6 md:px-16">
        {/* Header */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Affordable. Scalable. Built for Fashion Brands.
          </h1>
          <p className="text-lg text-white/70">
            Choose a package that meets your brand’s goals — from simple studio
            visuals to full campaign-ready creatives.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {packages.map((pkg, i) => {
            const isPro = (pkg.slug ?? "").toString().toLowerCase() === "pro_pack";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-8 border ${
                  pkg.highlight
                    ? "border-[#FCA311] bg-gradient-to-b from-[#14213D]/40 to-[#000] shadow-xl scale-105"
                    : "border-white/10 bg-[#0f0f0f]"
                }`}
              >
                <h3 className="text-2xl font-bold mb-3">{pkg.name}</h3>
                <p className="text-[#FCA311] text-3xl font-extrabold mb-6">
                  {pkg.price}
                </p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, j) => (
                    <li
                      key={j}
                      className="text-white/70 text-sm leading-relaxed flex gap-2"
                    >
                      ✅ {feat}
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full bg-[#FCA311] text-black hover:bg-[#E5E5E5] py-5 text-base font-semibold"
                  onClick={() => {
                    if (isPro) {
                      navigate("/contact");
                    } else {
                      navigate(`/packages-billing?mode=${pkg?.slug ?? ""}`);
                    }
                  }}
                >
                  {isPro ? "Contact Us" : "Choose Package"}
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Add-ons Section */}
        <motion.div {...fadeUp} className="mt-24 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Add-Ons & Extras</h2>
          <p className="text-white/70 mb-10">
            Upgrade your package with more content, faster delivery, or extra
            creative variations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {[
              "Extra 10 Visuals — ₦3,500",
              "Extra AI Video (8–12s) — ₦12,000",
              "Recolor Set (5 variations) — ₦4,000",
              "Background Replacement — ₦2,000 per item",
              "Model/Motion Simulation — ₦8,500",
              "Express Delivery (Same Day) — ₦6,500",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-4 rounded-lg border border-white/10 bg-[#111]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div {...fadeUp} className="mt-32 text-center max-w-2xl mx-auto">
          <h3 className="text-4xl font-bold mb-6">
            Ready to Level Up Your Brand?
          </h3>
          <p className="text-white/70 mb-10">
            Get high-performing visuals in hours — not weeks. Start today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#FCA311] text-black px-6 py-5 text-lg font-semibold hover:bg-[#E5E5E5]"
             onClick={() => navigate("/packages-billing?mode=essentials_pack")}>
              Get Started
            </Button>
            <Button className="border border-white/20 text-white px-6 py-5 text-lg hover:bg-[#14213D]"
             onClick={() => navigate("/contact")}>
              Talk to Us
            </Button>
          </div>
        </motion.div>
      </section>
    </WebLayoutWrapper>
  );
};

export default Packages;
