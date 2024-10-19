import { getTrainingDetails } from "@/lib/utils";
import { Models } from "appwrite";
import { format } from "date-fns";

const TrainingCard = ({ data }: { data: Models.Document | undefined }) => {
  const statusDetails = getTrainingDetails(data?.trainingStatus ?? "");

  return (
    <div className="group block w-full">
      <div className="bg-white rounded-2xl cursor-pointer overflow-hidden flex flex-col aspect-[270/340] gap-2 pb-4 transition-all duration-200 group-hover:-translate-y-2">
        <div className="relative aspect-[270/200] overflow-hidden bg-accent">
          <img
            src={
              data?.images[0] ?? "/assets/psedo-generations/chibsky-style.jpg"
            }
            alt="toolsimage"
            loading="lazy"
            className="w-full h-full object-cover rounded-t-2xl"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2 px-2">
            <h3 className="text-primary-black font-semibold text-base">
              {data?.triggerWord}
            </h3>
            <div className="flex items-center gap-1">
              <p
                className={`text-primary-black line-clamp-2 text-sm font-semibold uppercase`}
              >
                {statusDetails?.name}
              </p>
              <div
                className={`h-4 w-4 bg-black rounded-full ${
                  data?.trainingStatus !== "photoshoot_ready" && "animate-pulse"
                }`}
                style={{ backgroundColor: statusDetails?.color }}
              ></div>
            </div>
            <div className="mt-1">
              <p className="text-sm opacity-70 font-medium text-primary-blue">
                Shoot style: {`${data?.PrimaryStyle}`}
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center gap-1 px-2">
            {data?.trainingStatus === "photoshoot_ready" && (
              <div
                className="bg-primary-blue text-white text-sm px-4 py-2 transform transition duration-300 hover:scale-90 rounded-md font-semibold"
                onClick={() => (window.location.href = "/photo-gallery")}
              >
                See Photos
              </div>
            )}
            <div className="text-primary-black hover:text-white text-sm transform transition duration-300 hover:scale-90 font-medium">
              {format(new Date(data?.$createdAt!), "dd MMM yyyy")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;
