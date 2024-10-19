import CardSkeleton from "@/components/shared/CardSkeleton";
import TrainingCard from "@/components/shared/TrainingCard";
import { useUserContext } from "@/context/AuthContext";
import { useGetUserTrainingData } from "@/lib/tanstack-query/queriesAndMutation";
import { Ghost } from "lucide-react";


const TrainingDatasets = () => {
  const { user } = useUserContext();
  const { data: trainingDataset, isPending: isFetchingData } =
    useGetUserTrainingData(user?.id);
  return (
    <div className="container py-4 mt-6 md:mt-0">
      <div className="w-full flex flex-col gap-2 my-3">
        <h2 className="text-primary-black text-2xl md:text-4xl font-semibold">
          My Trainings
        </h2>
        <p className="text-primary-blue3 text-sm md:text-base pl-2">
          Check out the status of your lora trainings here
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-4 md:gap-5 px-1 md:px-3">
        {trainingDataset?.documents &&
        trainingDataset?.documents.length !== 0 ? (
          trainingDataset.documents
            .sort(
              (a, b) =>
                new Date(b.$createdAt).getTime() -
                new Date(a.$createdAt).getTime()
            )
            .map((data, _i) => <TrainingCard data={data} key={_i} />)
        ) : isFetchingData ? (
          <CardSkeleton card_number={10} />
        ) : (
          <div className="mt-16 flex flex-col items-center gap-2">
            <Ghost className="h-8 w-8 text-primary-black" />
            <h3 className="font-semibold text-xl text-primary-black">
              Pretty empty around here
            </h3>
            <p className="text-primary-black">
              Let&apos;s create your first Lora.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainingDatasets;
