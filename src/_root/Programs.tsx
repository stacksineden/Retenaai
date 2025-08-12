import { motion } from "framer-motion";
import WebLayoutWrapper from "@/components/shared/WebLayoutWrapper";
import CtaCard from "@/components/shared/CtaCard";
import { useNavigate } from "react-router-dom";
import { AcademyTimeline } from "@/components/shared/AcademyTimeline";
import { Lock } from "lucide-react"; 
import { retenaPrograms } from "@/modelDataset";



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
          In the Fusion Phase (i.e 6 weeks), you&#8217;ll develop a rock-solid
          foundation in AI literacy. From prompt engineering to generative AI,
          you&#8217;ll learn the core concepts, tools, and thinking patterns
          that shape the AI space today—regardless of your technical background.
          Think of this as your launchpad.
        </p>
      </div>
    ),
  },
  {
    title: "Build",
    content: (
      <div>
        <p className="mb-8 text-base md:text-lg text-white">
          <span className="font-semibold text-[#FCA311]">
            Step 2: Get Track-Ready
          </span>{" "}
          <br />
          This phase is designed to prepare you for specialization, no matter
          your chosen path—be it System Integration, AI Engineering, Product
          Design, or any of our other focus areas. Over six intensive weeks,
          you&#8217;ll engage in hands-on, challenge-driven learning experiences
          that simulate real-world AI workflows and problem-solving scenarios.
          From automation logic to applied AI systems thinking, you'll move
          beyond theory into practice—developing the mindset, skills, and
          confidence required to succeed in your next stage of learning.
        </p>
      </div>
    ),
  },
  {
    title: "Thrive",
    content: (
      <div>
        <p className="mb-8 text-base md:text-lg text-white">
          <span className="font-semibold text-[#FCA311]">
            Step 3: Specialize & Launch
          </span>{" "}
          <br />
          The Track Phase is your moment of specialization. Whether you&#8217;re
          focused on AI Engineering, No-Code AI Systems, or Product Strategy,
          this is where you dive deep. You&#8217;ll build real projects,
          collaborate with mentors, and gain advanced skills that prepare you
          for the industry. After this? Choose your path: 🚀 Launch your own AI
          pilot project 💼 Join an internal team within the agency 🎯 Get
          matched with hiring partners through our career placement support.
        </p>
      </div>
    ),
  },
];

const Programs = () => {
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
            Build <span className="text-[#FCA311]">AI Skills</span> That Help
            You Deliver, Get Hired, or Launch Bold Ideas
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-primary-black font-medium max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            Whether you're starting your journey or looking to specialize,
            RetenaAI Academy&#8217;s hands-on programs give you the skills,
            tools, and community to grow in the AI-powered economy.
          </motion.p>
        </div>
      </section>

      {/* Programs Section */}
      <div className="container py-8">
        <div className="w-full mx-auto flex flex-col items-center justify-betwween">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-xl md:text-3xl text-primary-black">
              Our Programs
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
            {retenaPrograms.map((program) => {
              const isDisabled = program.disabled;

              return (
                <div
                  key={program.name}
                  onClick={() =>
                    !isDisabled &&
                    navigate(`/retenaai-academy/program?mode=${program.slug}`)
                  }
                  className={`relative bg-white border rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group ${
                    isDisabled ? "cursor-not-allowed opacity-80" : "cursor-pointer"
                  }`}
                >
                  {/* Program image */}
                  <div className="h-[200px] w-full bg-gray-200 flex items-center justify-center relative">
                    <img
                      src={program.image ?? "/assets/genai.webp"}
                      alt={program.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Dark overlay with padlock */}
                    {isDisabled && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <Lock className="text-white w-10 h-10" />
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-4 flex flex-col gap-2">
                    <span className="inline-block text-xs font-semibold text-white bg-primary-blue rounded-full px-3 py-1 w-max uppercase tracking-wide">
                      Bootcamp ⚡
                    </span>
                    <h5 className="text-lg font-semibold text-primary-black leading-snug">
                      {program.name}
                    </h5>
                    <p className="text-base text-primary-black/70">
                      {program.description}
                    </p>
                    {!isDisabled && (
                      <div className="mt-3">
                        <span className="text-primary-blue text-sm font-semibold group-hover:underline inline-flex items-center gap-1">
                          {program.linkText}
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14 3h7m0 0v7m0-7L10 14"
                            />
                          </svg>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="relative w-full overflow-clip">
        <AcademyTimeline data={data} />
      </div>

      {/* CTA Section */}
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
        ctaUrl="/contact"
      />
    </WebLayoutWrapper>
  );
};

export default Programs;
