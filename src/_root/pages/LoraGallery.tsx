import { flux_styles_data } from "@/modelDataset";
import { FreeMode, Mousewheel } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { Diamond } from "lucide-react";

import LoraSlider from "@/components/shared/LoraSlider";

const LoraGallery = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-full">
        <div className="flex h-full w-full flex-col justify-between px-4 md:px-1 pt-9 md:pt-6">
          <div className="max-w-7xl self-center w-full">
            <div className="flex justify-center items-end md:justify-between pr-4 py-4">
              <div className="hidden md:flex flex-col gap-2">
                <p className="text-primary-black text-2xl font-semibold">
                  Explore Tools
                </p>
              </div>

              <div className="flex items-center gap-1">
                <div
                  className="p-2 rounded-lg bg-white cursor-pointer"
                  onClick={() => navigate(`/app`)}
                >
                  <div className="bg-accent py-2 px-3 rounded-lg font-semibold text-sm md:text-base">
                    Try Photoshoot
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-white cursor-pointer flex items-center gap-3">
                  <div className="p-2 bg-accent flex items-center gap-1">
                    <Diamond className="h-4 w-4 text-primary-blue3" />
                  </div>
                  <div
                    className="bg-primary-blue py-2 px-3 rounded-lg font-semibold text-white text-sm md:text-base"
                    onClick={() => navigate("/credits-billing")}
                  >
                    Buy credits
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-7">
              <div className="my-3 flex items-center justify-between ml-2">
                <p className="text-primary-black text-xl font-semibold">
                  Styles for you
                </p>
              </div>
              <LoraSlider
                key="slider1"
                modules={[FreeMode, Mousewheel]}
                data={flux_styles_data}
              />
            </div>
            <div className="mt-7">
              <div className="my-3 flex items-center justify-between ml-2">
                <p className="text-primary-black text-xl font-semibold">
                  Mini Apps
                </p>
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-4 md:gap-5 px-1 md:px-3 space-y-4 md:space-y-0"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoraGallery;
