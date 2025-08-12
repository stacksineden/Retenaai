import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
import CarouselButtons from "./CarouselButtons";
import { ProgramTypeData } from "@/types";
import GalleryCard from "./GalleryCard";

type SliderProps = {
  key: string;
  modules: any[];
  data: ProgramTypeData[]; 
};

const Slider = ({ key, modules, data }: SliderProps) => {
  return (
    <Swiper
      modules={modules}
      spaceBetween={10}
      slidesPerView={4}
      mousewheel={true}
      freeMode={true}
      watchSlidesProgress={true}
      key={key}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {data &&
        data?.map((card, _i) => (
          <SwiperSlide className="swiper-slide" key={_i}>
            <GalleryCard data={card} /> 
          </SwiperSlide>
        ))}
      <CarouselButtons /> 
    </Swiper>
  );
};

export default Slider;
