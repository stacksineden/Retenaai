import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { FluxStylesData } from "@/types";
import { useNavigate } from "react-router-dom";

const ToolsCard = ({ data }: { data: FluxStylesData }) => {
  const navigate = useNavigate();
  return (
    <div className="group block w-full">
      <div className="bg-white rounded-2xl cursor-pointer overflow-hidden flex flex-col aspect-[270/300] md:aspect-[270/340] gap-2 pb-4 transition-all duration-200 group-hover:-translate-y-2">
        <div className="relative aspect-[270/200] overflow-hidden bg-accent">
          <img
            src={data?.images[0]}
            alt="toolsimage"
            loading="lazy"
            className="w-full h-full object-cover rounded-t-2xl"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2 px-2">
            <h3 className="text-primary-black font-semibold text-base">
              {data?.title}
            </h3>
            <p className="text-primary-black line-clamp-2 text-xs/[18px]">
              {data?.text}
            </p>
          </div>

          <div className="flex justify-end items-center px-4">
            <Button className="bg-accent hover:bg-primary-blue text-primary-black hover:text-white text-sm px-4 py-2 transform transition duration-300 hover:scale-90"
             onClick={() =>
              navigate(`${data?.url}`)
            }>
              Try Now
              <ArrowRight className="text-primary-black hover:text-white h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;
