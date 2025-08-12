import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { ProgramTypeData } from "@/types";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

const ProductDemoCard = ({ data }: { data: ProgramTypeData }) => {
  const navigate = useNavigate();
  const isDisabled = data.disabled;
  return (
    <div className="group block w-full relative overflow-hidden rounded-2xl cursor-pointer">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{
          backgroundImage: `url(${data?.image ?? "/assets/genai.webp"})`,
        }}
      ></div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/50"></div>
      {isDisabled && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <Lock className="text-white w-10 h-10" />
        </div>
      )}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent">
        <p className="text-lg font-semibold text-white mb-2">{data?.name}</p>
        <p className="text-sm font-medium text-[#E5E5E5] mb-2 truncate">
          {data?.description}
        </p>
        <div className="flex justify-end">
          <Button
            className="bg-primary-black hover:bg-primary-blue text-white text-sm px-4 py-2 transition-transform transform duration-300 hover:scale-90 flex items-center gap-2"
            onClick={() =>
              !isDisabled && navigate(`/billing?program=${data?.slug}`)
            }
          >
            Apply
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {/* Spacer to maintain height */}
      <div className="aspect-[270/300] md:aspect-[270/320] w-full"></div>
    </div>
  );
};

export default ProductDemoCard;
