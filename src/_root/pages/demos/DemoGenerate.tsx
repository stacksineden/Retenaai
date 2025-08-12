import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { GenerateImageSchema } from "@/lib/validation";
import { Switch } from "@/components/ui/switch";
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
import { useNavigate, useSearchParams } from "react-router-dom";
import { credit_charge, demo_products, ratios } from "@/modelDataset";

const DemoGenerate = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  const demoData = demo_products?.find((el) => el?.trigger_word === mode);

  const [selectedRatio, setSelectedRatio] = useState<string>("");
  const [selectedNumber, setSelectedNumber] = useState<string>("");

  const handleSelect = (label: string) => {
    setSelectedRatio(label);
    form.setValue("dimension", label);
  };

  const form = useForm<z.infer<typeof GenerateImageSchema>>({
    resolver: zodResolver(GenerateImageSchema),
    defaultValues: {
      prompt: `${demoData?.prompt}`,
      dimension: "",
      is_public: false,
    },
  });

  async function onSubmit(values: z.infer<typeof GenerateImageSchema>) {
    console.log(selectedNumber);
    console.log(values);
  }

  return (
    <div className="container py-4 mt-6 md:mt-0">
      <div className="w-full flex flex-col gap-2 my-3">
        <h2 className="text-primary-black text-2xl md:text-4xl font-semibold">
          {mode ?? "-- --"} Image Generator
        </h2>
        {/* <p className="text-primary-blue3 text-sm md:text-base pl-2">
          {modeDetails?.text ?? "-- --"}
        </p> */}
        {/* <ExamplePhotoModal images={modeDetails?.images ?? []} /> */}
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 md:mt-[rem]">
        <div className="w-full rounded-lg border-[1.5px] border-accent shadow-lg p-5 bg-white">
          <div className="flex flex-col my-4">
            <p className="text-lg font-medium text-primary-black">
              Generate Image
            </p>
            <p className="text-sm text-primary-black opacity-50">
              Enter a prompt prefixed by {`${mode}`} to create your own image.
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-1 w-full mt-1 pb-4"
            >
              <div className="flex flex-col gap-1 my-1">
                <p className="text-xs md:text-sm text-primary-black">Prompt</p>
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
                        className="shad-textarea text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col gap-1 my-1">
                <p className="text-sm text-primary-black">Image Dimensions</p>
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

              <div className="w-full my-2 flex flex-col gap-2">
                <p className="text-sm text-primary-black">Number of images</p>
                <Select onValueChange={(value) => setSelectedNumber(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Number of images" />
                  </SelectTrigger>
                  <SelectContent>
                    {["1", "2", "3", "4"]?.map((option, _i) => (
                      <SelectItem value={option} key={_i}>
                        {option}
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

              <Button
                type="submit"
                className="shad-button_primary"
                onClick={() => navigate("/app")}
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
            <p className="text-sm text-primary-black opacity-50">
              Image generation takes about 30 seconds - click on images to
              generate
            </p>
          </div>

          <div className="w-full border border-accent relative h-[25rem] md:h-[35rem] overflow-y-scroll space-y-2">
            {demoData?.image_generated &&
              demoData?.image_generated?.map((img, _i) => (
                <img
                  src={`${img ? img : "/assets/image-placeholder.png"}`}
                  alt="images"
                  className="h-full w-full object-contain cursor-pointer"
                  //   onClick={() => window.open(img, "_blank")}
                />
              ))}
            {demoData?.image_generated?.length === 0 && (
              <img
                src={"/assets/image-placeholder.png"}
                alt="images"
                className="h-full w-full object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoGenerate;
