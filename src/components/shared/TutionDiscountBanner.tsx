import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const TuitionDiscountBanner: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-50">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between px-4 md:px-8 py-3 bg-[#14213D] text-white shadow-lg"
      >
        <p className="text-sm md:text-base font-medium text-center md:text-left">
          🎉{" "}
          <span className="font-bold text-[#FCA311]">50% Tuition Slash! </span>
          Invest in your AI career today — this limited-time offer helps you
          secure your spot and start building the future of AI systems.
        </p>
        <Button
          className="bg-[#FCA311] text-[#14213D] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-300 transition"
          onClick={() => navigate("/sign-up")}
        >
          Apply Now →
        </Button>
      </motion.div>
    </div>
  );
};

export default TuitionDiscountBanner;
