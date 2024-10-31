import WebLayoutWrapper from "@/components/shared/WebLayoutWrapper";
import { Button } from "@/components/ui/button";
import { photoshoot_plans } from "@/modelDataset";
import { CheckCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();
  return (
    <WebLayoutWrapper>
      <div className="container py-4">
        <div className="w-full flex flex-col gap-2 my-3">
          <h2 className="text-primary-black text-2xl md:text-4xl font-semibold">
            Pricing
          </h2>
          <p className="text-primary-blue3 text-sm md:text-base pl-2 w-full md:w-1/2">
            Whether for personal or client use, RetinaAI offers tailored
            packages. Choose the perfect plan to unlock the full potential of
            our AI-powered photoshoot services.
          </p>
        </div>

        <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 md:max-w-[60rem] mx-auto">
          {photoshoot_plans?.map((item, _i) => (
            <div
              key={_i}
              className={`relative rounded-2xl bg-white border border-accent shadow-lg`}
            >
              {item?.plan === "Pro" && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-primary-black px-3 py-2 text-sm font-medium text-white text-center">
                  Recommended
                </div>
              )}
              <div className="p-5 text-center">
                <h3 className="my-3 text-center text-3xl font-bold text-primary-black">
                  {item?.plan}
                </h3>
                {/* <p className="text-zinc-100 opacity-70 text-base">
                  {item?.tagline}
                </p> */}
                <p className="my-2 text-5xl font-semibold text-primary-black">
                  ${item?.base_price}
                </p>
              </div>
              <ul className="my-10 space-y-5 px-8">
                {item?.feature?.map((data, _i) => (
                  <li
                    className="flex space-x-5 text-center gap-2 text-primary-black"
                    key={_i}
                  >
                    <CheckCheck className="text-primary-blue w-5 h-5" /> {data}
                  </li>
                ))}
              </ul>
              <div className="border-t border-accent " />
              <div className="p-5 flex items-center justify-center">
                {item?.plan !== "Enterprise" && (
                  <Button
                    className="bg-primary-blue text-white text-base"
                    onClick={() => navigate("/lora-gallery")}
                  >
                    Get started
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </WebLayoutWrapper>
  );
};

export default Pricing;
