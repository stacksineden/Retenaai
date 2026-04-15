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
        <motion.div {...fadeUp} className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-3xl md:text-6xl font-extrabold mb-6">
            High-Converting Video Creatives.<br /> Built for Fashion Brands.
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Choose a package that meets your brand’s goals — from single-product 
            launch tests to complete, monthly performance-driven partnerships.
          </p>
        </motion.div>

        {/* Packages Grid - Constrained to max-w-6xl so the 3 cards don't get too wide */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, i) => {
            const isPro = (pkg.slug ?? "").toString().toLowerCase() === "pro_pack";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                className={`flex flex-col rounded-2xl p-8 border ${
                  pkg.highlight
                    ? "border-[#FCA311] bg-gradient-to-b from-[#14213D]/40 to-[#000] shadow-xl lg:scale-105"
                    : "border-white/10 bg-[#0f0f0f]"
                }`}
              >
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-3">{pkg.name}</h3>
                  
                  {/* Price Display with optional strikethrough for urgency */}
                  <div className="mb-6 flex flex-col justify-center">
                    {pkg.originalPrice && (
                      <span className="text-white/40 text-lg line-through font-semibold -mb-1">
                        {pkg.originalPrice}
                      </span>
                    )}
                    <p className="text-[#FCA311] text-3xl font-extrabold">
                      {pkg.price}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feat, j) => (
                      <li
                        key={j}
                        className="text-white/80 text-sm leading-relaxed flex gap-3 items-start"
                      >
                        <span className="shrink-0 mt-0.5">✅</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className={`w-full py-6 text-base font-semibold mt-auto ${
                     pkg.highlight 
                     ? "bg-[#FCA311] text-black hover:bg-[#E5E5E5]" 
                     : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                  onClick={() => {
                    if (isPro) {
                      navigate("/contact");
                    } else {
                      navigate(`/packages-billing?mode=${pkg?.slug ?? ""}`);
                    }
                  }}
                >
                  {isPro ? "Request Bespoke Proposal" : "Choose Package"}
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Add-ons Section */}
        <motion.div {...fadeUp} className="mt-32 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Add-Ons & Extras</h2>
          <p className="text-white/70 mb-12">
            Scale your package with precision upgrades designed for ad performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[
              "Performance Hook Pack (3 extra hooks) — ₦15,000",
              "Extra Ready-to-Launch Video Ad — ₦25,000",
              "Regional Localization Adaptor — ₦20,000 per market",
              "Complementary Visual Cohesion Booster — ₦10,000",
              "Background/Recolor Synthesis (Static) — ₦4,000 per 5",
              "Express Delivery (48 Hours) — ₦15,000",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl border border-white/10 bg-[#111] text-white/90 font-medium hover:border-[#FCA311]/50 transition-colors"
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
          <p className="text-white/70 mb-10 text-lg">
            Stop losing money on ad fatigue. Let us build your high-converting visual engine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#FCA311] text-black px-8 py-6 text-lg font-bold hover:bg-[#E5E5E5] transition-colors"
             onClick={() => navigate("/packages-billing?mode=catalyst_pack")}>
              Launch Your First Campaign
            </Button>
            <Button className="border border-white/20 text-white px-8 py-6 text-lg hover:bg-[#14213D] transition-colors"
             onClick={() => navigate("/contact")}>
              Talk to Our Strategy Team
            </Button>
          </div>
        </motion.div>
      </section>
    </WebLayoutWrapper>
  );
};

export default Packages;