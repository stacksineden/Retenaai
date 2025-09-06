import React from "react";
import { useState } from "react";
import WebLayoutWrapper from "@/components/shared/WebLayoutWrapper";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  BrainCog,
  BriefcaseBusiness,
  LaptopMinimal,
  Timer,
  User,
  Waypoints,
  Calendar,
  Info,
  CheckCircle2,
  Star,
  Briefcase,
  Users,
  Rocket,
  CreditCard,
  Banknote,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import CtaCard from "@/components/shared/CtaCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import { available_masterclasses } from "@/modelDataset";

const Masterclass = () => {
  const Navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const progid = searchParams.get("mode");

  const programData = available_masterclasses?.filter(
    (program) => program.slug === progid
  )[0];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Redirect if no mode param
  React.useEffect(() => {
    if (!progid) {
      Navigate("/retenaai-academy/programs", { replace: true });
    }
  }, [progid, Navigate]);

  const cards = [
    {
      icon: <BrainCog className="h-14 w-14 text-[#FCA311]" />,
      title: "Immersive 4-Week Learning",
      text: `A focused ${
        programData?.cohort_duration ?? "__ __"
      } journey where you master AI tools for product photography, branding, and content automation. You’ll build real workflows and systems, not just theory.`,
    },
    {
      icon: <BookOpen className="h-14 w-14 text-[#FCA311]" />,
      title: "Comprehensive Resources",
      text: `Get lifetime access to all templates, recorded sessions, and guides. Balance live interactive workshops with self-paced materials so you can learn, practice, and revisit at your own pace.`,
    },
    {
      icon: <Waypoints className="h-14 w-14 text-[#FCA311]" />,
      title: "Hands-On Practice",
      text: `Every session is designed around practical tasks—setting up AI photo shoots, automating captions, managing social posts, and creating ad creatives. You learn by building and applying immediately.`,
    },
    {
      icon: <BriefcaseBusiness className="h-14 w-14 text-[#FCA311]" />,
      title: "Real-World Portfolio",
      text: `Graduate with a ready-to-sell AI service, branded social presence, and multiple project outcomes. These become your portfolio and launchpad for offering AI-powered solutions to businesses.`,
    },
  ];

  return (
    <WebLayoutWrapper>
      <section className="bg-accent">
        <div className="container bg-hero-bg bg-no-repeat bg-left bg-contain w-full min-h-[500px] md:min-h-[580px] flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-12 gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex flex-col justify-center space-y-6 max-w-xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="uppercase text-sm text-primary-black tracking-wide font-semibold"
            >
              {programData?.needed_by ?? "__ __"}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-[#FCA311] leading-tight"
            >
              {programData?.program_name ?? "__ __"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base text-primary-black font-medium"
            >
              {programData?.hero_subtext ?? "__ __"}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 flex items-center gap-2 flex-row"
            >
              <Button
                className="bg-primary-black hover:bg-primary-blue text-white text-base px-4 py-6 transform transition duration-300 hover:scale-90"
                onClick={() =>
                  Navigate(
                    `/retenaai-academy/masterclass-billing?program=${progid}`
                  )
                }
              >
                Enroll Now
                <ArrowRight className="text-white h-4" />
              </Button>
              <Button
                className="bg-transparent text-black hover:text-black hover:bg-transparent text-base px-4 py-5 transform transition duration-300 hover:scale-90 border border-black"
                onClick={() =>
                  Navigate(
                    `/retenaai-academy/masterclass-billing?program=${progid}`
                  )
                }
              >
                Chat with Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center space-x-2 pt-2"
            >
              <div className="flex -space-x-2">
                <img
                  className="w-8 h-8 rounded-full border-2 border-white"
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="user1"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-white"
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="user2"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-white"
                  src="https://randomuser.me/api/portraits/men/3.jpg"
                  alt="user3"
                />
              </div>
              <span className="text-sm text-gray-600 font-medium">
                Join the pioneers shaping the future of AI integration.
              </span>
            </motion.div>
          </motion.div>

          {/* Right Side: Image + Card (Sticky Look) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col lg:flex-row items-end md:-mr-5"
          >
            {/* Image - taller and has fade at bottom */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative z-10 h-[480px] w-[220px] md:w-[260px] rounded-t-3xl overflow-hidden hidden md:inline-block"
            >
              <img
                src="/assets/sysimg.webp"
                alt="Instructor"
                className="w-full h-full object-cover"
              />
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#f3f9ff] to-transparent pointer-events-none" />
            </motion.div>

            {/* Brochure Card - standard height */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-[#000000] text-white rounded-r-3xl rounded-l-3xl md:rounded-l-[0px] p-6 shadow-xl w-full md:w-[340px] self-center md:self-auto"
            >
              <h3 className="text-lg font-semibold mb-2">Download Brochure</h3>
              <p className="text-xs mb-4 opacity-80">
                What you will find in the brochure
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✔</span> About the
                  Program
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✔</span> The Design for
                  the Delivery
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✔</span> Our Tech
                  Mentorship Project
                </li>
              </ul>

              <Button
                className="w-full bg-[#FCA311] text-white font-semibold mb-4 hover:bg-[#e59300]"
                onClick={() => {
                  //   window.open(programData?.brochure_link ?? "#", "_blank");
                  Navigate(
                    `/retenaai-academy/masterclass-billing?program=${progid}`
                  );
                }}
              >
                Download Brochure
              </Button>

              <p className="text-sm mb-2 font-medium">
                Start your {programData?.program_name ?? "__ __"} Journey TODAY!
              </p>
              <Button
                className="w-full bg-white text-[#14213D] font-semibold hover:bg-gray-100"
                onClick={() =>
                  Navigate(
                    `/retenaai-academy/masterclass-billing?program=${progid}`
                  )
                }
              >
                Join Class
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="container flex flex-col md:flex-row items-center justify-between">
        <div className="py-9 bg-[#14213D] px-7">
          <p className="text-[#FCA311] text-base uppercase font-medium">
            Cohort {programData?.cohort ?? "__ __"} Starts:
          </p>
          <p className="text-white text-2xl uppercase font-bold">
            {programData?.cohort_start_date ?? "__ __"}
          </p>
        </div>
        <div className="flex items-center py-9 px-7 gap-5 md:gap-28">
          <div className="flex flex-col items-center text-center">
            <Timer className="h-11 w-11 text-[#FCA311]" />
            <p className="text-primary-black text-lg font-semibold">
              {programData?.cohort_duration ?? "__ __"}
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <LaptopMinimal className="h-11 w-11 text-[#FCA311]" />
            <p className="text-primary-black text-lg font-semibold">
              Virtual Live Classes
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <User className="h-11 w-11 text-[#FCA311]" />
            <p className="text-primary-black text-lg font-semibold">
              Expert Instructors
            </p>
          </div>
        </div>
        <div className="flex items-center py-9 justify-center">
          <Button
            className="bg-primary-black hover:bg-primary-blue text-white text-base px-4 py-6 transform transition duration-300 hover:scale-90"
            onClick={() =>
              Navigate(
                `/retenaai-academy/masterclass-billing?program=${progid}`
              )
            }
          >
            Enroll Now
            <ArrowRight className="text-white h-4" />
          </Button>
        </div>
      </section>

      <section className="container mt-10 py-7 bg-accent">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" text-3xl md:text-4xl font-bold text-primary-black"
        >
          How you will Learn
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center py-9 px-7 gap-5 md:gap-28 my-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center gap-2 md:gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {card.icon}
              <p className="text-primary-black text-2xl font-semibold">
                {card.title}
              </p>
              <p className="text-primary-black text-base">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="container mt-10 py-7 bg-accent">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-black my-7">
          What you will learn
        </h2>
        <div className="space-y-10">
          {programData?.course_outline?.map((mod, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-2xl shadow-sm bg-gray-50"
            >
              <div className="flex justify-between items-start flex-wrap mb-4">
                <h3 className="text-xl font-semibold text-[#14213D] flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#FCA311]" />
                  {mod.topic}
                  {mod.is_elective && (
                    <span className="ml-2 text-sm px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                      Elective
                    </span>
                  )}
                </h3>
                <span className="flex items-center text-sm text-[#FCA311] font-semibold gap-1">
                  <Calendar className="w-4 h-4" />
                  Module {index + 1}
                </span>
              </div>

              <p className="text-[#14213D] mb-4 flex items-start gap-2 text-base">
                <Info className="w-5 md:w-4 h-5 md:h-4 mt-1 text-[#000000]" />
                {mod.description}
              </p>

              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-2 space-y-2">
                {mod.outcomes.map((outcome, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-[#FCA311]" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-[#000000] py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#FCA311] leading-tight"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              What Comes After? <br />
              <span className="text-white">Your Post-Masterclass Outcomes</span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Completing the {programData?.program_name ?? "__ __"} isn’t just
              about learning tools—it’s about launching with clarity. Here’s
              what you’ll walk away with after the program.
            </motion.p>

            <motion.ul
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
              viewport={{ once: true }}
            >
              <motion.li
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Rocket className="w-6 h-6 text-[#FCA311] mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    A Ready-to-Launch AI Service
                  </h4>
                  <p className="text-gray-400 text-base">
                    By the end of the 4 weeks, you’ll have a fully branded
                    AI-powered product photography and content service—complete
                    with online presence, workflow templates, and positioning.
                  </p>
                </div>
              </motion.li>

              <motion.li
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Briefcase className="w-6 h-6 text-[#FCA311] mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Advanced AI & Automation Skills
                  </h4>
                  <p className="text-gray-400 text-base">
                    Gain hands-on mastery of multiple AI photography tools,
                    automation for posting and captions, social media
                    management, and even ad strategies—so you can deliver
                    end-to-end transformation for businesses.
                  </p>
                </div>
              </motion.li>

              <motion.li
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Users className="w-6 h-6 text-[#FCA311] mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Community, Templates & Pilot Access
                  </h4>
                  <p className="text-gray-400 text-base">
                    Join an active support community, access plug-and-play
                    templates, and get strong consideration for our Pilot
                    Program if your idea is viable—giving you the chance to
                    scale beyond just a service.
                  </p>
                </div>
              </motion.li>
            </motion.ul>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="font-semibold text-[#FCA311]">
                ✅ You don’t just finish—you leave equipped, branded, and
                positioned to earn with AI.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full h-full hidden md:inline-block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-[400px] bg-gray-800 rounded-xl shadow-md flex items-center justify-center overflow-hidden">
              <motion.img
                src="/assets/ptrack.webp"
                alt="trackimg"
                className="w-full h-full object-cover"
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-[#F9FAFB] py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#14213D] leading-tight">
              Enjoy a{" "}
              <span className="text-[#FCA311]">Special Tuition Discount</span>{" "}
              for a Limited Time!
            </h2>
            <p className="text-lg text-gray-700">
              Invest in your AI career now and take advantage of this
              limited-time tuition slash. Secure your spot today with a single
              one-time payment.
            </p>

            <ul className="space-y-6">
              {/* One-Time Payment */}
              <li className="flex items-start gap-4">
                <CreditCard className="text-[#FCA311] w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-[#14213D]">
                    One-Time Payment
                  </h4>
                  <p className="text-gray-600">
                    Make a single payment of{" "}
                    <span className="font-semibold text-[#c1121f] line-through">
                      ₦170,000
                    </span>{" "}
                    <span className="font-semibold text-green-600">
                      ₦55,000
                    </span>{" "}
                    and secure your seat instantly.
                  </p>
                </div>
              </li>

              {/* No Hidden Fees */}
              <li className="flex items-start gap-4">
                <Banknote className="text-[#FCA311] w-6 h-6 mt-1" />
                <p className="text-gray-600">
                  No hidden fees. No extra charges. Just a clear, discounted
                  path to launching your AI integration career.
                </p>
              </li>
            </ul>

            <Button
              className="bg-[#000000] border-[1.5px] text-sm border-primary-blue2 font-semibold text-white hover:bg-primary-blue hover:text-white items-center gap-2"
              onClick={() =>  Navigate(
                    `/retenaai-academy/masterclass-billing?program=${progid}`
                  )}
            >
              Apply Now
              <ArrowRight className="text-white h-4" />
            </Button>
          </div>

          {/* Right: Image */}
          <div className="w-full">
            <img
              src="/assets/payimg.webp"
              alt="Payment Options"
              className="w-full h-auto rounded-xl shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F9FAFB] py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-black mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {programData?.faqs?.map((faq, index) => (
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
        title={
          <>
            Ready to Build <br /> the Future of AI Integration?
          </>
        }
        description={
          <>
            Join the next generation of system integrators <br /> reshaping how
            businesses run—powered by AI, driven by you.
          </>
        }
        buttonText="Secure Your Spot"
        imageSrc="/assets/ptrack.webp"
        ctaUrl="/sign-up"
      />
    </WebLayoutWrapper>
  );
};

export default Masterclass;
