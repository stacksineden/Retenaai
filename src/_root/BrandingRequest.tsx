import { InlineWidget } from "react-calendly";
import { BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

const BrandingRequest = () => {
  return (
    <>
      <div className="max-w-[99%] md:max-w-[98%] lg:max-w-[98%] xl:max-w-[98%] w-full bg-white flex justify-center items-center py-4">
        {/* form */}
        <div className="w-full md:w-[80%] md:shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-0">
          <div className="h-full w-full p-4 md:p-7 flex flex-col gap-4 bg-accent">
            {/* logo */}
            <Link to="/" className="flex items-center gap-1 md:gap-2 mt-7">
              <div className="w-[150px] md:w-[170px]">
                <img
                  src="/assets/logo.png"
                  alt="brand"
                  className="w-full object-contain"
                  loading="lazy"
                />
              </div>
            </Link>
            {/* body */}
            <div className="text-[18px] md:text-[24px] text-primary-blue font-semibold py-0 md:my-2">
              From Contact Form to Seamless Collaboration.
            </div>
            <div className="flex flex-col gap-5 p-2">
              <div className="flex gap-2">
                <BadgeCheck className="text-primary-blue3 flex-[5%] w-full" />
                <div className="flex-[95%] w-full">
                  <h2 className="text-[#071E22] font-medium tracking-wide text-[14px] md:text-[16px]">
                    Engaging Exploration: Crafting Your Blueprint for Success.
                  </h2>
                  <p className="text-base md:text-[14px] text-[#071E22]">
                    Fill out our Contact form. Watch for a prompt Carlendly call
                    invitation via email. Engage in a pivotal conversation where
                    we delve into your business, revealing unique needs. This
                    sets the stage for a customized AI solution that seamlessly
                    aligns with your objectives, optimizing your business
                    processes.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <BadgeCheck className="text-primary-blue3 flex-[5%] w-full" />
                <div className="flex-[95%] w-full">
                  <h2 className="text-base font-medium tracking-wide text-[14px] md:text-[16px]">
                    Personalized Pathways: Mapping Your AI Investment.
                  </h2>
                  <p className="text-[12px] md:text-[14px] text-[#071E22]">
                    Post our discussion, you'll get a custom quote detailing AI
                    solutions and investment. Transparently backed by
                    comprehensive payment breakdown and detailed contracts,
                    empowering your informed journey. Review, then confidently
                    progress to the next step.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <BadgeCheck className="text-primary-blue3 flex-[5%] w-full" />
                <div className="flex-[95%] w-full">
                  <h2 className="text-base font-medium tracking-wide text-[14px] md:text-[16px]">
                    Collaborative Fusion: Uniting for Unrivaled Results.
                  </h2>
                  <p className="text-[12px] md:text-[14px]  text-[#071E22]">
                    Upon confirmation, you'll enter an exciting phase. We'll
                    swiftly welcome you to a dedicated hub, fostering effortless
                    sharing of details, documents, and insights. Your active
                    involvement refines the strategy and fuels daily reporting,
                    propelling your AI-powered vision seamlessly forward.
                    Together, we ensure its successful realization.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-9 px-5">
            <div className="flex flex-col my-4">
              <p className="text-lg font-medium text-primary-black">
                Fill in your details below.
              </p>
              <p className="text-sm text-primary-black opacity-50">
                Let's get started with this contact form
              </p>
            </div>

            <div className="text-[20px] text-[#071E22] font-semibold ">
              <div className="">
                <InlineWidget url="https://calendly.com/retenaaistacksorg/30min" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandingRequest;
