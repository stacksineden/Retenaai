import  { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";

const ExamplePhotoModal = ({ images }: { images: string[] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(visible) => {
        if (!visible) {
          setIsOpen(visible);
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button
          type="submit"
          className="shad-button_primary w-full md:w-1/4"
          // disabled={true}
        >
          View Example Photos
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="w-full h-[40rem] overflow-y-scroll grid grid-cols-1 gap-1">
          {images?.map((img, _i) => (
            <div className="w-full h-full" key={_i}>
              <img
                src={img}
                alt="sampleimages"
                className="object-cover w-full h-full "
              />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExamplePhotoModal;
