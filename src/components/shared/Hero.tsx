// import { motion } from "framer-motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-accent">
      <div className="container min-h-[500px] md:min-h-[700px] relative flex items-center justify-center bg-hero-bg bg-no-repeat bg-left bg-contain">
        <div className="flex flex-col gap-1 justify-center py-14 md:py-0">
          <div className="text-left">
            <motion.h2
              className="text-primary-black text-4xl lg:text-6xl font-bold"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="text-[#FCA311]">We Make It</span> Unreasonable{" "}
              For<span className="text-[#FCA311]"> Businesses </span>in Africa &
              Beyond to Operate Without Scalable{" "}
              <span className="text-[#FCA311]">AI Infrastructure.</span>
            </motion.h2>
          </div>
          <motion.p
            className="text-base md:text-lg text-primary-black font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            Let Us Build the AI System That Books Clients for You — Daily,
            Automatically, and at Scale.
          </motion.p>

          <div className="mt-4 flex items-center gap-2 flex-row">
            <Button
              className="bg-primary-black hover:bg-primary-blue text-white text-base px-4 py-6 transform transition duration-300 hover:scale-90"
              onClick={() => navigate("/contact")}
            >
              Get a price
              <ArrowRight className="text-white h-4" />
            </Button>
            <Button
              className="bg-transparent text-black hover:text-black hover:bg-transparent text-base px-4 py-5 transform transition duration-300 hover:scale-90 border border-black"
              onClick={() => navigate("/solutions")}
            >
              Case studies
            </Button>
          </div>

          <div className="py-7 mt-2 w-full flex justify-center px-2">
            <div className="flex flex-col gap-1">
              <div className="rounded-full w-12 md:w-16 h-12 md:h-16 bg-black">
                <img
                  src="/founderimg.PNG"
                  alt="picture"
                  className="w-12 md:w-16 h-12 md:h-16 object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-black font-semibold text-lg md:text-xl">
                  Samuel A Adebisi
                </h4>
                <p className="text-base text-black font-normal max-w-xs md:max-w-sm leading-snug whitespace-normal">
                  Hi, I'm Samuel — founder of RetenaAI. We build AI systems
                  that help businesses grow faster, work smarter, and close more
                  deals — even in their sleep.
                </p>
                <div className="flex items-center gap-4 mt-6">
                  {/* Avatar group */}
                  <div className="flex -space-x-3">
                    <img
                      src="/assets/shootDemo/shoot1.webp"
                      alt="User 1"
                      className="w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="/assets/shootDemo/shoot13.webp"
                      alt="User 2"
                      className="w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="/assets/shootDemo/shoot7.png"
                      alt="User 3"
                      className="w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="/assets/shootDemo/shoot30.webp"
                      alt="User 4"
                      className="w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-white"
                    />
                    <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold border-2 border-white">
                      +9
                    </div>
                  </div>

                  {/* Trust text */}
                  <div>
                    <p className="text-sm text-black font-medium">
                      Trusted by Founders, Coaches, and Service Providers
                    </p>
                    <p className="text-xs text-gray-600">
                      — from Africa to the Rest of the World. 🌍
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

