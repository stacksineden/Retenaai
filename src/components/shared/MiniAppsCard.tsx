import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { getTrainingDetails } from "@/lib/utils";
import { Models } from "appwrite";
import { useAppContext } from "@/context/AppContext";

const MiniAppsCard = ({ data }: { data: Models.Document | undefined }) => {
  const navigate = useNavigate();

  const { setTrainingUrl } = useAppContext();
  const statusDetails = getTrainingDetails(data?.trainingStatus ?? "");

  return (
    <div className="group block w-full">
      <div className="bg-white rounded-2xl cursor-pointer overflow-hidden flex flex-col aspect-[270/300] md:aspect-[270/380] gap-2 pb-4 transition-all duration-200 group-hover:-translate-y-2">
        <div className="relative aspect-[270/250] overflow-hidden bg-accent">
          <img
            src={data?.images[0]}
            alt="toolsimage"
            loading="lazy"
            className="w-full h-full object-cover rounded-t-2xl"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2 px-2">
            <h3 className="text-primary-black font-semibold text-base">
              {data?.triggerWord ?? "__ __"}
            </h3>
            <div className="flex items-center gap-1">
              <p className="text-primary-black line-clamp-2 text-sm font-medium">
                {`Status: ${statusDetails?.name}`}
              </p>
              <div
                className={`h-4 w-4 bg-black rounded-full ${
                  data?.trainingStatus === "photoshoot_ready" ||
                  data?.trainingStatus === "invalid_ref_code"
                    ? ""
                    : "animate-pulse"
                }`}
                style={{ backgroundColor: statusDetails?.color }}
              ></div>
            </div>

            <div className="ml-1">
              <p className="text-sm opacity-70 font-medium text-primary-blue">
                Shoot style: {`${data?.PrimaryStyle}`}
              </p>
            </div>

            <div className="text-primary-black text-sm font-medium">
              {data?.data_created}
            </div>
          </div>

          {data?.trainingStatus === "photoshoot_ready" && (
            <div className="flex justify-end items-center px-4">
              <Button
                className="bg-accent hover:bg-primary-blue text-primary-black hover:text-white text-sm px-4 py-2 transform transition duration-300 hover:scale-90"
                onClick={() => (window.location.href = "/photoshoot-gallery")}
              >
                See Photos
                <ArrowRight className="text-primary-black hover:text-white h-5" />
              </Button>
            </div>
          )}
          {data?.url && (
            <div className="flex justify-end items-center px-4">
              <Button
                className="bg-accent hover:bg-primary-blue text-primary-black hover:text-white text-sm px-4 py-2 transform transition duration-300 hover:scale-90"
                onClick={() => {
                  setTrainingUrl(data?.url);
                  navigate(`/generations-image?mode=${data?.triggerWord}`);
                }}
              >
                Generate Image
                <ArrowRight className="text-primary-black hover:text-white h-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiniAppsCard;
