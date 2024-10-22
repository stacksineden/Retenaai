import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Trash } from "lucide-react";
import UploadFile from "@/components/shared/UploadFile";
import { TrainingLoraSchema } from "@/lib/validation";
import { Input } from "@/components/ui/input";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  photo_shoot_ideas_data,
  photo_shoot_ideas_options,
} from "@/modelDataset";
import ExamplePhotoModal from "@/components/shared/ExamplePhotoModal";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { useUserContext } from "@/context/AuthContext";
import {
  useCreateTraining,
  // useGetUserTrainingData,
} from "@/lib/tanstack-query/queriesAndMutation";
import toast from "react-hot-toast";
import Loader from "@/components/shared/Loader";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/lib/tanstack-query/queryKeys";

const LoraTraining = () => {
  // const [useTrainingset, setUseTrainingSet] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<string>("");
  const [processingImages, setProcessingImages] = useState(false);

  const { user } = useUserContext();

  const navigate = useNavigate();

  const { mutateAsync: trainData, isPending: isTrainingData } =
    useCreateTraining();

  // const { data: trainingDataset, isPending: isFetchingData } =
  //   useGetUserTrainingData(user?.id);

  const queryClient = useQueryClient();

  const [modeDetails, setModeDetails] = useState<
    | {
        title: string;
        text: string;
        query_slug: string;
        images: string[];
      }
    | undefined
  >(undefined);

  const form = useForm<z.infer<typeof TrainingLoraSchema>>({
    resolver: zodResolver(TrainingLoraSchema),
    defaultValues: {
      prompt: "",
      is_public: false,
      trigger_word: "",
    },
  });

  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const ref = searchParams.get("ref");

  function getModeData(mode: string) {
    if (!mode) return;
    const result = photo_shoot_ideas_data?.find(
      (item) => item?.query_slug === mode
    );
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
    if (selectedFiles.length < 1) {
      toast.error("Please upload at least 15 images.");
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
      triggerWord: values?.trigger_word?.toUpperCase() ?? "",
      prompt: values?.prompt ?? "",
      images: uploadedUrls,
      userId: user?.id,
      PrimaryStyle: modeDetails?.title ?? "",
      secondaryStyle: selectedStyle ?? "",
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
  const isSubmitDisabled =
    !form.watch("trigger_word") || selectedFiles.length === 0;

  return (
    <>
      <div className="container py-4 mt-6 md:mt-0">
        <div className="w-full flex flex-col gap-2 my-3">
          <h2 className="text-primary-black text-2xl md:text-4xl font-semibold">
            {modeDetails?.title}
          </h2>
          <p className="text-primary-blue3 text-base pl-2">
            Flux.1 AI Image Generator | Realism Style
          </p>
          <ExamplePhotoModal images={modeDetails?.images ?? []} />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 md:mt-[4rem]"
          >
            <div className="w-full h-full rounded-lg border-[1.5px] border-accent shadow-lg p-5 flex flex-col gap-2 bg-white">
              <div className="flex flex-col my-4">
                <p className="text-lg font-medium text-primary-black">
                  Upload Your images
                </p>
                <p className="text-base text-primary-black font-semibold">
                  We recommend uploading your photos in supported formats such
                  as JPEG, JPG, PNG, or WebP. For optimal results, please share
                  15 to 30 images or more, if possible. Include a variety of
                  close-ups, waist-up, and full-body shots with different facial
                  expressions. You can drag and upload multiple photos at
                  once.
                  <span className="text-red-700">
                    {" "}
                    Note: A trigger word is an identifier we will use to
                    activate your AI model once training is complete. It is
                    important to choose a distinct and unique word.
                  </span>
                </p>
              </div>
              <FormField
                control={form.control}
                name="trigger_word"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your Trigger word eg 'DAVID'"
                        className="shad-input text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full border border-accent">
                {/* {useTrainingset ? (
                  <div className="w-full">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your training set" />
                      </SelectTrigger>
                      <SelectContent>
                        {trainingDataset?.documents &&
                          trainingDataset?.documents?.map((data, _i) => (
                            <SelectItem value={data?.triggerWord} key={_i}>
                              {data?.triggerWord}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                ) : (
                  
                )} */}

                <UploadFile
                  selectedFiles={selectedFiles}
                  setSelectedFiles={setSelectedFiles}
                />
              </div>
              <div className="bg-accent h-[25rem] overflow-y-scroll rounded-lg p-2">
                {selectedFiles?.length === 0 && (
                  <div className="w-full h-full flex justify-center items-center text-center">
                    <p className="text-base text-primary-black">
                      Your selected images will appear here
                    </p>
                  </div>
                )}
                <div className="p-2 bg-white w-full h-full grid grid-cols-3 gap-3">
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
                            className="w-full h-32 object-cover rounded-lg"
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
            <div className="w-full rounded-lg border-[1.5px] border-accent shadow-lg p-5 bg-white">
              <div className="flex flex-col my-4">
                <p className="text-lg font-medium text-primary-black">
                  Training options
                </p>
                <p className="text-sm text-primary-black opacity-50">
                  Select a style, type to get your own image
                </p>
              </div>

              <div className="flex flex-col gap-1 w-full mt-1 pb-4">
                <div className="flex flex-col gap-1 my-1">
                  <p className="text-sm text-primary-black">
                    Additional Prompts (Optional)
                  </p>
                  <p className="text-xs text-primary-black opacity-50">
                    Do you have specific ideas for how you'd like your images to
                    look? Separate each prompt with a hyphen (-) if you have
                    more than one. Check out the{" "}
                    <span
                      className="text-primary-blue3 underline cursor-pointer font-medium"
                      onClick={() => navigate("/showcase")}
                    >
                      showcase page
                    </span>{" "}
                    for inspiration!
                  </p>
                </div>
                <FormField
                  control={form.control}
                  name="prompt"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your Prompt"
                          className="shad-textarea text-[10px] md:text-xs"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col gap-1 my-1">
                  <p className="text-sm text-primary-black">
                    Complementary Photo Style (Optional)
                  </p>
                  <p className="text-xs text-primary-black opacity-50">
                    {`Looking for more than just a ${
                      modeDetails?.title ?? ""
                    }? If you have any other photo styles in mind, please select one or explore the gallery for inspiration.`}
                  </p>
                </div>

                <div className="w-full">
                  <Select onValueChange={(value) => setSelectedStyle(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Style" />
                    </SelectTrigger>
                    <SelectContent>
                      {photo_shoot_ideas_options?.map((option, _i) => (
                        <SelectItem value={option?.value} key={_i}>
                          {option?.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="p-4 rounded-lg border border-accent my-4 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <p className="text-base font-medium text-primary-black">
                      Display Public
                    </p>
                    <Switch
                      className="bg-primary-blue"
                      onCheckedChange={(checked) =>
                        form.setValue("is_public", checked)
                      } // Update is_public value
                      checked={form.watch("is_public")} // Bind checked state
                    />
                  </div>
                  <p className="text-xs text-primary-black opacity-50">
                    Free Usage will be public, upgrade to make it private
                  </p>
                </div>

                {/* <div className="p-4 rounded-lg border border-accent my-2 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm md:text-base font-medium text-primary-black">
                      Do you want to use your previously uploaded training
                      images?
                    </p>
                    <Switch
                      className="bg-primary-blue"
                      onCheckedChange={() => setUseTrainingSet(!useTrainingset)}
                      checked={useTrainingset}
                    />
                  </div>
                  <p className="text-[10px] md:text-xs text-primary-black opacity-50">
                    This will have affect cost and generation time
                  </p>
                </div> */}

                <Button
                  type="submit"
                  className="shad-button_primary"
                  disabled={
                    isSubmitDisabled || isTrainingData || processingImages
                  }
                >
                  {isTrainingData || processingImages ? (
                    <div className="flex-center gap-2">
                      <Loader /> Submitting ...
                    </div>
                  ) : (
                    `Start your ${modeDetails?.title} shoot now`
                  )}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default LoraTraining;
