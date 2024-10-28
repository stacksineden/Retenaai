import { useState } from "react";
import { photo_credits_plan } from "@/modelDataset";
import { Dialog, DialogContent } from "../ui/dialog";
import { IUpdateCredit, PhotoshootPlan } from "@/types";
import { BadgeCheck, Sparkles } from "lucide-react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { Button } from "../ui/button";
import { useUserContext } from "@/context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUpdateUserCreditBalance } from "@/lib/tanstack-query/queriesAndMutation";

type CreditBillingModalProps = {
  openPaymentModal: boolean;
  setOpenPaymentModal: (openPaymentModal: boolean) => void;
};

const CreditsBillingModal = ({
  openPaymentModal,
  setOpenPaymentModal,
}: CreditBillingModalProps) => {
  const navigate = useNavigate();

  const { mutateAsync: updateBalance } = useUpdateUserCreditBalance();

  const [selectedPlan, setSelectedPlan] = useState<PhotoshootPlan | null>(null);
  const { user } = useUserContext();

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
      phonenumber: "",
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
    <Dialog
      open={openPaymentModal}
      onOpenChange={(visible) => {
        if (!visible) {
          setOpenPaymentModal(visible);
        }
      }}
    >
      <DialogContent className="">
        <div className="w-full flex flex-col gap-2">
          <div className="flex flex-col">
            <h2 className="text-primary-black text-2xl font-medium">
              Buy Photo Credits
            </h2>
            <p className="text-primary-black text-lg opacity-80 ml-1">
              {` Pay in your local currency: ${
                user_country_code && user_country_code === "ng" ? "NGN" : "USD"
              }`}
            </p>
          </div>
          <div className="flex flex-col gap-2 h-[30rem] overflow-y-scroll scrollbar-hide">
            {photo_credits_plan?.map((item) => (
              <div
                className={`w-full py-3 px-2 rounded-xl border-2 border-accent shadow cursor-pointer flex items-center justify-between ${
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
                <div className="h-full flex items-center justify-center">
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
            className="shad-button_primary mx-3"
            disabled={!selectedPlan}
            onClick={() => {
              handleFlutterPayment({
                callback: async (response) => {
                  //console.log(response);
                  if (response) {
                    const newBalance =
                      user?.creditBalance + (selectedPlan?.credits ?? 0);

                    const updatePayload: IUpdateCredit = {
                      userId: user.id,
                      balance: newBalance,
                    };

                    const response = await updateBalance(updatePayload);
                    //display a toast message to the user
                    if (response) {
                      toast.success(
                        "Payment successful! Keep creating magic with your photos!"
                      );
                      navigate(`/generations/flux?mode=flux1.1-pro`);
                    }
                    if (!response) {
                      toast.error(
                        "Update Credits Failed. Please contact support"
                      );
                    }
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
      </DialogContent>
    </Dialog>
  );
};

export default CreditsBillingModal;
