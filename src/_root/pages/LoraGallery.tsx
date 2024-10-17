import GalleryCard from "@/components/shared/GalleryCard";
import { photo_shoot_ideas_data } from "@/modelDataset";

const LoraGallery = () => {
  return (
    <div className="container py-4 mt-6 md:mt-0">
      <div className="w-full flex flex-col gap-2 my-3">
        <h2 className="text-primary-black text-2xl md:text-4xl font-semibold">
          Photoshoot Gallery
        </h2>
        <p className="text-primary-blue3 text-base pl-2">
          Explore our diverse collection of photoshoot styles, each designed to
          offer a unique and personalized look.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 md:mt-[1rem]">
        {photo_shoot_ideas_data &&
          photo_shoot_ideas_data?.map((item) => <GalleryCard data={item} />)}
      </div>
    </div>
  );
};

export default LoraGallery;
