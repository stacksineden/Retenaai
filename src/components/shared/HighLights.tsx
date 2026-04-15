import { AppleStyleCarousel, Card } from "./AppleStyleCarousel";
import { motion } from "framer-motion";

export function HighLights() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} identifier="agency" />
  ));

  return (
    <section className="relative w-full bg-black py-9 md:py-32 overflow-hidden border-t border-white/5">
      
      {/* ── ALIGNED PREMIUM HEADER ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Transform Fashion.{" "}
            <span className="text-[#FCA311]">Scale Creatively.</span>
          </h2>
          <p className="text-[#E5E5E5]/70 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
            Our AI-powered creative suite turns your brand visuals into campaigns
            that sell, grow and scale — from single product to full collection.
          </p>
        </motion.div>
      </div>

      {/* ── UNTOUCHED CAROUSEL SETUP ── */}
      <div className="w-full">
        <AppleStyleCarousel items={cards} />
      </div>
      
    </section>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                RetenaAI Systems
              </span>{" "}
              Ready-to-use AI systems that plug directly into your business — no
              developers, no complexity. Just subscribe, connect, and grow.
            </p>
            <img
              src="/assets/psedo-generations/selfies1.png"
              alt="mockup"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Studio-Ready Visuals",
    title: "High-quality AI-retouched photographs tailored per product.",
    src: "https://res.cloudinary.com/dyryfgjro/image/upload/v1771538166/men_kaftan1_leyhk3.png",
    content: <DummyContent />,
    slug: "leadpilot",
  },
  {
    category: "Story & Caption Creation",
    title: "Taglines, captions and social-ready content pinned to each visual.",
    src: "https://res.cloudinary.com/dyryfgjro/image/upload/v1763812732/men_tshirt3_aaax15.png",
    content: <DummyContent />,
    slug: "studiogen",
  },
  {
    category: "Video & Commercial Production",
    title: "From stills to motion: ads and commercial visuals made for your brand.",
    src: "/assets/ugc.webp",
    content: <DummyContent />,
    slug: "ugcpro",
  },
  {
    category: "Content Posting Automations",
    title: "Schedule and publish your content automatically, directly to your channels.",
    src: "/assets/lead.webp",
    content: <DummyContent />,
    slug: "convertflow",
  },
  {
    category: "Paid Meta Ads Setup & Creative Services",
    title: "Full ad campaigns crafted, creatives supplied, and performance driven.",
    src: "/assets/auth-bg.png",
    content: <DummyContent />,
    slug: "convertflow",
  },
   {
    category: "E-Commerce Store Build & Brand Integration",
    title: "From visuals to storefront: seamless brand presence online.",
    src: "/assets/dep1.webp",
    content: <DummyContent />,
    slug: "convertflow",
  },
    {
    category: "Visual System & Automation",
    title: "Custom infrastructure built to convert raw images into branded visuals, at scale.",
    src: "/assets/content.webp",
    content: <DummyContent />,
    slug: "clonecast",
  },
];