import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";

const ContractConfirmModal = ({
  openContractModal,
  setOpenContractModal,
}: {
  openContractModal: boolean;
  setOpenContractModal: (value: boolean) => void;
}) => {
  const navigate = useNavigate();
  return (
    <Dialog
      open={openContractModal}
      onOpenChange={(visible) => {
        if (!visible) {
          setOpenContractModal(visible);
        }
      }}
    >
      <DialogContent>
        <div className="w-full flex flex-col gap-4 text-center items-center">
          <div className="w-[150px] h-[150px] bg-transparent">
            <img
              src="/assets/thumb.jpg"
              alt="thumb"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-primary-black text-lg">
            Thank You! Your Request Has Been Received
          </h2>
          <p className="text-base text-primary-blue">
            We’ve got your message and our team is on it! Expect an email from
            stacksineden@gmail.com shortly.
          </p>
          <Button
            type="submit"
            className="shad-button_primary w-full"
            onClick={() => navigate("/enterprise")}
          >
            Okay, Got it
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContractConfirmModal;
