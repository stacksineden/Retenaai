import { motion } from "framer-motion";
import { UploadCloud, PhoneCall, Clapperboard, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Secure Upload",
    icon: <UploadCloud className="w-6 h-6 text-[#FCA311]" />,
    description:
      "Right after checkout, you drop your standard product photos or flat-lays into your secure client portal. No 3D files, no lookbooks, no complex briefs required.",
  },
  {
    id: "02",
    title: "The Discovery Sync",
    icon: <PhoneCall className="w-6 h-6 text-[#FCA311]" />,
    description:
      "We don’t guess. We get on a 1:1 strategy call to map out your brand’s exact aesthetic, target demographic, and campaign goals so the AI generation is perfectly aligned with your identity.",
  },
  {
    id: "03",
    title: "Cinematic Engineering",
    icon: <Clapperboard className="w-6 h-6 text-[#FCA311]" />,
    description:
      "Our creative team takes over. We map your garment's texture and silhouette with pixel-perfect accuracy, then generate cinematic video flows and high-fidelity static assets.",
  },
  {
    id: "04",
    title: "The Campaign Drop",
    icon: <Rocket className="w-6 h-6 text-[#FCA311]" />,
    description:
      "Your custom Drive folder is loaded with a full marketing arsenal: TikTok-ready video ads, static retargeting images, and conversion copy. Ready to launch in hours, not weeks.",
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } 
  },
};

export const DeliveryProcess = () => {
  return (
    <section className="relative w-full bg-black py-24 md:py-40 px-4 sm:px-6 overflow-hidden border-t border-white/5">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#FCA311]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* ── LEFT SIDE: STICKY HEADER ── */}
        <div className="w-full lg:w-5/12 lg:sticky lg:top-40 h-fit">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FCA311] animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono text-[#FCA311] tracking-widest uppercase">
                How It Works
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
              From Idea <br />
              <span className="text-[#FCA311]">to Impact.</span>
            </h2>
            
            <p className="text-[#E5E5E5]/60 text-base md:text-lg font-medium leading-relaxed max-w-md">
              We stripped away the friction of traditional photoshoots. Our streamlined system delivers studio-grade ad campaigns without the studio.
            </p>
          </motion.div>
        </div>

        {/* ── RIGHT SIDE: SCROLLING STEPS ── */}
        <div className="w-full lg:w-7/12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8 md:gap-12"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={stepVariants}
                className="group relative flex flex-col sm:flex-row gap-6 md:gap-8 p-8 md:p-10 rounded-3xl bg-[#050505] border border-white/5 hover:border-white/10 transition-colors duration-500 overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FCA311]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Step Number & Icon */}
                <div className="flex-shrink-0 flex flex-col items-start gap-4">
                  <div className="text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-500 font-mono leading-none">
                    {step.id}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-[#FCA311]/30 transition-colors duration-500 shadow-lg">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-[#FCA311] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#E5E5E5]/60 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Subtle connecting line (hidden on last item) */}
                {index !== steps.length - 1 && (
                  <div className="hidden sm:block absolute left-[4.5rem] top-32 bottom-[-3rem] w-[1px] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default DeliveryProcess;