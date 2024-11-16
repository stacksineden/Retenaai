import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

import { Asterisk } from "lucide-react";

const PhotoGuideModal = () => {
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
        <div className="flex items-center gap-1">
          <p className="font-semibold text-primary-blue cursor-pointer text-base">
            Click to see image upload guide
          </p>
          <Asterisk className="text-red-500 h-5 w-5" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="w-full h-[40rem] overflow-y-scroll">
          <h2 className="text-lg font-semibold">Image Upload Guide.</h2>

          <div className="flex flex-col gap-2 mt-2">
            <p className="text-base font-semibold text-black">
              We recommend the following to get the best results:
            </p>

            <ul className="mt-1">
              <li className="text-base text text-primary-blue flex items-center my-1">
                <Asterisk className="text-primary-blue h-5 w-5" /> 15–20 clear,
                high-quality images. Make sure they are not blurry
              </li>
              <li className="text-base text text-primary-blue flex my-1">
                <Asterisk className="text-primary-blue h-5 w-5" /> The image
                should have a minimum width or height of 1024 pixels
              </li>
              <li className="text-base text text-primary-blue flex my-1">
                <Asterisk className="text-primary-blue h-5 w-5" /> Use JPEG or
                PNG image formats.
              </li>
              <li className="text-base text text-primary-blue flex my-1">
                <Asterisk className="text-primary-blue h-5 w-5" /> Make sure
                there is only one person in the photo.
              </li>
              <li className="text-base text text-primary-blue flex my-1">
                <Asterisk className="text-primary-blue h-5 w-5" /> We recommend
                using diffrent enviroment and poses.
              </li>
              <li className="text-base text ml-1 flex my-1 text-red-500 font-semibold">
                Note: You should keep in mind that the kind of photos you upload
                will determind the quality of your photoshoot.
              </li>
            </ul>

            <p className="text-base font-semibold text-black">
              For the Poses we recommended Photos consisting of:
              <li className="text-base text text-primary-blue flex flex-col my-1">
                <span className="flex font-medium">
                  <Asterisk className="text-primary-blue h-5 w-5" />
                  Close-up shots with various backgrounds and facial angles and
                  expressions. Here are some examples:
                </span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                  <div className="h-28 rounded-xl bg-accent">
                    <img
                      src="/assets/psedo-generations/close-up1.png"
                      alt="demo"
                      className="w-full h-full rounded-xl object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="h-28 rounded-xl bg-accent">
                    <img
                      src="/assets/psedo-generations/close-up2.png"
                      alt="demo"
                      className="w-full h-full rounded-xl object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="h-28 rounded-xl bg-accent">
                    <img
                      src="/assets/psedo-generations/close-up3.png"
                      alt="demo"
                      className="w-full h-full rounded-xl object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="h-28 rounded-xl bg-accent">
                    <img
                      src="/assets/psedo-generations/close-up4.webp"
                      alt="demo"
                      className="w-full h-full rounded-xl object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </li>
              <li className="text-base text text-primary-blue flex flex-col my-1">
                <span className="flex font-medium">
                  <Asterisk className="text-primary-blue h-5 w-5" />
                  Waist-up shots with various backgrounds. Here are some
                  examples:
                </span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                  <div className="h-28 rounded-xl bg-accent">
                    <img
                      src="/assets/psedo-generations/waist-up1.webp"
                      alt="demo"
                      className="w-full h-full rounded-xl object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="h-28 rounded-xl bg-accent">
                    <img
                      src="/assets/psedo-generations/waist-up2.png"
                      alt="demo"
                      className="w-full h-full rounded-xl object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="h-28 rounded-xl bg-accent">
                    <img
                      src="/assets/psedo-generations/waist-up3.png"
                      alt="demo"
                      className="w-full h-full rounded-xl object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="h-28 rounded-xl bg-accent">
                    <img
                      src="/assets/psedo-generations/waist-up4.webp"
                      alt="demo"
                      className="w-full h-full rounded-xl object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </li>
              <li className="text-base text text-primary-blue flex flex-col my-1">
                <span className="flex font-medium">
                  <Asterisk className="text-primary-blue h-5 w-5" />
                  1-3 full-body shots if you require full-body photoshoots
                  instead of just portraits. Here are some examples:
                </span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                  <div className="h-28 rounded-xl bg-accent">
                    <img
                      src="/assets/psedo-generations/full-body1.png"
                      alt="demo"
                      className="w-full h-full rounded-xl object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="h-28 rounded-xl bg-accent">
                    <img
                      src="/assets/psedo-generations/full-body2.jpg"
                      alt="demo"
                      className="w-full h-full rounded-xl object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </li>
            </p>

            <ul className="text-base text ml-1 my-1 text-red-500 font-semibold">
              Note: You can upload images that reflect the type of photoshoot
              you want. For example:
              <li className="text-base text text-primary-blue flex  my-1 gap-1">
                <Asterisk className="text-primary-blue h-5 w-5" />
                If you want a picture of yourself at a dinner, upload a photo of
                you alone in a similar setting.
              </li>
              <li className="text-base text text-primary-blue flex my-1 gap-1">
                <Asterisk className="text-primary-blue h-5 w-5" />
                If you want a beach photo, upload an image of yourself at the
                beach.
              </li>
            </ul>
            <div className="text-primary-black font-medium">
              However, this is optional. Even if you don't upload specific
              images, we will still work with the ones you provide. Rest
              assured, the quality of your photoshoot will not be compromised.
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoGuideModal;
