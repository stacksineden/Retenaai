import { useUserContext } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Calendar, Info, BookOpen, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";

const Applied = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();

  return (
    <div className="h-full">
      <div className="flex h-full w-full flex-col justify-between px-4 md:px-1 pt-9 md:pt-6 overflow-y-scroll">
        <div className="max-w-7xl self-center w-full">
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

          <div className="w-full px-6 md:px-12 py-10 bg-white mt-4 md:mt-0">
            {/* Hero Section */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full hidden md:inline-block">
                <img
                  src="/assets/congrats.webp"
                  alt="Congratulations"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text */}
              <div className="md:w-1/2 w-full p-8">
                <h1 className="text-3xl font-bold text-primary-black mb-2">
                  You’re In! 🎉
                </h1>
                <p className="text-gray-700 text-lg mb-6">
                  Your application for{" "}
                  <span className="font-semibold">
                    {user?.program ?? "__ __"}
                  </span>{" "}
                  has been confirmed. Your spot is secured, and your journey is
                  about to begin!
                </p>
                <Button
                  className="bg-primary-blue hover:bg-primary-blue2 text-white px-6 py-3 rounded-xl font-semibold transition"
                  onClick={() => navigate("/study-kits")}
                >
                  Download Study Kit
                </Button>
              </div>
            </motion.div>

            {/* What Happens Next */}
            <motion.section
              className="mt-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold text-primary-black mb-6">
                What Happens Next?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
                  <BookOpen className="h-10 w-10 text-primary-blue mb-3" />
                  <h3 className="font-semibold text-lg mb-2">
                    1. Download Study Kit
                  </h3>
                  <p className="text-gray-600">
                    Get access to your preparation materials and sample
                    questions.
                  </p>
                </div>
                <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
                  <Calendar className="h-10 w-10 text-primary-blue mb-3" />
                  <h3 className="font-semibold text-lg mb-2">
                    2. Assessment Date
                  </h3>
                  <p className="text-gray-600">
                    We’ll notify you soon about your assessment date via email
                    and here in your dashboard.
                  </p>
                </div>
                <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
                  <Info className="h-10 w-10 text-primary-blue mb-3" />
                  <h3 className="font-semibold text-lg mb-2">
                    3. Prepare for Success
                  </h3>
                  <p className="text-gray-600">
                    Study thoroughly and join our learner community for
                    discussions.
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
                  "Application fee is non-refundable.",
                  "Payment confirms your interest and locks your seat.",
                  "You will receive a confirmation email immediately.",
                  "If you do not receive your Study Kit in 24 hours, contact support.",
                ].map((text, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 font-medium"
                  >
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

export default Applied;
