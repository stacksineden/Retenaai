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
import { Textarea } from "@/components/ui/textarea";
import { GenerateImageSchema } from "@/lib/validation";
import { Switch } from "@/components/ui/switch";
import { Fullscreen } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { credit_charge, flux_styles_data, ratios } from "@/modelDataset";
import ExamplePhotoModal from "@/components/shared/ExamplePhotoModal";
import {
  useCreateUserGeneration,
  useUpdateUserCreditBalance,
} from "@/lib/tanstack-query/queriesAndMutation";
import { useUserContext } from "@/context/AuthContext";
import { imageGenFluxpro } from "@/lib/replicate/api";
import { IUpdateCredit } from "@/types";
import toast from "react-hot-toast";
import { uploadImageFromUrl } from "@/lib/cloudinary";

const FluxRealismGenerate = () => {
  const [selectedRatio, setSelectedRatio] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [imagePrev, setImagePrev] = useState("");

  const { user } = useUserContext();

  const { mutateAsync: updateBalance } = useUpdateUserCreditBalance();
  const { mutateAsync: createGeneration } = useCreateUserGeneration();

  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  // console.log(mode, "....");

  const handleSelect = (label: string) => {
    setSelectedRatio(label);
    form.setValue("dimension", label);
  };

  const form = useForm<z.infer<typeof GenerateImageSchema>>({
    resolver: zodResolver(GenerateImageSchema),
    defaultValues: {
      prompt: `${
        mode === "embed_text_flux"
          ? 'a photo of a "[INSERT THING]" with the text "[INSERT TEXT]"'
          : mode === "video_game_style"
          ? "IMG_0134.JPG: [subject] --style ps2 screenshot"
          : "IMG_1018.CR2:"
      }`,
      dimension: "",
      is_public: false,
    },
  });

  // a photo of a "[INSERT THING]" with the text "[INSERT TEXT]"

  const [modeDetails, setModeDetails] = useState<
    | {
        title: string;
        text: string;
        query_slug: string;
        images: string[];
      }
    | undefined
  >(undefined);

  function getModeData(mode: string) {
    if (!mode) return;
    const result = flux_styles_data?.find((item) => item?.query_slug === mode);
    setModeDetails(result);
    return result;
  }

  React.useEffect(() => {
    getModeData(mode ?? "");
  }, [mode]);

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof GenerateImageSchema>) {
    if (user?.creditBalance < credit_charge.FLUXPROCREDIT) {
      toast.error(
        "You don't have enough credits to complete this action. Please purchase more credits to proceed."
      );
    }

    if (!values.prompt || !values.dimension) {
      toast.error("Please provide both a prompt and dimension for your image.");
      return;
    }
    setLoading(true);
    if (
      mode === "flux-ultra-realistic" ||
      mode === "embed_text_flux" ||
      mode === "video_game_style"
    ) {
      const payload = {
        prompt: values?.prompt,
        aspect_ratio: values?.dimension,
        output_format: "webp",
      };
      const response = await imageGenFluxpro(payload);
      // console.log(response, "res data");
      if (response) {
        setLoading(false);
        toast.success(response?.message ?? "");
        setImagePrev(response?.data);
        const newBalance = user?.creditBalance - credit_charge.FLUXPROCREDIT;
        const updatePayload: IUpdateCredit = {
          userId: user.id,
          balance: newBalance,
        };
        const creditsUpdate = await updateBalance(updatePayload);
        if (creditsUpdate) {
          // send to generations database and add the public flag if is public is true
          const cloudurl = await uploadImageFromUrl(response?.data);
          if (cloudurl) {
            toast.success("Image Uploaded succesfully");
            const generationPayload = {
              prompt: values?.prompt,
              catergory: "flux",
              url: cloudurl,
              creator: user.id,
            };
            const imageSaved = await createGeneration(generationPayload);
            if (imageSaved) {
              toast.success("Images saved successfully");
            }
            if (!imageSaved) {
              toast.error("unable to save image");
            }
          }
          if (!cloudurl) {
            toast.error("Image Upload failed");
          }
        }
      }
      if (!response) {
        setLoading(false);
        toast.error("image generation falled");
      }
    }
  }

  const isButtonDisabled =
    loading || !form.watch("prompt") || !form.watch("dimension");

  return (
    <div className="container py-4 mt-6 md:mt-0">
      <div className="w-full flex flex-col gap-2 my-3">
        <h2 className="text-primary-black text-2xl md:text-4xl font-semibold">
          {modeDetails?.title ?? "-- --"}
        </h2>
        <p className="text-primary-blue3 text-sm md:text-base pl-2">
          {modeDetails?.text ?? "-- --"}
        </p>
        <ExamplePhotoModal images={modeDetails?.images ?? []} />
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 md:mt-[4rem]">
        <div className="w-full rounded-lg border-[1.5px] border-accent shadow-lg p-5 bg-white">
          <div className="flex flex-col my-4">
            <p className="text-lg font-medium text-primary-black">
              Generate Image
            </p>
            <p className="text-sm text-primary-black opacity-50">
              Enter a prompt (preferably prefixed by{" "}
              {`${
                mode === "embed_text_flux"
                  ? 'a photo of a "[INSERT THING]" with the text "[INSERT TEXT]"'
                  : mode === "video_game_style"
                  ? "IMG_0134.JPG: [subject] --style ps2 screenshot"
                  : "IMG_1018.CR2:"
              }`}
              ) to create your own image.
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-1 w-full mt-1 pb-4"
            >
              <div className="flex flex-col gap-1 my-1">
                <p className="text-sm text-primary-black">Prompt</p>
                <p className="text-xs text-primary-black opacity-50"> 
                  Describe your image, Default: a person. 
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
                  Image Dimensions
                </p>
                <p className="text-xs text-primary-black opacity-50">
                  Select the aspect ratio for your image
                </p>
              </div>

              <div className="grid grid-cols-7 gap-2 w-full">
                {ratios.map((ratio) => (
                  <div
                    key={ratio.label}
                    onClick={() => handleSelect(ratio.label)}
                    className={`border-2 rounded-lg h-[70px] flex-col gap-1 flex items-center justify-center cursor-pointer ${
                      selectedRatio === ratio.label
                        ? "bg-accent"
                        : "border-accent"
                    }`}
                  >
                    <div
                      className={`border border-primary-black ${ratio.width} ${ratio.height}`}
                    ></div>
                    <p className="text-primary-black text-xs font-medium">
                      {ratio.label}
                    </p>
                  </div>
                ))}
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
                <p className=":text-xs text-primary-black opacity-50">
                  Free Usage will be public, upgrade to make it private
                </p>
              </div>

              <Button
                type="submit"
                className="shad-button_primary"
                disabled={isButtonDisabled}
              >
                {`Generate (${credit_charge.FLUXPROCREDIT} credits)`}
              </Button>
            </form>
          </Form>
        </div>

        <div className="w-full h-full rounded-lg border-[1.5px] border-accent shadow-lg p-5 flex flex-col gap-2 bg-white">
          <div className="flex flex-col my-4">
            <p className="text-lg font-medium text-primary-black">
              Generated Image
            </p>
            {loading ? (
              <p className="text-sm text-primary-black opacity-50">
                Please wait for about 30 seconds while we generate your image...
              </p>
            ) : (
              <p className="text-sm text-primary-black opacity-50">
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

export default FluxRealismGenerate;
