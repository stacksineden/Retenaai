import CardSkeleton from "@/components/shared/CardSkeleton";
import MasonaryGridLayout from "@/components/shared/MasonaryGridLayout";
import { useUserContext } from "@/context/AuthContext";
import { useGetUserPhotoshoot } from "@/lib/tanstack-query/queriesAndMutation";
import { Ghost } from "lucide-react";
import { Link } from "react-router-dom";

const PhotoshootGallery = () => {
  const { user } = useUserContext();

  const { data: userGenerations, isPending: isImageLoading } =
    useGetUserPhotoshoot(user?.id);

  return (
    <div className="container py-4 mt-6 md:mt-0">
      <div className="w-full flex flex-col gap-2 my-3">
        <h2 className="text-primary-black text-2xl md:text-4xl font-semibold">
          My Photoshoots
        </h2>
        <p className="text-primary-blue3 text-sm md:text-base pl-2">
          Check out your generated photoshoots here
        </p>
      </div>
      <div className="bg-white">
        {userGenerations?.documents?.length == 0 && (
          <div className="mt-20 flex flex-col items-center gap-2 justify-center py-10">
            <Ghost className="h-8 w-8 text-primary-black" />
            <h3 className="font-semibold text-xl text-primary-black">
              Pretty empty around here
            </h3>
            <p className="text-primary-black">
              Let&apos;s{" "}
              <Link to={"/lora-gallery"} className="text-primary-blue">
                create
              </Link>{" "}
              your first photoshoot
            </p>
          </div>
        )}
        {/* <ParallaxScroll images={images} /> */}
        <MasonaryGridLayout data={userGenerations?.documents ?? []} />
        {isImageLoading && <CardSkeleton card_number={10} />}
      </div>
    </div>
  );
};

export default PhotoshootGallery;
