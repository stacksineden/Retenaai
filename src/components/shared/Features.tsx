import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Features = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="container bg-accent w-full">
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
          <h1 className="text-2xl md:text-4xl text-primary-black tracking-wide font-semibold">
            🧰 Our Signature Offer:{" "}
            <span className="text-[#FCA311]">
              💼 The AI Client Acquisition System
            </span>
          </h1>
          <h4 className="text-lg md:text-3xl text-primary-black tracking-wide font-semibold">
            Let AI fill your pipeline with qualified leads — while you focus on
            closing deals, not chasing them.
          </h4>
          <ul className="flex flex-col gap-2">
            <li className="text-primary-blue text-base font-medium flex items-center gap-1">
              📩 Smart, personalized outreach
            </li>
            <li className="text-primary-blue text-base font-medium flex items-center gap-1">
              🧠 Built-in qualification logic
            </li>
            <li className="text-primary-blue text-base font-medium flex items-center gap-1">
              📅 Automated booking + reminders
            </li>
            <li className="text-primary-blue text-base font-medium flex items-center gap-1">
              🔁 Reusable flows you can manage yourself
            </li>
          </ul>
          <div className="flex justify-start mt-2">
            <Button
              className="bg-primary-black hover:bg-primary-blue text-white text-base px-4 py-6 transform transition duration-300 hover:scale-90"
              onClick={() => navigate("/case-study?system=leadpilot")}
            >
              Learn More
              <ArrowRight className="text-white h-5" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;

