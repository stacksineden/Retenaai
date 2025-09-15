import { useUserContext } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  BookOpen,
  CheckCircle,
  PlayCircle,
} from "lucide-react";
import { Button } from "../ui/button";

const Fusion = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();

  return (
    <div className="h-full">
      <div className="flex h-full w-full flex-col justify-between px-4 md:px-1 pt-9 md:pt-6 overflow-y-scroll">
        <div className="max-w-7xl self-center w-full">
          {/* Header */}
          <div className="flex justify-center flex-col md:flex-row items-start md:items-end md:justify-between pr-4 pt-4 pb-0 md:pb-4">
            <div className="flex flex-col gap-2">
              <p className="text-primary-black text-2xl font-semibold">
                {`Welcome 👋 ${user?.name?.split(" ")[1] ?? "__ __"}`}
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <div
                className="p-2 rounded-lg bg-white cursor-pointer"
                onClick={() => navigate(`/app`)}
              >
                <div className="bg-accent py-2 px-3 rounded-lg flex items-center gap-2">
                  <img
                    src={user?.imageUrl ?? ""}
                    alt="profile"
                    className="h-7 w-7 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-sm md:text-base">
                      {user?.email}
                    </p>
                    <p className="text-xs md:text-sm text-primary-black">
                      Stage:{" "}
                      <span className="text-[#FCA311] font-semibold uppercase">
                        {user?.stage ?? "__ __"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Section */}
          <div className="w-full px-6 md:px-12 py-10 bg-white mt-4 md:mt-0">
            {/* Hero Section */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Illustration */}
              <div className="md:w-1/2 w-full hidden md:block">
                <img
                  src="/assets/fusion.webp"
                  alt="Fusion Phase"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 w-full p-6 md:p-10">
                <h1 className="text-3xl font-bold text-primary-black mb-2">
                  Welcome to the Bootcamp 🎉
                </h1>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  You’re officially kicking off the{" "}
                  <span className="font-semibold">
                    {user?.program ?? "Generative AI Engineering"}
                  </span>{" "}
                  journey! Today you start the <strong>Fusion Phase</strong> —
                  your launchpad into Generative AI, prompt engineering, and
                  workflow thinking.
                </p>
               <div className="flex flex-col md:flex-row gap-4">
                 <Button
                  className="bg-primary-blue hover:bg-primary-blue2 text-white px-6 py-3 rounded-xl font-semibold transition"
                  onClick={() => navigate("/modules")}
                >
                  Start Learning
                </Button>
                <Button
                  className="bg-primary-blue hover:bg-primary-blue2 text-white px-6 py-3 rounded-xl font-semibold transition"
                  onClick={() => navigate("/program-resources")}
                >
                  Access Orientation Pack
                </Button>
               </div>
              </div>
            </motion.div>

            {/* Getting Started */}
            <motion.section
              className="mt-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold text-primary-black mb-6">
                Let’s Get Started 🚀
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
                  <PlayCircle className="h-10 w-10 text-primary-blue mb-3" />
                  <h3 className="font-semibold text-lg mb-2">
                    1. Begin Your Fusion Phase
                  </h3>
                  <p className="text-gray-600">
                    Start with <strong>Module 1</strong>: Introduction to
                    Generative AI. Learn the fundamentals that power today’s AI
                    systems.
                  </p>
                </div>

                <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
                  <BookOpen className="h-10 w-10 text-primary-blue mb-3" />
                  <h3 className="font-semibold text-lg mb-2">
                    2. Review Your Orientation Pack
                  </h3>
                  <p className="text-gray-600">
                    Open your Orientation Pack to explore the curriculum,
                    deadlines, and all you need for a smooth start.
                  </p>
                </div>

                <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
                  <Calendar className="h-10 w-10 text-primary-blue mb-3" />
                  <h3 className="font-semibold text-lg mb-2">
                    3. Prep for Live Sessions
                  </h3>
                  <p className="text-gray-600">
                    Mark your calendar for workshops and interactive labs — they
                    begin soon after you complete your first modules.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Important Notes */}
            <section className="mt-12 bg-[#F5F7FA] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-primary-black mb-4">
                ❗ Important Notes
              </h2>
              <ul className="space-y-3 text-gray-700 pl-0">
                {[
                  "Complete the Scrum Fundamentals course before attending collaborative sessions.",
                  "Follow the Fusion Phase roadmap in your dashboard; modules unlock as you progress.",
                  "Check announcements regularly for updates and live session links.",
                  "Contact support anytime you face access or content issues.",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2 font-medium">
                    <CheckCircle className="text-[#FCA311] h-5 w-5 mt-0.5 shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fusion;
