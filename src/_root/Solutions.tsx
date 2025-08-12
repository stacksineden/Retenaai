import { motion } from "framer-motion";
import WebLayoutWrapper from "@/components/shared/WebLayoutWrapper";
import { Timeline } from "@/components/shared/Timeline";
import CtaCard from "@/components/shared/CtaCard";
import { useNavigate } from "react-router-dom";

const retenaSystems = [
  {
    name: "Retena LeadPilot",
    description: "Personalized Deep Outreach System",
    icon: "🎯",
    linkText: "Learn More",
    href: "#",
    slug: "leadpilot",
  },
  {
    name: "Retena StudioGen",
    description: "AI Product Photography System",
    icon: "📸",
    linkText: "Learn More",
    href: "#",
    slug: "studiogen",
  },
  {
    name: "Retena CloneCast",
    description: "Content Automation & Deployment System",
    icon: "📡",
    linkText: "Learn More",
    href: "#",
    slug: "clonecast",
  },
  {
    name: "Retena UGCPro",
    description: "AI UGC Ad Creation & Deployment System",
    icon: "🎬",
    linkText: "Learn More",
    href: "#",
    slug: "ugcpro",
  },
  {
    name: "Retena ConvertFlow",
    description: "AI Lead Conversion System",
    icon: "🔄",
    linkText: "Learn More",
    href: "#",
    slug: "convertflow",
  },
];

const data = [
  {
    title: "Discovery",
    content: (
      <div>
        <p className="mb-8 text-base md:text-lg text-white">
          <span className="font-semibold text-[#FCA311]">
            Step 1: Discovery & Customization
          </span>{" "}
          <br />
          We kick off with a deep-dive discovery session to understand your
          goals, operations, and target outcomes. This helps us tailor the
          system to your business model — making it feel less like software, and
          more like your own internal AI team.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/assets/disc1.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/assets/disc2.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/assets/disc3.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/assets/disc4.png"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Deployment",
    content: (
      <div>
        <p className="mb-8 text-base md:text-lg text-white">
          <span className="font-semibold text-[#FCA311]">
            Step 2: System Deployment & Onboarding
          </span>{" "}
          <br />
          Once aligned, we deploy your ready-to-use AI system — fully configured
          for your business. Our team handles the tech, while you focus on
          results. We also onboard your key staff and ensure seamless adoption.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/assets/dep1.webp"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/assets/dep2.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/assets/dep3.png"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/assets/dep4.webp"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Support & Optimization",
    content: (
      <div>
        <p className="mb-8 text-base md:text-lg text-white">
          <span className="font-semibold text-[#FCA311]">
            Step 3: Ongoing Optimization & Support
          </span>{" "}
          <br />
          As long as you're on the platform, we're by your side — providing
          updates, performance reviews, and continuous support. Your system
          improves as your business evolves.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/assets/sup1.webp"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/assets/sup2.webp"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/assets/sup3.png"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/assets/sup4.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
];

const Solutions = () => {
  const navigate = useNavigate();
  return (
    <WebLayoutWrapper>
      {/* Hero Section */}
      <section className="bg-accent">
        <div className="container min-h-[500px] md:min-h-[500px] relative flex flex-col items-center justify-center bg-hero-bg bg-no-repeat bg-left bg-contain text-center space-y-6">
          <motion.h2
            className="text-primary-black text-4xl lg:text-6xl font-bold"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-[#FCA311]">Smart AI Systems</span> Built to
            Help Your Business Scale Faster.
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-primary-black font-medium max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            Everything from outreach to content and conversion — ready-to-use,
            zero code, fully automated.
          </motion.p>
        </div>
      </section>

      {/* Section*/}
      <div className="container py-8">
        <div className="w-full mx-auto flex flex-col items-center justify-betwween">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-xl md:text-3xl text-primary-black">
              Browse All RetenaAI Systems
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:py-4 md:px-4 px-1 py-1">
            {retenaSystems.map((system) => (
              <div
                key={system.name}
                className="flex items-center justify-between p-4 border rounded-xl hover:shadow-md transition-shadow bg-white cursor-pointer"
                onClick={() => navigate(`/case-study?system=${system.slug}`)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{system.icon}</span>
                  <span className="font-medium">{system.name}</span>
                </div>
                <div className="text-primary-blue">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 3h7m0 0v7m0-7L10 14"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* how it works*/}
      <div className="relative w-full overflow-clip">
        <Timeline data={data} /> 
      </div>

      {/* CTA Section */}
      <CtaCard
        title={
          <>
            Let&#8217;s Go Beyond Tools —<br /> Let&#8217;s Transform Your
            Business.
          </>
        }
        description={
          <>
            At RetenaAI, we don&#8217;t just deploy tech — we dive deep into
            your business model, uncover what's blocking your growth, and
            engineer scalable client acquisition systems that work behind the
            scenes while you focus on the bigger picture.
            <br />
            💡 Whether you're stuck with poor conversions, lead drop-offs, or
            broken internal processes — we&#8217;ll map it out, optimize it with
            AI infrastructure, and drive real ROI from day one.
          </>
        }
        buttonText="Learn More"
        imageSrc="/assets/solcta.webp"
        ctaUrl="/contact"
      />
    </WebLayoutWrapper>
  );
};

export default Solutions;
