import React from "react";
import AcademyFeature from "@/components/shared/AcademyFeature";
import AcademyHero from "@/components/shared/AcademyHero";
import { AcademyTimeline } from "@/components/shared/AcademyTimeline";
import CtaCard from "@/components/shared/CtaCard";
import { ProgramHighLights } from "@/components/shared/ProgramHighLights";
import WebLayoutWrapper from "@/components/shared/WebLayoutWrapper";
import { academyfaqs } from "@/modelDataset";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLocation } from "react-router-dom";
import TuitionDiscountBanner from "@/components/shared/TutionDiscountBanner";

const Academy = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <WebLayoutWrapper>
      <TuitionDiscountBanner />
      <section className="bg-accent">
        <AcademyHero
          title={
            <>
              🧠 Learn AI. <br />
              Get Paid. It&#8217;s That Simple
            </>
          }
          description="We train Africa&#8217;s next generation of AI engineers, consultants, and builders through hands-on learning, real-world projects, and career pathways that turn skills into income."
          buttonTextA="Apply Now"
          buttonTextB="View Program"
          imageSrc="/assets/acaher.webp"
          ctaUrl={`/retenaai-academy/program?mode=generative_ai_engineering`}
          ctaAltUrl="/sign-up"
        />
      </section>
      <section className="py-4">
        <ProgramHighLights />
      </section>

      <div id="how-it-works" className="relative w-full overflow-clip">
        <AcademyTimeline data={data} />
      </div>
      <AcademyFeature />
      <section
        id="faqs"
        className="w-full bg-[#F9FAFB] py-20 px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-black mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {academyfaqs?.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg transition duration-300 border border-gray-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#FCA311]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#FCA311]" />
                  )}
                </button>
                {activeIndex === index && (
                  <div className="px-6 pb-4 text-gray-600 text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaCard
        title={<>Ready to Build the Future with AI?</>}
        description={
          <>
            Don&#8217;t just learn what&#8217;s trending. Master what
            transforms. Join a movement of African talents learning, building,
            and launching impactful AI solutions — one system at a time.
            <br />
            🎓 Limited seats. Deadline is near. Apply now to secure your spot in
            Cohort 2.
          </>
        }
        buttonText="Start Your Application"
        imageSrc="/assets/acecta.webp"
        ctaUrl="/sign-up"
      />
    </WebLayoutWrapper>
  );
};

export default Academy;

const data = [
  {
    title: "Launch",
    content: (
      <div>
        <p className="mb-8 text-base md:text-lg text-white">
          <span className="font-semibold text-[#FCA311]">
            Step 1: Build Your Foundations
          </span>{" "}
          <br />
          In the Fusion Phase, which runs for four weeks, you&#8217;ll develop a
          rock-solid foundation in AI literacy. From generative AI basics to
          prompt engineering and workflow thinking, you&#8217;ll learn the core
          concepts, tools, and mental models shaping the AI space
          today—regardless of your technical background. Think of this as your
          launchpad into the world of applied AI.
        </p>
        {/* <div className="grid grid-cols-2 gap-4">
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
        </div> */}
      </div>
    ),
  },
  {
    title: "Build",
    content: (
      <div>
        <p className="mb-8 text-base md:text-lg text-white">
          <span className="font-semibold text-[#FCA311]">
            Step 2: Choose Your Specialisation
          </span>{" "}
          <br />
          The next four weeks are all about focus. This is where you choose a
          path that aligns with your career goals and dive deep into it. Whether
          you&#8217;re drawn to systems integration, AI consulting and strategy,
          agent development, light-code programming, or no-code product
          development, this phase is designed to give you hands-on,
          challenge-driven learning experiences that mirror real-world AI
          projects. You&#8217;ll move beyond theory into practice, guided by
          mentors and structured mastery tasks that help you gain the
          confidence, skills, and mindset needed to excel.
        </p>
        {/* <div className="grid grid-cols-2 gap-4">
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
        </div> */}
      </div>
    ),
  },
  {
    title: "Thrive",
    content: (
      <div>
        <p className="mb-8 text-base md:text-lg text-white">
          <span className="font-semibold text-[#FCA311]">
            Step 3: Capstone and Career Pathways
          </span>{" "}
          <br />
          The final four weeks bring everything together. Here, you&#8217;ll
          work on a portfolio-ready capstone project that allows you to showcase
          your expertise in solving real-world business challenges with AI.
          Alongside the build, you&#8217;ll sharpen your ability to pitch,
          present, and document your work so it&#8217;s industry-ready. By the
          time you graduate, you&#8217;ll not only have a strong portfolio but
          also a clear pathway forward. You can take your project further in our
          accelerator program, test your ideas with industry partners through a
          pilot program, or step directly into consulting, freelancing, or
          employment opportunities with the support of our career placement
          team.
        </p>
        {/* <div className="grid grid-cols-2 gap-4">
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
        </div> */}
      </div>
    ),
  },
];
