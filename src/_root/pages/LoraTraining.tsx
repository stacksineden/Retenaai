import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { v4 as uuidv4 } from "uuid";
import { Lightbulb, Trash } from "lucide-react";
import UploadFile from "@/components/shared/UploadFile";
import { TrainingLoraSchema } from "@/lib/validation";
import { useNavigate, useSearchParams } from "react-router-dom";
import { product_shoot_styles } from "@/modelDataset";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { useUserContext } from "@/context/AuthContext";
import {
  useCreateTraining,
} from "@/lib/tanstack-query/queriesAndMutation";
import toast from "react-hot-toast";
import Loader from "@/components/shared/Loader";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/lib/tanstack-query/queryKeys";

const LoraTraining = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [processingImages, setProcessingImages] = useState(false);

  const { user } = useUserContext();

  const navigate = useNavigate();

  const { mutateAsync: trainData, isPending: isTrainingData } =
    useCreateTraining();

  const queryClient = useQueryClient();

  const [modeDetails, setModeDetails] = useState<
    | {
        name: string;
        slug: string;
        category: string;
        images: string[];
        text: string;
        templates: {
          image: string;
          prompt: string;
        }[];
        samples: string[];
        is_trending: boolean;
      }
    | undefined
  >(undefined);

  console.log(modeDetails);

  const form = useForm<z.infer<typeof TrainingLoraSchema>>({
    resolver: zodResolver(TrainingLoraSchema),
    defaultValues: {
      is_public: false,
    },
  });

  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const ref = searchParams.get("ref");

  function getModeData(mode: string) {
    if (!mode) return;
    const result = product_shoot_styles?.find((item) => item?.slug === mode);
    setModeDetails(result);
    return result;
  }

  React.useEffect(() => {
    getModeData(mode ?? "");
  }, [mode]);

  // Handler to delete selected image
  const handleDelete = (file: File) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof TrainingLoraSchema>) {
    if (selectedFiles.length < 3) {
      toast.error("Please upload at least 3 images.");
      return;
    }
    // console.log("Form submitted:", values);
    // console.log(selectedFiles, "files");
    // console.log(selectedStyle, "styles");
    setProcessingImages(true);
    const uploadedUrls: string[] = [];
    // Upload selected files to Cloudinary
    setProcessingImages(true);
    toast.success("Processing your images ....");
    for (const file of selectedFiles) {
      const url = await uploadToCloudinary(file);
      if (url) {
        uploadedUrls.push(url);
      }
    }

    if (!uploadedUrls) {
      setProcessingImages(false);
      toast.error("Failed to upload images.");
      return;
    }

    const payload = {
      isPublic: values?.is_public ?? false,
      triggerWord: `${modeDetails?.name}-${uuidv4()}`,
      prompt: "",
      images: uploadedUrls,
      userId: user?.id,
      PrimaryStyle: modeDetails?.name ?? "",
      secondaryStyle: "",
      trainingStatus: "analysing_dataset",
      txRef: ref ?? "",
    };
    if (payload?.images && payload?.triggerWord && payload?.PrimaryStyle) {
      toast.success("Images saved sucessfully");
      const newTrainingData = await trainData(payload);
      if (newTrainingData) {
        setProcessingImages(false);
        toast.success("Data saved successfully");
        toast.success(
          "Photoshoot in progress. Check the training page for status updates."
        );
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_TRAINING_DATA],
        }),
          navigate(`/training-dataset`);
      }
      if (!newTrainingData) {
        setProcessingImages(false);
        toast.error("Failed to save data");
      }
    }
    // console.log("Payload to be sent to API", payload);
  }

  // Disable submit if no trigger word or no images selected
  const isSubmitDisabled = selectedFiles.length === 0;

  return (
    <>
      <div className="container py-4 mt-7 md:mt-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-2"
          >
            <div className="w-full flex flex-col gap-2">
              <div className="flex flex-col my-3">
                <h2 className="text-primary-black text-2xl font-medium">
                  Custom Model Training
                </h2>

                <p className="text-primary-black text-lg opacity-80 ml-1">
                  Train AI with your image dataset for personalized generation.
                </p>
              </div>

              <div className="flex flex-col gap-2 overflow-y-scroll scrollbar-hide w-[100%] h-[40rem] bg-white shadow-md rounded-md">
                <div className="flex flex-col my-4 px-2 gap-2 ">
                  <div className="p-2 bg-accent">
                    <div className="flex items-center gap-1">
                      <Lightbulb className="w-6 h-6 text-primary-blue" />
                      <p className="text-base text-black font-medium">
                        Upload your images
                      </p>
                    </div>
                    <ul className="mt-1 opacity-75">
                      <li className="text-base">
                        1. Upload 3 or more photos of your{" "}
                        {modeDetails?.name || "__ __"} brand. You can take these
                        photos yourself or find them online.
                      </li>
                      <li className="text-base">
                        2. Results get better with more photos from different
                        angles.
                      </li>
                      <li className="text-base">
                        3. Image size must be at least 384×384. See the samples
                        below for guidance.
                      </li>
                    </ul>
                  </div>

                  <div className="p-2 bg-accent w-full flex overflow-x-auto space-x-2 scrollbar-hide">
                    {modeDetails?.samples &&
                      modeDetails?.samples?.map((image, _i) => (
                        <div
                          key={_i}
                          className="h-[9rem] w-[9rem] flex-shrink-0 rounded-md bg-accent"
                        >
                          <img
                            src={image}
                            alt="productimage"
                            className="w-full h-full rounded-md object-cover"
                          />
                        </div>
                      ))}
                  </div>

                  <div className="mb-1"> 
                    <UploadFile
                      selectedFiles={selectedFiles}
                      setSelectedFiles={setSelectedFiles}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="shad-button_primary mx-3 my-4 py-3"
                  disabled={
                    isSubmitDisabled || isTrainingData || processingImages
                  }
                >
                  {isTrainingData || processingImages ? (
                    <div className="flex-center gap-2">
                      <Loader /> Submitting ...
                    </div>
                  ) : (
                    `Start your ${modeDetails?.name} shoot now`
                  )}
                </Button>
              </div>
            </div>
            <div className="w-full h-[45rem] border border-zinc-700 rounded-md border-dashed">
              <div className="bg-accent h-[45rem] overflow-y-scroll rounded-lg p-2 scrollbar-hide">
                {selectedFiles?.length === 0 && (
                  <div className="w-full h-full flex justify-center items-center text-center">
                    <p className="text-base text-primary-black">
                      Your selected images will appear here
                    </p>
                  </div>
                )}
                <div className="p-2 bg-accent w-full h-full grid grid-cols-1 md:grid-cols-2 gap-3">
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
                            className="w-full h-[30rem] md:h-[21rem] object-cover rounded-lg"
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
          </form>
        </Form>
      </div>
    </>
  );
};

export default LoraTraining;
