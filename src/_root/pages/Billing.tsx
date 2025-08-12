import { useUserContext } from "@/context/AuthContext";
import { available_programs } from "@/modelDataset";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { BadgeCheck, Sparkles } from "lucide-react";

import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";

import { useUpdateUserStageStatus } from "@/lib/tanstack-query/queriesAndMutation";


const Billing = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const programSlug = urlParams.get("program");

  const { user } = useUserContext();

  const application_fee = "10000";

  const { mutateAsync: updateUserStage } = useUpdateUserStageStatus();

  const programDetais = available_programs?.find(
    (item) => item?.slug === programSlug
  );


  // Flutterwave configuration
  const config = {
    public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now().toString(),
    amount: Number(application_fee),
    currency: "NGN",
    payment_options: "card, banktransfer, ussd card",
    customer: {
      email: user?.email!,
      phone_number: "",
      name: user?.name!,
    },
    customizations: {
      title: `Payment for ${
        programDetais?.program_name ?? "Retena AI"
      } Application Fee`,
      description: `Payment for Retena.ai photoshoot`,
      logo: "",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <>
      <div className="container py-4 mt-7 md:mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-2">
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-col">
              <h2 className="text-[#FCA311] text-2xl font-medium">
                Begin Your AI Learning Journey
              </h2>

              <p className="text-primary-black text-base opacity-80 ml-1">
                You're just one step away from unlocking access to RetenaAI’s
                immersive training programs. Pay your application fee to confirm
                your interest and get started.
              </p>
            </div>

            <div className="flex flex-col gap-2 overflow-y-scroll scrollbar-hide w-[100%]">
              <div className="flex flex-col gap-1 bg-white p-3">
                <h3 className="text-xl font-bold flex flex-col">
                  <p className="font-semibold text-lg opacity-70">
                    Application Fee
                  </p>
                  <p className="text-3xl font-semibold">&#x20A6;10,000</p>
                </h3>

                <ul className="">
                  <li className="flex items-center gap-1 my-2">
                    <BadgeCheck className="h-4 w-4 text-primary-blue3" />
                    <p className="text-lg">
                      Onboarding, access setup, training support
                    </p>
                  </li>
                  <li className="flex items-center gap-1 my-2">
                    <BadgeCheck className="h-4 w-4 text-primary-blue3" />
                    <p className="text-lg">Non-refundable</p>
                  </li>
                  <li className="flex items-center gap-1 my-2">
                    <BadgeCheck className="h-4 w-4 text-primary-blue3" />
                    <p className="text-lg">Pay once per application</p>
                  </li>
                </ul>

                <section className="bg-red-50 border border-red-200 rounded-xl p-6 md:p-8 my-8">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl font-bold">❗</span>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-red-700 mb-2">
                        Important Notes / Disclaimer
                      </h3>
                      <ul className="list-disc list-inside text-red-600 space-y-2">
                        <li>Application fee is non-refundable.</li>
                        <li>
                          Payment confirms your interest and locks your seat.
                        </li>
                        <li>
                          You will receive a confirmation email immediately.
                        </li>
                        <li>
                          If payment fails, please try again or contact support.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <Button
              type="submit"
              className="shad-button_primary md:w-[100%] mt-3"
              disabled={!programSlug}
              onClick={() => {
                handleFlutterPayment({
                  callback: async (response) => {
                    // console.log(response);
                    if (response) {
                      //display a toast message to the user
                      toast.success(
                        "Payment successful. Please provide details to start the photoshoot."
                      );
                      const updatePayload = {
                        userId: user?.id,
                        stage: "applied",
                        program: programDetais?.program_name!,
                        ProgamId: programDetais?.slug!,
                      };
                      await updateUserStage(updatePayload);

                      window.location.replace("/app");
                    }
                    if (!response) {
                      //definetely and issue from flutterwave, we can still get their payment details and help them verify with flutterwave but definetly not on us
                    }
                    closePaymentModal();
                  },
                  onClose: () => {},
                });
              }}
            >
              <Sparkles className="text-white h-6 w-6" />
              Pay &#x20A6;{application_fee}
            </Button>
          </div>

          <div className="w-full h-[45rem] bg-white overflow-y-scroll scrollbar-hide">
            <section className="w-full bg-white px-6 md:px-12 py-10 rounded-lg shadow-md space-y-8">
              {/* Program Overview Header */}
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-gray-900">
                  Program Overview
                </h2>
                <p className="text-gray-600 text-sm">
                  Everything you need to know at a glance
                </p>
              </div>

              {/* Overview Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base text-gray-800">
                <div>
                  <strong>Program:</strong>{" "}
                  {programDetais?.program_name ?? "__ __"}
                </div>
                <div>
                  <strong>Application Fee:</strong> ₦10,000.00
                </div>
                <div>
                  <strong>Program Length:</strong>{" "}
                  {programDetais?.cohort_duration ?? "__ __"}/ 3 Phases
                </div>
                <div>
                  <strong>Start Date:</strong>{" "}
                  {programDetais?.cohort_start_date ?? "__ __"}
                </div>
                <div>
                  <strong>Location:</strong> Online
                </div>
                <div>
                  <strong>Live Classes:</strong> Yes
                </div>
                <div>
                  <strong>Skill Level:</strong> Beginner
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">Tuition</h3>
              {/* Pricing Plans */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Quarterly Plan */}
                <div className="border border-gray-200 rounded-lg p-5 shadow-sm bg-[#f9fafb]">
                  <p className="text-sm text-primary-blue3 font-semibold">
                    Installments
                  </p>
                  <p className="text-green-600 text-xs mb-2">
                    Payable in 3 installments
                  </p>
                  <h3 className="text-xl font-bold mb-2">
                    {programDetais?.payment?.first_tranche ?? "__ __"}
                  </h3>
                  {/* <p className="text-sm mb-4">per </p> */}
                  <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                    <li>Access to LMS</li>
                    <li>Live classes</li>
                    <li>Community access</li>
                    <li>Internship/job placement assistance</li>
                    <li>Exclusive events</li>
                  </ul>
                </div>

                {/* Upfront Plan */}
                <div className="border border-gray-200 rounded-lg p-5 shadow-sm bg-[#fef9f4]">
                  <p className="text-sm text-primary-blue3 font-semibold">
                    Upfront
                  </p>
                  <p className="text-green-600 text-xs mb-2">Pay once</p>
                  <h3 className="text-xl font-bold mb-2">
                    {" "}
                    {programDetais?.payment?.total ?? "__ __"}
                  </h3>
                  {/* <p className="text-sm mb-4">once</p> */}
                  <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                    <li>Access to LMS</li>
                    <li>Live classes</li>
                    <li>Community access</li>
                    <li>Internship/job placement assistance</li>
                    <li>Exclusive events</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;

