import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type CtaCardProps = {
  title: ReactNode | string;
  description: ReactNode | string;
  buttonTextA: string;
  buttonTextB: string;
  buttonAction?: () => void;
  imageSrc?: string;
  ctaUrl: string;
  ctaAltUrl: string;
};

const AcademyHero = ({
  title,
  description,
  buttonTextA,
  buttonTextB,
  // buttonAction,
  imageSrc,
  ctaUrl,
  ctaAltUrl,
}: CtaCardProps) => {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-12 px-4">
      <motion.div
        className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={
              imageSrc ||
              "https://cdn.pixabay.com/photo/2024/05/22/20/18/photo-8781624_1280.jpg"
            }
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay Content */}
        <motion.div
          className="relative z-0 bg-black/20  px-6 py-10 md:px-8 md:py-16 lg:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          <motion.div className="space-y-6">
            <motion.h1
              className="text-3xl lg:text-6xl font-bold text-[#FFFFFF]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {title ?? ""}
            </motion.h1>

            <motion.div
              className="bg-primary-black text-white rounded-2xl p-6 max-w-md space-y-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <p className="text-sm md:text-base">{description ?? ""}</p>

              <div className="flex justify-start gap-2 flex-col md:flex-row">
                <Button
                  className="bg-[#E5E5E5] border-[1.5px] border-[#E5E5E5] hover:bg-primary-blue text-primary-black hover:text-white text-sm px-2 md:px-4 py-2 md:py-4 transform transition duration-300 hover:scale-90 mt"
                  onClick={() => navigate(ctaAltUrl)}
                >
                  {buttonTextA ?? "Get Started"}
                  {/* <ArrowRight className="text-white h-4" /> */}
                </Button>
                <Button
                  className="bg-transparent border-[1.5px] border-[#E5E5E5] hover:bg-primary-blue text-white text-sm px-2 md:px-4 py-2 md:py-4 transform transition duration-300 hover:scale-90 mt"
                  onClick={() => navigate(ctaUrl)}
                >
                  {buttonTextB ?? "Get Started"}
                  <ArrowRight className="text-white h-4" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AcademyHero;
