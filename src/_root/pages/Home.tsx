import Slider from "@/components/shared/Slider";
import {
  photo_shoot_ideas_data,
} from "@/modelDataset";
import { Images } from "lucide-react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import GalleryCard from "@/components/shared/GalleryCard";

const Home = () => {
  const navigate = useNavigate();

  const trending_styles = photo_shoot_ideas_data?.filter(
    (data) => data.is_trending === true
  );

  return (
    <>
      <div className="h-full">
        <div className="flex h-full w-full flex-col justify-between px-4 md:px-1 pt-9 md:pt-6">
          <div className="max-w-7xl self-center w-full">
            <div className="flex justify-center items-end md:justify-between pr-4 py-4">
              <div className="hidden md:flex flex-col gap-2">
                <p className="text-primary-black text-2xl font-semibold">
                  Photoshoot Gallery
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div 
                  className="p-2 rounded-lg bg-white cursor-pointer"
                  onClick={() => navigate(`/training-dataset`)}
                >
                  <div className="bg-accent py-2 px-3 rounded-lg font-semibold text-sm md:text-base">
                    My Trainings
                  </div>
                </div>
                <div
                  className="bg-primary-blue text-white cursor-pointer flex items-center py-2 px-3 rounded-lg gap-1"
                  onClick={() => navigate(`/photoshoot-gallery`)}
                >
                  <Images className="h-4 text-white " />
                  <div className="font-semibold text-sm md:text-base">
                    My Photoshoots
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="my-3 flex items-center justify-between ml-2">
                <p className="text-primary-black text-xl font-semibold">
                  Trending Styles
                </p>
              </div>
              <Slider
                key="slider1"
                modules={[FreeMode, Mousewheel]}
                data={trending_styles}
              />
            </div>
            <div className="mt-7">
              <div className="my-3 flex items-center justify-between ml-2">
                <p className="text-primary-black text-xl font-semibold">
                  Explore Photoshoot styles
                </p>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 md:mt-[1rem]">
                {photo_shoot_ideas_data &&
                  photo_shoot_ideas_data?.map((item) => (
                    <GalleryCard data={item} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;


