import { motion } from "framer-motion";
import { Download, FileText, Video, Info } from "lucide-react";
import { useUserContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import studykit from "../../resources/Cohort 2  Home Study Kit.pdf";
import questions from "../../resources/Cohort 2 Practice & Assessment Questions.pdf";

const StudyKits = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  type StudyKitType = "pdf" | "video";

  const studyKitItems: {
    title: string;
    description: string;
    type: StudyKitType;
    link: string;
  }[] = [
    {
      title: "Study Kit PDF",
      description: "Comprehensive outline of your learning journey.",
      type: "pdf",
      link: studykit,
    },
    {
      title: "Assessment Overview",
      description: "What to expect in the upcoming evaluation.",
      type: "pdf",
      link: questions,
    },
    {
      title: "Sample Video Lesson",
      description: "A sneak peek into our live class recordings.",
      type: "video",
      link: "https://www.loom.com/share/e3d2340bc632480b85e82b65621cc34d",
    },
  ];

  const iconMap: Record<StudyKitType, JSX.Element> = {
    pdf: <FileText className="text-[#FCA311]" />,
    video: <Video className="text-[#FCA311]" />,
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
              {/* <div
                className="bg-primary-blue text-white cursor-pointer flex items-center py-2 px-3 rounded-lg gap-1"
                onClick={() => navigate(`/photoshoot-gallery`)}
              >
                <Images className="h-4 text-white" />
                <div className="font-semibold text-sm md:text-base">
                  My Photoshoots
                </div>
              </div> */}
            </div>
          </div>
          <div className=" bg-[#F9FAFB] py-10 px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-primary-black mb-2">
                  📘 Your Study Kit
                </h1>
                <p className="text-gray-600 text-base max-w-xl">
                  Get prepared for your assessment with downloadable resources
                  below. Access them anytime and study at your own pace.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {studyKitItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm p-5 flex flex-col items-start gap-3 hover:shadow-md transition-all"
                  >
                    <div className="text-primary-blue">
                      {" "}
                      {iconMap[item.type]}
                    </div>
                    <h3 className="text-lg font-semibold text-primary-black">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      download
                      className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary-blue hover:underline"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-12 bg-white border border-[#E4E4E7] rounded-xl p-6 flex items-start gap-4"
              >
                <Info className="text-[#FCA311] h-6 w-6 mt-1" />
                <p className="text-sm text-gray-700 leading-6">
                  If you're having trouble accessing your materials, please
                  contact support or try downloading using a different browser
                  or device.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyKits;
