import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

type CtaCardProps = {
  title: ReactNode | string;
  description: ReactNode | string;
  buttonText: string;
  buttonAction?: () => void;
  imageSrc?: string;
  ctaUrl: string;
};

const CtaCard = ({
  title,
  description,
  buttonText,
  // buttonAction,
  imageSrc,
  ctaUrl
}: CtaCardProps) => {
  const navigate = useNavigate();
  return (
    <section className="bg-black py-12 px-4">
      <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-lg">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={
              imageSrc ||
              "https://cdn.pixabay.com/photo/2024/05/22/20/18/photo-8781624_1280.jpg"
            }
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay Content */}
        <div className="relative z-0 bg-black/20  px-6 py-10 md:px-16 md:py-16 lg:w-1/2">
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-6xl font-bold text-[#FFFFFF]">
              {title ?? ""}
            </h1>

            <div className="bg-primary-black text-white rounded-2xl p-6 max-w-md space-y-4">
              <p className="text-sm md:text-base">{description ?? ""}</p>

              <div className="flex justify-center">
                <Button
                  className="bg-accent border-[1.5px] text-sm border-primary-blue2 font-semibold text-primary-black hover:bg-accent hover:primary-black flex items-center gap-2"
                  onClick={() => navigate(ctaUrl)}
                >
                  {buttonText ?? "Get Started"}
                  <ArrowRight className="text-black h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaCard;

//  <section className="container mx-auto relative py-4 lg:mb-5 lg:py-20 xl:mb-6 px-6 lg:px-20 3xl:px-0 overflow-hidden">
//       <div className="w-full  shadow-xl md:grid grid-cols-2 rounded-[2rem] hidden bg-white border-[1.5px] border-accent">
//         <div className="w-full h-full rounded-l-[2rem] py-12 pl-8 pr-2 text-white relative">
//           <div className="w-full">
//             <div className="flex flex-col gap-4 px-7">
//               <h2 className="text-[40px] font-semibold text-primary-black leading-[3.2rem]">
//                 🎯 Join Our Founders-Only Pilot Program
//               </h2>
//               <p className="text-base font-normal tracking-wide text-primary-black">
//                 We're working with a select group of founders, coaches, and
//                 service providers to implement AI client acquisition systems
//                 before our full public launch. Be one of the first to build,
//                 test, and scale — with hands-on support from our core team.
//               </p>

//               <h4 className="text-[20px] font-semibold text-primary-black leading-[3.2rem]">
//                 Why join early?
//               </h4>
//               <ul className=" flex flex-col gap-2">
//                 <li className="text-primary-blue text-base font-medium flex items-center gap-1">
//                   🧪 Priority access to custom builds
//                 </li>
//                 <li className="text-primary-blue text-base font-medium flex items-center gap-1">
//                   🧠 Direct strategy time with the founder
//                 </li>
//                 <li className="text-primary-blue text-base font-medium flex items-center gap-1">
//                   💸 Early pricing locked in for life
//                 </li>
//                 <li className="text-primary-blue text-base font-medium flex items-center gap-1">
//                   📈 Case study feature opportunities when results land
//                 </li>
//                 <li className="text-primary-blue text-base font-medium flex items-center gap-1">
//                   🧰 Full system ownership and documentation
//                 </li>
//               </ul>

//               <div className="flex justify-start mt-2">
//                 <Button
//                   className="bg-primary-black hover:bg-primary-blue text-white text-base px-4 py-6 transform transition duration-300 hover:scale-90"
//                   onClick={() => navigate("/")}
//                 >
//                   Get a price
//                   <ArrowRight className="text-white h-5" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-full bg-feature-bg bg-cover bg-center bg-no-repeat  rounded-r-[2rem] relative">
//           <img
//             src="/assets/herod.webp"
//             alt="baner"
//             className="object-cover h-full w-full rounded-r-[2rem]"
//           />
//         </div>
//       </div>

//       {/* mobile */}

//       <div className="w-full my-2 flex flex-col gap-9 py-5 md:hidden">
//         <div className="w-full h-[950px] shadow-xl grid grid-cols-1 rounded-[2rem]">
//           <div className="w-full bg-accent h-[300px] rounded-t-[2rem]">
//             <img
//               src="/assets/herod.webp"
//               alt="image-services"
//               className="bg-cover w-full h-full rounded-t-[2rem]"
//             />
//           </div>

//           <div className="w-full bg-accent shadow-md h-[650px] py-5 px-7 text-primary-black rounded-b-[2rem]">
//             <div className="w-full">
//               <div className="flex flex-col gap-2">
//                 <h2 className="text-[22px] font-semibold">
//                   🎯 Join Our Founders-Only Pilot Program
//                 </h2>
//                 <p className="text-base tracking-wide">
//                   We're working with a select group of founders, coaches, and
//                   service providers to implement AI client acquisition systems
//                   before our full public launch. Be one of the first to build,
//                   test, and scale — with hands-on support from our core team.
//                 </p>
//                 <h4 className="text-[20px] font-semibold text-primary-black leading-[3.2rem]">
//                   Why join early?
//                 </h4>
//                 <ul className="flex flex-col gap-2">
//                   <li className="text-primary-blue text-base font-medium flex items-center gap-1">
//                     🧪 Priority access to custom builds
//                   </li>
//                   <li className="text-primary-blue text-base font-medium flex items-center gap-1">
//                     🧠 Direct strategy time with the founder
//                   </li>
//                   <li className="text-primary-blue text-base font-medium flex items-center gap-1">
//                     💸 Early pricing locked in for life
//                   </li>
//                   <li className="text-primary-blue text-base font-medium flex items-center gap-1">
//                     📈 Case study feature opportunities when results land
//                   </li>
//                   <li className="text-primary-blue text-base font-medium flex items-center gap-1">
//                     🧰 Full system ownership and documentation
//                   </li>
//                 </ul>
//                 <div className="flex justify-start mt-2">
//                   <Button
//                     className="bg-primary-black hover:bg-primary-blue text-white text-base px-4 py-6 transform transition duration-300 hover:scale-90"
//                     onClick={() => navigate("/sign-up")}
//                   >
//                     Get a price
//                     <ArrowRight className="text-white h-5" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

{
  /* <div className="flex justify-center space-x-2 bg-[#14213D] rounded-full p-1 w-fit mx-auto">
                    <button className="px-4 py-2 rounded-full bg-transparent text-white hover:bg-gray-700">
                      Find talent
                    </button>
                    <button className="px-4 py-2 rounded-full bg-white text-gray-900 font-semibold">
                      Browse jobs
                    </button>
                  </div> */
}
