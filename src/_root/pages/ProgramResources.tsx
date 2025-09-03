import { motion } from "framer-motion";
import { Download, FileText, Link, Info } from "lucide-react";
import { useUserContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import Handbook from "../../resources/RetenaAI COHORT 2 Trainee Handbook .pdf";
import BrochureIntergration from "../../resources/RetenaAI AI SYSTEM INTEGRATION CURRICULUM.pdf";
import BrochureStrategy from "../../resources/RetenaAI AI AI STRATEGY AND CONSULTING CURRICULUM.pdf";

const ProgramResources = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  type ResourceType = "pdf" | "link";


  const orientationItems: {
    title: string;
    description: string;
    type: ResourceType;
    link: string;
  }[] = [
    {
      title: "Training Handbook",
      description:
        "Your detailed handbook containing program guidelines, schedules, and requirements.",
      type: "pdf",
      link: Handbook,
    },
    {
      title: "Program Brochure",
      description:
        "A comprehensive overview of your program structure and key milestones.",
      type: "pdf",
      link:
        user?.programId === "systems_intergration"
          ? BrochureIntergration
          : BrochureStrategy,
    },
    {
      title: "Scrum Fundamentals Access",
      description:
        "Start your Scrum Fundamentals course — a prerequisite for your interactive sessions.",
      type: "link",
      link: "https://www.scrumstudy.com/account/register", 
    },
  ];

  const iconMap: Record<ResourceType, JSX.Element> = {
    pdf: <FileText className="text-[#FCA311]" />,
    link: <Link className="text-[#FCA311]" />,
  };

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

          {/* Content Section */}
          <div className=" bg-[#F9FAFB] py-10 px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-primary-black mb-2">
                  🎓 Orientation Materials
                </h1>
                <p className="text-gray-600 text-base max-w-xl">
                  Access all the essential resources to get started with your
                  program. Review them carefully and complete the Scrum
                  Fundamentals course before your interactive sessions begin.
                </p>
              </div>

              {/* Resource Items */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {orientationItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm p-5 flex flex-col items-start gap-3 hover:shadow-md transition-all"
                  >
                    <div className="text-primary-blue">
                      {iconMap[item.type]}
                    </div>
                    <h3 className="text-lg font-semibold text-primary-black">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary-blue hover:underline"
                      {...(item.type === "pdf" ? { download: true } : {})}
                    >
                      <Download className="h-4 w-4" />
                      {item.type === "pdf" ? "Download" : "Access"}
                    </a>
                  </div>
                ))}
              </motion.div>

              {/* Info Section */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-12 bg-white border border-[#E4E4E7] rounded-xl p-6 flex items-start gap-4"
              >
                <Info className="text-[#FCA311] h-6 w-6 mt-1" />
                <p className="text-sm text-gray-700 leading-6">
                  Make sure you complete the Scrum Fundamentals course before
                  your first live session. For any access issues, contact the
                  support team or try a different browser.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramResources;

// ProgramResources
