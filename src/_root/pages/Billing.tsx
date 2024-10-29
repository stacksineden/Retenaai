import { useUserContext } from "@/context/AuthContext";
import { photoshoot_plans } from "@/modelDataset";
import { PhotoshootPlan } from "@/types";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { BadgeCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/context/AppContext";
import ExamplePhotoModal from "@/components/shared/ExamplePhotoModal";

const Billing = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<PhotoshootPlan | null>(null);

  const { user } = useUserContext();
  const { shootData } = useAppContext();

  const user_country_code = localStorage.getItem("user_country_code");

  // Flutterwave configuration
  const config = {
    public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now().toString(),
    amount: Number(
      user_country_code && user_country_code === "ng"
        ? selectedPlan?.price_in_naira
        : selectedPlan?.base_price
    ),
    currency: user_country_code && user_country_code === "ng" ? "NGN" : "USD",
    payment_options: "card, banktransfer, ussd card",
    customer: {
      email: user?.email!,
      phone_number: "",
      name: user?.name!,
    },
    customizations: {
      title: `Payment for ${selectedPlan?.plan}`,
      description: `Payment for Retena.ai photoshoot`,
      logo: "",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <>
      <div className="container py-4 mt-7 md:mt-4">
        <div className="w-full flex flex-col gap-2">
          <div className="flex flex-col">
            <h2 className="text-primary-black text-2xl font-medium">
              Select Package
            </h2>

            <p className="text-primary-black text-lg opacity-80 ml-1">
              {shootData?.title ?? "-- --"}{" "}
              <span className="opacity-70">
                -{" "}
                {`Pay in your local currency ${
                  user_country_code && user_country_code === "ng"
                    ? "NGN"
                    : "USD"
                }`}
              </span> 
            </p>
          </div>
          <ExamplePhotoModal images={shootData?.images ?? []} />
          <div className="flex flex-col gap-2 h-[27rem] md:h-[30rem] overflow-y-scroll scrollbar-hide md:max-w-[80%]">
            {photoshoot_plans?.map((item) => (
              <div
                className={`w-full py-3 px-2 rounded-xl border-2 border-zinc-200 shadow-md cursor-pointer flex flex-col md:flex-row items-center justify-between ${
                  selectedPlan?.plan === item?.plan ? " bg-zinc-200" : ""
                }`}
                key={item?.id}
                onClick={() => {
                  setSelectedPlan(item);
                }}
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold">{item?.plan}</h3>
                  <ul className="">
                    {item?.feature?.map((data, _i) => (
                      <li className="flex items-center gap-1" key={_i}>
                        <BadgeCheck className="h-3 w-3 text-primary-blue3" />
                        <p className="text-base">{data}</p>
                      </li>
                    ))}
                  </ul> 
                </div>
                <div className="h-full flex items-center justify-center bg-white rounded-lg px-2 py-2">
                  <h1 className="text-primary-blue font-bold text-4xl p-4 rounded-full bg-accent">
                    {user_country_code && user_country_code === "ng" ? (
                      <span className="text-xl">NGN{item?.price_in_naira}</span>
                    ) : (
                      `$${item?.base_price}`
                    )}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <Button
            type="submit"
            className="shad-button_primary md:w-[80%] mt-3"
            disabled={!selectedPlan}
            onClick={() => {
              handleFlutterPayment({
                callback: async (response) => {
                  // console.log(response);
                  if (response) {
                    //display a toast message to the user
                    toast.success(
                      "Payment successful. Please provide details to start the photoshoot."
                    );
                    navigate(
                      `/training?mode=${shootData?.query_slug}&ref=${response?.transaction_id}`
                    );
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
            Pay{" "}
            {selectedPlan
              ? user_country_code === "ng"
                ? `NGN${selectedPlan?.price_in_naira}`
                : `$${selectedPlan?.base_price}`
              : ""}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Billing;
