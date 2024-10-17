import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwiper } from "swiper/react";

const CarouselButtons = () => {
  const swiper = useSwiper();
  return (
    <>
      <div
        className="hidden lg:flex items-center justify-between absolute top-0 left-0 text-zinc-100 z-40 h-full bg-accent cursor-pointer p-4 opacity-30"
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeft className="text-primary-black h-7 w-7 bg-white rounded-full p-1" />
      </div>
      <div
        className="hidden lg:flex items-center justify-between absolute top-0 right-0 text-zinc-100 z-40 h-full bg-accent cursor-pointer p-4 opacity-30"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRight className="text-primary-black h-7 w-7 bg-white rounded-full p-1" />
      </div>
    </>
  );
};

export default CarouselButtons;
