import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import WebLayoutWrapper from "@/components/shared/WebLayoutWrapper";
import DemoVideo from "@/components/shared/DemoVideo";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
};

const AffiliateProgram = () => {
  const navigate = useNavigate();

  return (
    <WebLayoutWrapper>
      <section className="bg-black text-white min-h-screen py-16 md:py-24 px-6 md:px-20">
        {/* ====================== HERO SECTION ====================== */}
        <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Earn Big by Helping Fashion Brands
            <span className="text-[#FCA311] block mt-1">
              Scale Their Visual Content.
            </span>
          </h1>

          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Join our Affiliate Network and get paid every time a brand
            subscribes to our AI-Driven AdCreatives service through your
            referral. Zero stress. Zero learning curve. Unlimited earning
            potential.
          </p>

          <Button
            onClick={() => navigate("/affiliate-register")}
            className="mt-10 bg-[#FCA311] text-black px-10 py-6 text-lg font-semibold hover:bg-[#E5E5E5]"
          >
            Join The Affiliate Program <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

         <DemoVideo url="https://youtu.be/zm4hrN227Ws" />

        {/* ====================== VALUE PROPS ====================== */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-32">
          {[
            {
              title: "7% Commission (₦4,500 – ₦20,000 Per Referral)",
              text: "Earn a stable 7% commission** on every successful referral. Earnings typically range from ₦4,500 to ₦20,000 depending on the package the referred user purchases. The 7% commission will be paid to your account when the user purchases any of our packages and uses your unique promo code on their transaction.",
            },
            {
              title: "Automatic Tracking & Dashboard",
              text: "Every successful referral is accurately tracked via our dedicated affiliate platform. You are instantly assigned a unique promo code that ensures all purchases are correctly linked to your account, guaranteeing accurate commission payouts.",
            },
            {
              title: "No Tech Skills Required",
              text: "You don't need any complex software, technical knowledge, or website management skills. Your only requirement is sharing your unique promo code across your network or social media platforms. We handle all the tracking, payment processing, and package delivery.",
            },
          ].map((box, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-8 text-center"
            >
              <h3 className="text-xl font-bold mb-3 text-[#FCA311]">
                {box.title}
              </h3>
              <p className="text-white/70 text-sm">{box.text}</p>
            </motion.div>
          ))}
        </div>

        {/* ====================== HOW IT WORKS ====================== */}
        <motion.div {...fadeUp} className="max-w-5xl mx-auto mb-32">
          <h2 className="text-4xl font-bold text-center mb-12">
            How The Affiliate Program Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Sign Up",
                text: "Register and get your unique affiliate promo code instantly.",
              },
              {
                step: "02",
                title: "Share Your Code",
                text: "Promote your code to fashion designers, brands, tailors, boutiques, and influencers.",
              },
              {
                step: "03",
                title: "Earn Commission",
                text: "You get paid a 7% commission when the referred user purchases any of our packages and uses your unique promo code on their transaction.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-[#0F0F0F] border border-white/10 p-8 rounded-xl"
              >
                <div className="text-[#FCA311] font-bold text-5xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ====================== WHY JOIN SECTION ====================== */}
        <motion.div {...fadeUp} className="max-w-5xl mx-auto mb-32">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Affiliates Love RetenaAI
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Fashion brands always need images — high recurring commissions.",
              "Easy to promote: visuals are irresistible and brands convert fast.",
              "Monthly payouts. Transparent analytics. Real-time tracking.",
              "You don’t need to convince — the product sells itself.",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="text-[#FCA311] w-6 h-6 mt-1" />
                <p className="text-white/70">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ====================== FINAL CTA ====================== */}
        <motion.div {...fadeUp} className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10">
            Get your unique affiliate promo code today and start earning
            instantly from brands using our AI-Powered Content Engine.
          </p>

          <Button
            onClick={() => navigate("/affiliate-register")}
            className="bg-[#FCA311] text-black px-10 py-6 text-lg font-semibold hover:bg-[#E5E5E5]"
          >
            Register As An Affiliate
            <Sparkles className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </section>
    </WebLayoutWrapper>
  );
};

export default AffiliateProgram;
