import { useUserContext } from "@/context/AuthContext";
import { assessments } from "@/modelDataset"; // new dataset for assessments
import { motion } from "framer-motion";
import { FileText, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Assessments = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();

  const handleOpenAssessment = (link: string, disabled: boolean) => {
    if (!disabled) {
    if (link.startsWith("http")) {
      // external link (Google Form etc.)
      window.open(link, "_blank"); // opens in new tab
      // or use window.location.href = link; // if you want same tab
    } else {
      // internal app route
      navigate(link);
    }
  }
  };

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

          <div className="bg-[#F9FAFB] py-10 px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-primary-black mb-2">
                  📝 Assessments
                </h1>
                <p className="text-gray-600 text-base max-w-xl">
                  Click an available assessment to get started. Locked
                  assessments will unlock as you progress through modules.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {assessments.map((assessment) => (
                  <div
                    key={assessment.id}
                    className={`relative bg-white rounded-xl shadow-sm p-5 flex flex-col items-start gap-3 transition-all ${
                      assessment.disabled
                        ? "opacity-60 cursor-not-allowed"
                        : "hover:shadow-md cursor-pointer"
                    }`}
                    onClick={() =>
                      handleOpenAssessment(assessment.link, assessment.disabled)
                    }
                  >
                    <FileText className="text-[#FCA311]" />
                    <h3 className="text-lg font-semibold text-primary-black">
                      {assessment.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {assessment.description}
                    </p>

                    {assessment.disabled && (
                      <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center rounded-xl">
                        <Lock className="text-gray-700 h-10 w-10" />
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessments;