import DemoVideo from "@/components/shared/DemoVideo";
import WebLayoutWrapper from "@/components/shared/WebLayoutWrapper";
import { Button } from "@/components/ui/button";
import { case_studies } from "@/modelDataset";
import { ArrowRight } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

const CaseStudy = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const caseData = searchParams.get("system");
  const caseStudyData = case_studies?.filter(
    (system) => system.slug === caseData
  )[0];

  return (
    <WebLayoutWrapper>
      <div className="container w-full">
        <div className="py-6">
          <h2 className="font-semibold text-primary-black text-2xl md:text-3xl">
            {caseStudyData?.desc ?? " 🎯 Personalized Deep Outreach System"}
          </h2>
        </div>
        <div className="py-1 flex flex-col gap-4">
          <p className="text-lg md:text-xl font-semibold text-[#FCA311]">
            {caseStudyData?.lead_magnet ??
              "If you're still manually chasing leads, you're already behind. Retena LeadPilot is your AI-powered outreach engine — it finds leads, personalizes every message, handles replies, and books calls on autopilot. More qualified leads. Less grind. Zero excuses."}
          </p>
          <Button
            className="bg-primary-black hover:bg-primary-blue text-white text-base px-4 py-6 transform transition duration-300 hover:scale-90 w-[170px]"
            onClick={() => navigate("/contact")}
          >
            Get a price
            <ArrowRight className="text-white h-4" />
          </Button>
        </div>
        {caseStudyData?.slug === "studiogen" && <DemoVideo />}

        <div className="py-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-semibold text-primary-black">
              📌 Project Background
            </h3>
            <p className="text-base text-primary-black">
              {caseStudyData?.background ?? ""}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-semibold text-primary-black">
              ⚠️ Challenges
            </h3>
            <p className="text-base text-primary-black">
              {caseStudyData?.challenges_title}
            </p>
            <ul className="list-disc pl-6 text-base text-primary-black space-y-1 font-medium">
              {caseStudyData?.challenges?.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
            <p className="text-base text-primary-black">
              {caseStudyData?.challenges_footer ?? ""}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-semibold text-primary-black">
              🛠️ Solution
            </h3>
            <p className="text-base text-primary-black">
              {caseStudyData?.solution_title ?? ""}
            </p>
            <ul className="list-disc pl-6 text-base text-primary-black space-y-1">
              {caseStudyData?.solution?.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
            <p className="text-base text-primary-black">
              {caseStudyData?.challenges_footer ?? ""}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-semibold text-primary-black">
              🔍 Key Features & Functionality
            </h3>

            <ul className="list-disc pl-6 text-base text-primary-black space-y-1 font-medium">
              <li>
                Smart lead finder: Crawls databases and public web for
                up-to-date B2B leads.
              </li>
              <li>
                Deep personalization engine: Tailors messaging based on company
                news, job titles, and context.
              </li>
              <li>
                Icebreaker generation using NLP — tailored to each contact.
              </li>
              <li>
                Natural language icebreakers: Crafted to sound like they came
                from the sender — not ChatGPT.
              </li>
              <li>
                Reply handling AI: Filters real replies from
                out-of-office/autoresponders and responds accordingly.
              </li>
              <li>
                Autonomous appointment setter: Engages and books calls into your
                calendar.
              </li>
              <li>
                Performance dashboard: Tracks open, reply, and conversion rates
                in real-time.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-semibold text-primary-black">
              📊 Results & Impact
            </h3>
            <p className="text-base text-primary-black">
              {caseStudyData?.results_title ?? ""}
            </p>
            <ul className="list-disc pl-6 text-base text-primary-black space-y-1 font-medium">
              {caseStudyData?.results?.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-semibold text-primary-black">
              📚 Lessons Learned
            </h3>
            <p className="text-base text-primary-black">
              {caseStudyData?.lessons_title ?? ""}
            </p>
            <ul className="list-disc pl-6 text-base text-primary-black space-y-1 font-medium">
              {caseStudyData?.lessons?.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-semibold text-primary-black">
              ✅ Conclusion
            </h3>
            <p className="text-base text-primary-black">
              {caseStudyData?.conclusion ?? ""}
            </p>
          </div>
        </div>
      </div>
    </WebLayoutWrapper>
  );
};

export default CaseStudy;
