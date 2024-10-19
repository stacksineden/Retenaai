import { useState } from "react";

import UploadFile from "@/components/shared/UploadFile";
import { Button } from "@/components/ui/button";
import { Fullscreen, Trash } from "lucide-react";
import { credit_charge } from "@/modelDataset";
import { useUserContext } from "@/context/AuthContext";
import { useUpdateUserCreditBalance } from "@/lib/tanstack-query/queriesAndMutation";
import toast from "react-hot-toast";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { bgRemover } from "@/lib/replicate/api";
import { IUpdateCredit } from "@/types";

const BgRemover = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [imagePrev, setImagePrev] = useState("");

  const { user } = useUserContext();

  const { mutateAsync: updateBalance } = useUpdateUserCreditBalance();

  async function handleBgRemover() {
    if (user?.creditBalance < credit_charge.IMAGEUPSCALING) {
      toast.error(
        "You don't have enough credits to complete this action. Please purchase more credits to proceed."
      );
    }

    if (selectedFiles.length !== 1) {
      toast.error("Please upload at least 1 images.");
      return;
    }
    setLoading(true);
    const url = await uploadToCloudinary(selectedFiles[0]);

    if (url) {
      toast.success("Image uploaded successfully.");

      const payload = {
        image: url,
      };
      const response = await bgRemover(payload);
      if (response) {
        setLoading(false);
        toast.success(response?.message ?? "");
        setImagePrev(response?.data);
        const newBalance = user?.creditBalance - credit_charge.IMAGEUPSCALING;
        const updatePayload: IUpdateCredit = {
          userId: user.id,
          balance: newBalance,
        };
        const creditsUpdate = await updateBalance(updatePayload);
        if (creditsUpdate) {
          // send to generations database and add the public flag if is public is true
        }
      }
      if (!response) {
        setLoading(false);
        toast.error("image upscaling falled");
      }
    }
  }

  const isButtonDisabled =
  loading || selectedFiles?.length === 0

  // Handler to delete selected image
  const handleDelete = (file: File) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  return (
    <div className="container py-4 mt-6 md:mt-0">
      <div className="w-full flex flex-col gap-2 my-3">
        <h2 className="text-primary-black text-2xl md:text-4xl font-semibold">
          Background Remover
        </h2>
        <p className="text-primary-blue3 text-sm md:text-base pl-2">
          Easily remove backgrounds from your photos with precision using
          advanced AI tools.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 md:mt-[4rem]">
        <div className="w-full rounded-lg border-[1.5px] border-accent shadow-lg p-5 bg-white">
          <div className="flex flex-col my-4">
            <p className="text-base md:text-lg font-medium text-primary-black">
              Upload Image
            </p>
            <p className="text-xs md:text-sm text-primary-black opacity-50">
              Select an image to remove background
            </p>
          </div>
          <div className="w-full border border-accent">
            <UploadFile
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
            />
            <Button
              type="submit"
              className="shad-button_primary w-full my-3"
              disabled={isButtonDisabled} 
              onClick={handleBgRemover}
            >
              {`Generate (${credit_charge.IMAGEUPSCALING} credit)`}
            </Button>
          </div>
          <div className="bg-accent h-[25rem] overflow-y-scroll rounded-lg p-2">
            {selectedFiles?.length === 0 && (
              <div className="w-full h-full flex justify-center items-center text-center">
                <p className="text-base text-primary-black">
                  Your selected image will appear here
                </p>
              </div>
            )}
            <div className="p-2 bg-white w-full h-full grid grid-cols-1 gap-3">
              {selectedFiles.map((file, _i) => {
                // console.log(file, "type");
                const fileUrl = URL.createObjectURL(file);
                const isImage = file.type.startsWith("image/");

                return (
                  <div key={_i} className="relative group">
                    {isImage && (
                      <img
                        src={fileUrl}
                        alt={file.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    )}
                    {!isImage && (
                      <div className="bg-accent p-2">
                        <p className="text-sm text-primary-black font-medium">
                          {file.name} is not a supported file type
                        </p>
                      </div>
                    )}
                    <button
                      onClick={() => handleDelete(file)}
                      type="button"
                      className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full h-full rounded-lg border-[1.5px] border-accent shadow-lg p-5 flex flex-col gap-2 bg-white">
          <div className="flex flex-col my-4">
            <p className="text-base md:text-lg font-medium text-primary-black">
              Generated Image
            </p>
            {loading ? (
              <p className="text-xs md:text-sm text-primary-black opacity-50">
                Please wait for about 30 seconds while we generate your image...
              </p>
            ) : (
              <p className="text-xs md:text-sm text-primary-black opacity-50">
                Image generation takes about 30 seconds
              </p>
            )}
          </div>
          <div className="flex-1 w-full border border-accent relative">
            {loading && (
              <div className="absolute top-0 left-0 h-full w-full bg-accent flex items-center justify-center animate-pulse"></div>
            )}
            <img
              src={`${imagePrev ? imagePrev : "/assets/image-placeholder.png"}`}
              alt="images"
              className="h-full w-full object-contain"
            />
          </div>
          {imagePrev && (
            <a
              href={imagePrev}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 ml-1 cursor-pointer"
            >
              <p className="text-base font-medium  text-primary-blue3">
                View Image
              </p>
              <Fullscreen className="w-5 h-5 text-primary-blue3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default BgRemover;
