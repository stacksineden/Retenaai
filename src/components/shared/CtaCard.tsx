import { ArrowRight, Camera, Upload, Video } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const CtaCard = () => {
  const navigate = useNavigate()
  return (
    <section className="container mx-auto relative py-4 lg:mb-5 lg:py-20 xl:mb-6 px-6 lg:px-20 3xl:px-0 overflow-hidden">
      <div className="w-full  shadow-xl md:grid grid-cols-2 rounded-[2rem] hidden bg-white border-[1.5px] border-accent">
        <div className="w-full h-full rounded-l-[2rem] py-12 pl-8 pr-2 text-white relative">
          <div className="w-full">
            <div className="flex flex-col gap-4 px-7">
              <h2 className="text-[48px] font-semibold text-primary-black leading-[3.5rem]">
                Start taking AI photos now
                <span className="text-primary-blue"> with Retina.AI</span>
              </h2>
              <p className="text-lg font-normal tracking-wide text-primary-black">
                Generate photorealistic images of people using AI. Capture
                stunning photos with the first AI Photographer! Create photo and
                video content for your social media effortlessly. Save time and
                money by doing an AI photoshoot from your laptop or phone
                instead of hiring an expensive photographer.
              </p>

              <ul className="mt-2 flex flex-col gap-2">
                <li className="text-primary-blue text-base font-medium flex items-center gap-1">
                  <Upload className="text-primary-blue4 h-5 w-5" />
                  Upload selfies and create your own Flux™ AI model.
                </li>
                <li className="text-primary-blue text-base font-medium flex items-center gap-1">
                  <Camera className="text-primary-blue4 h-5 w-5" />
                  Take 100% AI Realistic photos in any pose, place or action.
                </li>
                <li className="text-primary-blue text-base font-medium flex items-center gap-1">
                  <Video className="text-primary-blue4 h-5 w-5" />
                  Create 100% AI videos from any AI photo you take.
                </li>
              </ul>
              <div className="flex justify-start mt-2">
                <Button className="bg-primary-black hover:bg-primary-blue text-white text-base px-4 py-7 transform transition duration-300 hover:scale-90"
                onClick={()=> navigate('/sign-up')}>
                  Start Your Photoshoot Today!
                  <ArrowRight className="text-white h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-feature-bg bg-cover bg-center bg-no-repeat  rounded-r-[2rem] relative">
          <img
            src="/assets/herod.webp"
            alt="baner"
            className="object-cover h-full w-full rounded-r-[2rem]"
          />
        </div>
      </div>

      {/* mobile */}

      <div className="w-full my-7 flex flex-col gap-9 py-5 md:hidden">
        <div className="w-full h-[800px] shadow-xl grid grid-cols-1 rounded-[2rem]">
          <div className="w-full bg-accent h-[300px] rounded-t-[2rem]">
            <img
              src="/assets/herod.webp"
              alt="image-services"
              className="bg-cover w-full h-full rounded-t-[2rem]"
            />
          </div>

          <div className="w-full bg-accent shadow-md h-[500px] py-5 px-7 text-primary-black rounded-b-[2rem]">
            <div className="w-full">
              <div className="flex flex-col gap-2">
                <h2 className="text-[18px] font-semibold">
                  Start taking AI photos now{" "}
                  <span className="text-primary-blue"> with Retina.AI</span>
                </h2>
                <p className="text-[12px] tracking-wide">
                  Generate photorealistic images of people using AI. Capture
                  stunning photos with the first AI Photographer! Create photo
                  and video content for your social media effortlessly. Save
                  time and money by doing an AI photoshoot from your laptop or
                  phone instead of hiring an expensive photographer.
                </p>
                <ul className="mt-2 flex flex-col gap-2">
                  <li className="text-primary-blue text-base font-medium flex items-center gap-1">
                    <Upload className="text-primary-blue4 h-5 w-5" />
                    Upload selfies and create your own Flux™ AI model.
                  </li>
                  <li className="text-primary-blue text-base font-medium flex items-center gap-1">
                    <Camera className="text-primary-blue4 h-5 w-5" />
                    Take 100% AI Realistic photos in any pose, place or action.
                  </li>
                  <li className="text-primary-blue text-base font-medium flex items-center gap-1">
                    <Video className="text-primary-blue4 h-5 w-5" />
                    Create 100% AI videos from any AI photo you take.
                  </li>
                </ul>
                <div className="flex justify-start mt-2">
                  <Button className="bg-primary-black hover:bg-primary-blue text-white text-base px-4 py-7 transform transition duration-300 hover:scale-90"
                      onClick={()=> navigate('/sign-up')}>
                    Start Your Photoshoot Today!
                    <ArrowRight className="text-white h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </section>
  );
};

export default CtaCard;
