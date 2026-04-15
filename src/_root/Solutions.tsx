import { motion } from "framer-motion";
import WebLayoutWrapper from "@/components/shared/WebLayoutWrapper";
import { optimizeUrl } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" },
};

const Solutions = () => {
  // Rove Assets
  const videoCinematic = optimizeUrl("https://res.cloudinary.com/dyryfgjro/video/upload/v1775896817/rove-vid3_myukx5.mp4");
  const videoTikTok = optimizeUrl("https://res.cloudinary.com/dyryfgjro/video/upload/v1775821123/rove-reel-3-min_m2hohq.mov");
  const imgHero = optimizeUrl("https://res.cloudinary.com/dyryfgjro/image/upload/v1775807400/rove-demo7_ri28ha.jpg");
  const imgCarousel = optimizeUrl("https://res.cloudinary.com/dyryfgjro/image/upload/v1775807393/rove-demo9_kgtskb.jpg");

  return (
    <WebLayoutWrapper>
      <section className="bg-[#050505] text-white pt-32 pb-24 px-6 md:px-16 overflow-hidden">
        {/* Header / Hero */}
        <motion.div {...fadeUp} className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block border border-[#FCA311]/30 bg-[#FCA311]/10 text-[#FCA311] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-6">
            CASE STUDY: ROVE ACTIVEWEAR
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
            From a Mirror Selfie to a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCA311] to-[#FFD166]">
              High-Fidelity Campaign
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            How we transformed a single, dark smartphone photo into a cohesive,
            studio-grade video and visual engine for a premium ladies' gymwear label.
          </p>
        </motion.div>

        {/* Project Overview Stats */}
        <motion.div
          {...fadeUp}
          className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-32 border-y border-white/10 py-10"
        >
          <div>
            <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-1">Client</p>
            <p className="text-lg font-semibold">Rove</p>
          </div>
          <div>
            <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-1">Industry</p>
            <p className="text-lg font-semibold">Women's Activewear</p>
          </div>
          <div>
            <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-1">Input</p>
            <p className="text-lg font-semibold">1 Smartphone Selfie</p>
          </div>
          <div>
            <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-1">Deliverables</p>
            <p className="text-lg font-semibold text-[#FCA311]">A/B Video Ads + Static Vault</p>
          </div>
        </motion.div>

        {/* Section 1 – The Challenge */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center mb-32">
          <motion.div
            {...fadeUp}
            className="md:col-span-5"
          >
            <h2 className="text-4xl font-bold mb-6">The Challenge</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Rove came to us with an incredible product but a serious visual
              bottleneck. Their launch asset? A single, poorly lit mirror selfie
              of their new seamless legging set.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              No models. No studio. No lifestyle context. Just a dark room and a
              great fit. The product had massive potential, but it lacked the
              premium presentation required to convert high-end fitness
              consumers on TikTok and Meta.
            </p>
          </motion.div>

          {/* Raw Image Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 relative rounded-2xl overflow-hidden border border-white/10 bg-[#111] py-12 px-4 flex justify-center items-center"
          >
            {/* Constrained container to prevent extreme height */}
            <div className="relative w-full max-w-[240px] aspect-[9/16] shadow-2xl">
              {/* NOTE: Replace this image with the actual Rove "Before" selfie once you have it */}
              <img
                src={optimizeUrl("https://res.cloudinary.com/dyryfgjro/image/upload/v1776265995/rove-before_veaieo.png")}
                alt="Raw Phone Image"
                loading="lazy"
                className="w-full h-full object-cover rounded-xl opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
              />
            </div>
            <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              The Raw Input
            </div>
          </motion.div>
        </div>

        {/* Section 2 – The Transformation & Vault */}
        <div className="max-w-6xl mx-auto mb-32 bg-[#111] border border-white/5 rounded-3xl p-8 md:p-16">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">The Content Vault</h2>
            <p className="text-white/70 text-lg">
              We completely rebuilt the environment around the garment. By
              preserving the exact fabric textures and fit, we utilized
              AI synthesis to map the activewear onto hyper-realistic fitness
              models in professional studio lighting, creating a full vault of static assets.
            </p>
          </motion.div>

          {/* Reveal Animation Grid (2 Columns for the 2 provided images) */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[4/5]"
            >
              <img
                src={imgHero}
                alt="Website Hero Image"
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 bg-[#FCA311] text-black font-bold px-4 py-1.5 rounded-md text-sm shadow-lg">
                Website Hero Visual
              </div>
            </motion.div>

            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[4/5]"
            >
              <img
                src={imgCarousel}
                alt="Instagram Carousel"
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 bg-[#FCA311] text-black font-bold px-4 py-1.5 rounded-md text-sm shadow-lg">
                Instagram Carousel Visual
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section 4 – Video Focus (A/B Testing Demo) */}
        <div className="max-w-6xl mx-auto mb-32">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The Final Motion Assets</h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Powered by our motion technology, we generated high-retention video ad creatives. 
              We delivered two distinct angles for A/B testing: a premium Cinematic Brand Ad and a fast-paced TikTok Performance Hook.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Video 1: Cinematic */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(252,163,17,0.05)] bg-[#0a0a0a] flex flex-col"
            >
              <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-xs font-semibold tracking-wider text-white/90">
                CONCEPT A: Cinematic Brand Ad
              </div>
              <video
                src={videoCinematic}
                poster={videoCinematic.replace(".mp4", ".jpg")}
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-[9/16] object-cover"
              />
            </motion.div>

            {/* Video 2: TikTok Hook */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(252,163,17,0.05)] bg-[#0a0a0a] flex flex-col"
            >
              <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-xs font-semibold tracking-wider text-white/90">
                CONCEPT B: TikTok Performance Hook
              </div>
              <video
                src={videoTikTok}
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-[9/16] object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Section 5 – The Result */}
        <motion.div
          {...fadeUp}
          className="max-w-3xl mx-auto text-center bg-gradient-to-b from-[#1a1a1a] to-black border border-white/10 p-12 rounded-3xl"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">The Impact</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            Rove didn't just get a better photo; they got a flexible,
            multi-platform asset engine. Engagement metrics skyrocketed on their
            ad creatives, and the brand positioned itself alongside top-tier
            global activewear labels—all without booking a single photographer.
          </p>

          <div className="inline-block relative">
            <span className="text-[#FCA311] text-6xl absolute -top-6 -left-8 opacity-40 font-serif">"</span>
            <p className="text-2xl font-semibold text-white px-6">
              A flawless brand launch. No studio required.
            </p>
            <span className="text-[#FCA311] text-6xl absolute -bottom-10 -right-8 opacity-40 font-serif">"</span>
          </div>
        </motion.div>
      </section>
    </WebLayoutWrapper>
  );
};

export default Solutions;