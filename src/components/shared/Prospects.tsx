import { useUserContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { genai_program } from "@/modelDataset";

const Prospects = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();

  const program = genai_program[0];

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

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-6xl bg-white shadow-lg rounded-2xl p-8 space-y-8"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <img
                src={"/assets/genai.webp"}
                alt={"prgram"}
                className="w-40 h-40 object-cover rounded-xl hidden md:inline-block"
              />
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {program.program_name}
                </h2>
                <p className="text-gray-600 mt-2 max-w-2xl">
                  A 12-week immersive journey into AI literacy, prompt
                  engineering, workflow design, and real-world specialisations.
                  Choose your track — Systems Integration, Consulting, Agents,
                  Programming, or Product Development — and graduate with a
                  portfolio-ready capstone project.
                </p>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
              <div>
                <strong>Start Date:</strong> {program.cohort_start_date}
              </div>
              <div>
                <strong>Program Length:</strong> {program.cohort_duration}
              </div>
              <div>
                <strong>Format:</strong> Online / Live Classes
              </div>
            </div>

            {/* Tracks Preview */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Specialisation Tracks
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Systems Integration & Automation",
                  "AI Strategy & Consulting",
                  "AI Agent Development",
                  "Generative AI Programming",
                  "AI Product Development (No-Code SaaS)",
                ].map((track, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-800">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    {track}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex justify-start">
              <Button
                onClick={() => navigate(`/billing?program=${program.slug}`)}
                className="bg-[#000000] hover:bg-[#e5940a] text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2"
              >
                <Sparkles className="h-5 w-5" /> Apply Now
              </Button>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Prospects;
