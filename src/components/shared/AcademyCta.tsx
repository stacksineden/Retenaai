import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const AcademyCta = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="container bg-black w-full">
      <motion.div
        ref={ref}
        className="2xl:max-w-[1440px] mx-auto relative py-4 lg:mb-5 lg:py-10 xl:mb-6 px-0 lg:px-20 3xl:px-0 overflow-hidden w-full md:w-[80%] font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="flex flex-col gap-2 p-5">
          <h1 className="text-2xl md:text-4xl text-white tracking-wide font-semibold">
            🎓 Join RetenaAI Academy:{" "}
            <span className="text-[#FCA311]">
              Learn Generative AI. Master Automation. Build Smarter.
            </span>
          </h1>
          <h4 className="text-lg md:text-3xl text-white tracking-wide font-semibold">
            Whether you&#8217;re a founder, freelancer, or future AI consultant
            — RetenaAI Academy equips you with the skills to build, manage, and
            monetize smart systems..
          </h4>
          <ul className="flex flex-col gap-2">
            <li className="text-[#E5E5E5] text-base md:text-lg font-medium">
              <span className="font-bold"> 🚀 Unlock career pathways</span> into
              roles like AI integrator, generative AI engineer, or automation
              consultant — with real placement opportunities inside and outside
              RetenaAI.
            </li>
            <li className="text-[#E5E5E5] text-base md:text-lg font-medium">
              <span className="font-bold">
                🎯 Access career placement support,{" "}
              </span>
              job matching, and freelance/integration opportunities through our
              network of partners and in-house projects.
            </li>
            <li className="text-[#E5E5E5] text-base md:text-lg font-medium">
              <span className="font-bold">
                📈 Fast-track your access to the Pilot Program{" "}
              </span>
              — joining the Academy makes you eligible to be considered for
              pilot client projects and startup support.
            </li>
            <li className="text-[#E5E5E5] text-base md:text-lg font-medium">
              <span className="font-bold">
                🛠 Learn the exact systems we use internally{" "}
              </span>
              to build and deploy scalable AI infrastructures for service
              businesses.
            </li>
          </ul>
          <div className="flex justify-start mt-2 gap-3 items-center">
            <Button
              className="bg-[#FCA311] hover:bg-[#FCA311] text-black text-base px-4 py-6 transform transition duration-300 hover:scale-90"
              onClick={() => navigate("/retenaai-academy")}
            >
              Enroll Now
              <ArrowRight className="text-black h-5" /> 
            </Button>
            <Button
              className="border-[1.5px] bg-[#E5E5E5] border-primary-blue2 text-primary-black hover:bg-primary-blue hover:text-white text-base px-4 py-5 transform transition duration-300 hover:scale-90"
              onClick={() => navigate("/retenaai-academy/programs")}
            >
              Explore Courses
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AcademyCta;
