import { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { useNavigate } from "react-router-dom";
import { GalleryStylesData, PhotoshootPlan } from "@/types";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { BadgeCheck, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { photoshoot_plans } from "@/modelDataset";
import { useUserContext } from "@/context/AuthContext";
import toast from "react-hot-toast";

type BillingModalProps = {
  openPaymentModal: boolean;
  setOpenPaymentModal: (openPaymentModal: boolean) => void;
  data: GalleryStylesData;
};

const PhotoshootBillingModal = ({
  data,
  openPaymentModal,
  setOpenPaymentModal,
}: BillingModalProps) => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<PhotoshootPlan | null>(null);

  const { user } = useUserContext();

  // Flutterwave configuration
  const config = {
    public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now().toString(),
    amount: Number(selectedPlan?.price_in_naira),
    currency: "NGN",
    payment_options: "card, banktransfer, ussd card",
    customer: {
      email: user?.email!,
      phone_number: "",
      name: user?.name!,
    },
    customizations: {
      title: `Payment for ${selectedPlan?.plan}`,
      description: `Payment for Retina.AI photoshoot`,
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
      <DialogContent>
        <div className="w-full flex flex-col gap-2">
          <div className="flex flex-col">
            <h2 className="text-primary-black text-2xl font-medium">
              Select Package
            </h2>
            <p className="text-primary-black text-lg opacity-80 ml-1">
              {data?.title ?? "-- --"}{" "}
              <span className="opacity-70">- Pay in your local currency</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 h-[32rem] overflow-y-scroll scrollbar-hide">
            {photoshoot_plans?.map((item) => (
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
                    {item?.base_price}
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
                  // console.log(response);
                  if (response) {
                    //display a toast message to the user
                    toast.success(
                      "Payment successful. Please provide details to start the photoshoot."
                    );
                    navigate(
                      `/training?mode=${data?.query_slug}&ref=${response?.transaction_id}`
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
            Pay NGN{selectedPlan?.price_in_naira}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoshootBillingModal;
