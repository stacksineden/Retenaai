import { useEffect, useRef } from "react";
import CardSkeleton from "@/components/shared/CardSkeleton";
import MasonaryGridLayout from "@/components/shared/MasonaryGridLayout";
import { useUserContext } from "@/context/AuthContext";
import { useGetUserPhotoshoot } from "@/lib/tanstack-query/queriesAndMutation";
import { Ghost, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const PhotoshootGallery = () => {
  const { user } = useUserContext();

  const {
    data: userGenerations,
    isLoading: isImageLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetUserPhotoshoot(user?.id);

  const allDocuments =
    userGenerations?.pages.flatMap((page) => page?.documents ?? []) ?? [];

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      {
        root: null, // Use viewport as the root
        rootMargin: "100px", // Trigger load before reaching the bottom
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentObserverRef = observerRef.current;
    if (currentObserverRef) {
      observer.observe(currentObserverRef);
    }

    return () => {
      if (currentObserverRef) {
        observer.unobserve(currentObserverRef);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

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
        {allDocuments.length === 0 && !isImageLoading && (
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
        <MasonaryGridLayout data={allDocuments} />
        {isImageLoading && <CardSkeleton card_number={10} />}
        {isFetchingNextPage && (
          <div className="w-full my-1 flex justify-center items-center">
            <Loader2 className="h-8 w-8 text-primary-black" />
          </div>
        )}
        <div ref={observerRef} style={{ height: "1px" }} />
      </div>
    </div>
  );
};

export default PhotoshootGallery;
