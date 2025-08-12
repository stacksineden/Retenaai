import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { ProgramTypeData } from "@/types";
import { useNavigate } from "react-router-dom";


const GalleryCard = ({ data }: { data: ProgramTypeData }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-start group transition-colors rounded-md cursor-pointer group-hover:border-neutral-700 group-hover:shadow-neutral-100 pb-[82%] relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute pointer-events-none select-none inset-0 transition-all duration-300 bg-cover bg-center group-hover:scale-110"
        style={{
          backgroundImage: `url(${data?.image ?? "/assets/genai.webp"})`,
        }}
      ></div>

      {/* Background Overlay */}
      <div className="absolute inset-0 pointer-events-none select-none bg-cover bg-center bg-black/30 transition-all duration-300 group-hover:bg-transparent"></div>

      {/* Content Layer */}
      <div className="absolute w-full flex flex-col bottom-0 bg-gradient-to-t from-black to-transparent transition-all group-hover:from-transparent duration-300 pt-12 pb-4 px-4 overflow-hidden text-ellipsis text-left">
        <div className="w-full text-white text-lg font-bold relative left-0 group-hover:left-10 opacity-100 group-hover:opacity-0 transition-all">
          {data?.name}
        </div>
        <div className="w-full text-white text-sm font-normal relative left-0 group-hover:left-10 opacity-100 group-hover:opacity-0 transition-all">
          {data?.description ?? "__ __"}
        </div>
        <Button
          type="submit"
          className="flex flex-row items-center gap-2 mt-4 w-fit px-2 py-1 text-sm font-semibold rounded backdrop-blur-sm bg-primary-black border border-none text-white transition-colors hover:text-white hover:bg-primary-blue"
          onClick={() => {
            navigate(`/billing`);
          }}
        >
          Apply
          <ChevronRight className="text-white h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default GalleryCard;
