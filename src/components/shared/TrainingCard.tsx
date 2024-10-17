import { Models } from "appwrite";
import { format } from "date-fns";

const TrainingCard = ({ data }: { data: Models.Document | undefined }) => {
  console.log(data?.images[0]);
  return (
    <div className="group block w-full">
      <div className="bg-white rounded-2xl cursor-pointer overflow-hidden flex flex-col aspect-[270/340] gap-2 pb-4 transition-all duration-200 group-hover:-translate-y-2">
        <div className="relative aspect-[270/200] overflow-hidden bg-accent">
          <img
            src={data?.images[0] ?? "/assets/psedo-generations/chibsky-style.jpg"}
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
            <p className={`text-primary-black line-clamp-2 text-xs/[18px]`}>
              {data?.trainingStatus}
            </p>
          </div>

          <div className="flex justify-end items-center px-4">
            <div className="bg-accent hover:bg-primary-blue text-primary-black hover:text-white text-sm px-4 py-2 transform transition duration-300 hover:scale-90">
              {format(new Date(data?.$createdAt!), "dd MMM yyyy")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;
