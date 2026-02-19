import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import toast from "react-hot-toast";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles, Trash, Upload } from "lucide-react";

import axios from "axios";
import { useState } from "react";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { packages } from "@/modelDataset";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";

const BillingFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(7, "Phone number is required"),
  email: z.string().email("Enter a valid email"),
  assetUrls: z.array(z.string()).min(1, "Upload or enter at least 1 asset"),
  promoCode: z
    .string()
    .optional()
    .or(z.literal("")) // allow empty string during live validation
    .transform((val) => (val?.trim() === "" ? undefined : val)),
});

const PackagesBillings = () => {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const pkgSlug = urlParams.get("mode");
  const pkg = packages.find((p) => p.slug === pkgSlug) ?? packages[0];

  /* ---------------------------- NEW STATES ---------------------------- */
  const [uploadMode, setUploadMode] = useState<"drive" | "upload">("upload"); // default = upload
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  /* ---------------------------- FORM SETUP ---------------------------- */
  const form = useForm<z.infer<typeof BillingFormSchema>>({
    resolver: zodResolver(BillingFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      assetUrls: [],
      promoCode: "",
    },
  });

  /* ---------------------------- PAYMENT CONFIG ---------------------------- */
  const config = {
    public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now().toString(),
    amount: Number(pkg?.amount ?? 0),
    currency: "NGN",
    payment_options: "card, banktransfer, ussd",
    customer: {
      email: form.getValues("email"),
      phone_number: form.getValues("phone"),
      name: form.getValues("name"),
    },
    customizations: {
      title: `Payment for ${pkg?.name ?? "RetenaAI"} Order`,
      description: `Payment for your selected AdCreative package`,
      logo: "",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  /* ---------------------------- FILE UPLOAD HANDLING ---------------------------- */
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (selectedFiles.length + files.length > 6) {
      toast.error("You can upload a maximum of 6 images only!");
      return;
    }

    setSelectedFiles((prev) => [...prev, ...files]);

    setIsUploading(true);
    const urls: string[] = [];

    for (const file of files) {
      const url = await uploadToCloudinary(file);
      if (url) urls.push(url);
    }

    setUploadedUrls((prev) => [...prev, ...urls]);

    form.setValue("assetUrls", [...form.getValues("assetUrls"), ...urls]);
    setIsUploading(false);
  };

  const deleteImage = (url: string) => {
    setUploadedUrls((prev) => prev.filter((u) => u !== url));
    form.setValue(
      "assetUrls",
      form.getValues("assetUrls").filter((u) => u !== url),
    );
  };

  /* ---------------------------- FORM SUBMISSION ---------------------------- */
  /* ---------------------------- FORM SUBMISSION ---------------------------- */
  async function onSubmit(values: z.infer<typeof BillingFormSchema>) {
    try {
      handleFlutterPayment({
        callback: async (response) => {
          if (response.status === "completed") {
            const payload = {
              ...values,
              assetUrls: values.assetUrls.join(","),
              promoCode: values.promoCode?.toUpperCase() || "N/A",
              date: new Date().toLocaleString(),
              slug: pkgSlug,
              transaction_id: response.transaction_id,
              amount: response.amount,
              currency: response.currency,
              tx_ref: response.tx_ref,
            };

            console.log("Payment Successful. Payload:", payload);

            // 1️⃣ SEND MAIN ORDER WEBHOOK
            await axios.post(
              "https://hook.eu2.make.com/rs5giohqwtiy25hpxiu0g8643wm7u3tc",
              payload,
            );

            const promoCode = values.promoCode?.toUpperCase()?.trim() || "N/A";
            // 2️⃣ SEND AFFILIATE WEBHOOK ONLY IF PROMO CODE IS PROVIDED
            if (promoCode !== "N/A") {
              const affiliatePayload = {
                promo_code: payload.promoCode,
                amount: payload.amount,
                commission: Math.round(payload.amount * 0.07), // 7% commission
                transaction_id: payload.transaction_id,
                paid_status: "UNPAID",
                date: new Date().toLocaleString(), // YYYY-MM-DD
              };

              await axios.post(
                "https://hook.eu2.make.com/m8vvjgbd6dcgheusttjyp8s63vprbvkh",
                affiliatePayload,
              );
            }

            // Redirect after all hooks succeed
            window.location.replace("/package-thank-you");
          }

          closePaymentModal();
        },
        onClose: () => {},
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, please try again.");
    }
  }

  const isButtonDisabled =
    !pkg?.price || // original check
    isUploading || // upload in progress
    (uploadMode === "upload"
      ? uploadedUrls.length === 0
      : form.getValues("assetUrls").length === 0);

  /* ======================================================================
     ============================= PAGE UI ================================
     ====================================================================== */

  return (
    <section className="bg-black min-h-screen text-white py-10 md:py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* ========================== LEFT SIDE ========================== */}
        <div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="mb-6 flex items-center gap-2 border-white/20 text-white hover:bg-white/10 hover:text-white bg-black"
              onClick={() => window.history.back()}
            >
              ← Back
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/packages")}
              className="mb-6 text-sm font-semibold text-[#FCA311] hover:text-[#000000] bg-transparent border border-white/20"
            >
              View all packages
            </Button>
          </div>

          <h2 className="text-4xl font-extrabold mb-3">
            Complete Your <span className="text-[#FCA311]">Order</span>
          </h2>

          <p className="text-white/70 mb-10">
            Fill in your details to start your AdCreatives delivery process.
          </p>

          <div className="mb-8 p-4 rounded-lg border border-white/20 bg-white/5">
            <p className="text-base text-white/70 mb-3">
              Not comfortable filling forms?
            </p>

            <a
              href={`https://wa.me/2348022211241?text=Hello%20RetenaAI%2C%20I%20want%20to%20order%20the%20${encodeURIComponent(
                pkg.name,
              )}%20package.%20Please%20guide%20me.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full gap-2 rounded-md bg-[#25D366] px-4 py-3 text-black font-semibold hover:opacity-90 transition"
            >
              Continue on WhatsApp
            </a>

            <p className="text-sm text-white/60 mt-2 text-center">
              We’ll guide you step-by-step and help upload your assets.
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-sm"
            >
              {/* NAME */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">
                      Full Name / Business Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="shad-input"
                        placeholder="Enter your full name or business name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* PHONE */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="shad-input"
                        placeholder="0800 000 0000"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* EMAIL */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        className="shad-input"
                        placeholder="example@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* ======================== UPLOAD SWITCH ======================== */}
              <div className="mb-4">
                <p className="shad-form_label mb-2">Assets Upload</p>

                {/* SWITCH TOGGLE */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={
                      uploadMode === "upload"
                        ? "text-primary font-semibold"
                        : "text-gray-400"
                    }
                  >
                    Upload Images
                  </span>

                  <Switch
                    checked={uploadMode === "drive"}
                    onCheckedChange={(checked) =>
                      setUploadMode(checked ? "drive" : "upload")
                    }
                  />

                  <span
                    className={
                      uploadMode === "drive"
                        ? "text-primary font-semibold"
                        : "text-gray-400"
                    }
                  >
                    Drive Link
                  </span>
                </div>

                {/* DRIVE MODE */}
                {uploadMode === "drive" && (
                  <FormField
                    control={form.control}
                    name="assetUrls"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="shad-form_label">
                          Google Drive Link
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="url"
                            placeholder="https://drive.google.com/..."
                            className="shad-input"
                            onChange={(e) => field.onChange([e.target.value])}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {/* UPLOAD MODE */}
                {uploadMode === "upload" && (
                  <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-2 cursor-pointer bg-black text-white py-2 px-3 rounded-lg w-fit">
                      <Upload className="w-4 h-4" />
                      <span>Upload Images (max 6)</span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={handleFileSelect}
                      />
                    </label>

                    {isUploading && (
                      <p className="text-sm text-primary">Uploading...</p>
                    )}

                    <div className="grid grid-cols-3 gap-3">
                      {uploadedUrls.map((url, idx) => (
                        <div key={idx} className="relative group">
                          <img
                            src={url}
                            className="w-full h-40 object-cover rounded-md"
                          />
                          <button
                            type="button"
                            onClick={() => deleteImage(url)}
                            className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100"
                          >
                            <Trash className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    <FormMessage>
                      {form.formState.errors.assetUrls?.message}
                    </FormMessage>
                  </div>
                )}
                <FormField
                  control={form.control}
                  name="promoCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="shad-form_label">
                        Refferal Code (Optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="shad-input uppercase"
                          placeholder="Enter Refferal Code if you have one"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* SUBMIT */}
              <Button
                type="submit"
                className="shad-button_primary md:w-[100%] mt-3"
                disabled={isButtonDisabled}
              >
                <Sparkles className="text-white h-6 w-6" />
                {`Pay ${pkg?.price}`}
              </Button>
            </form>
          </Form>
        </div>

        {/* ======================= ORDER SUMMARY ======================= */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-fit sticky top-10">
          <h3 className="text-2xl font-bold mb-6">Order Summary</h3>

          <div className="space-y-3 mb-6">
            <p className="text-white/80 text-lg font-semibold">{pkg.name}</p>
            <p className="text-4xl font-extrabold text-[#FCA311]">
              {pkg?.price.toLocaleString()}
            </p>
          </div>

          <div className="border-t border-white/10 my-6" />

          <h4 className="text-white/70 text-sm mb-3">What’s Included</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            {pkg.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#FCA311] mt-1">•</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="border-t border-white/10 my-6" />

          <p className="text-xs text-white/60">
            By continuing, you agree to our Terms, Privacy Policy, and Refund
            Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackagesBillings;
