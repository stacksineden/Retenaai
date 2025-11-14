import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const AcademyFeature = () => {
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
            🎓 Cohort 2 Admissions Are Now Open!!!{" "}
            <span className="text-[#FCA311]">
              Your Chance to Join Africa&#8217;s Leading AI Academy — For Free.
            </span>
          </h1>
          <h4 className="text-lg md:text-3xl text-white tracking-wide font-semibold">
            Cohort 2 is here — and it&#8217;s your opportunity to become a part
            of the next wave of AI professionals. Apply now to stand a chance to
            earn a full scholarship, receive expert mentorship, and build
            real-world systems from Day 1. 🚀 Win a Full Scholarship — Start
            Building AI Without Paying a Dime. What to Expect:
          </h4>
          <ul className="flex flex-col gap-2">
            <li className="text-accent text-base font-medium flex items-center gap-1">
              📝 Apply to join — no prior experience required.
            </li>
            <li className="text-accent text-base font-medium flex items-center gap-1">
              📚 Get Home study materials to prep for the entrance assessment.
            </li>
            <li className="text-accent text-base font-medium flex items-center gap-1">
              🎯 Sit for your aptitude test & interviews — show us your
              potential.
            </li>
            <li className="text-accent text-base font-medium flex items-center gap-1">
              🏆 1 Full Scholarship + 2 Partial Scholarships up for grabs.
            </li>
            <li className="text-accent text-base font-medium flex items-center gap-1">
              ⏳ Limited spots available — apply before the deadline closes!
            </li>
          </ul>
          <div className="flex justify-start mt-2">
            <Button
              className="bg-[#FCA311] hover:bg-primary-blue hover:text-white text-black text-base px-4 py-6 transform transition duration-300 hover:scale-90"
              onClick={() => navigate("/sign-up")}
            >
              Start Your Application
              <ArrowRight className="text-black h-5 hover:text-white" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AcademyFeature;
