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
import { Input } from "@/components/ui/input";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { packages } from "@/modelDataset";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import axios from "axios";

const BillingFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(7, "Phone number is required"),
  email: z.string().email("Enter a valid email"),
  driveLink: z.string().url("Enter a valid Google Drive link"),
});

const PackagesBillings = () => {
  const urlParams = new URLSearchParams(window.location.search);

  const pkgSlug = urlParams.get("mode");
  const pkg = packages.find((p) => p.slug === pkgSlug) ?? packages[0];
  console.log("Selected package:", pkg);

  const form = useForm<z.infer<typeof BillingFormSchema>>({
    resolver: zodResolver(BillingFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      driveLink: "",
    },
  });

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

  async function onSubmit(values: z.infer<typeof BillingFormSchema>) {
    console.log("Submitted values:", values);
    // Webhook & payment logic goes here
    try {
      handleFlutterPayment({
        callback: async (response) => {
           console.log("response:", response);
          if (response.status === "completed") {
            await axios.post(
              "https://hook.eu2.make.com/rs5giohqwtiy25hpxiu0g8643wm7u3tc",
              {
                ...values,
                slug: pkgSlug,
                transaction_id: response.transaction_id,
                amount: response.amount,
                currency: response.currency,
                tx_ref: response.tx_ref
              }
            );
            window.location.replace("/package-thank-you");
          }
          // window.location.replace("/package-thank-you");
          closePaymentModal();
        },
        onClose: () => {},
      });
    } catch (error) {}
  }

  const handleFlutterPayment = useFlutterwave(config);

  const isButtonDisabled = !pkg?.price || !form.formState.isValid;

  return (
    <section className="bg-black min-h-screen text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT FORM */}
        <div>
          {/* BACK BUTTON (NEW) */}
          <Button
            variant="outline"
            className="mb-6 flex items-center gap-2 border-white/20 text-white hover:bg-white/10 hover:text-white bg-black"
            onClick={() => window.history.back()}
          >
            ← Back
          </Button>

          <h2 className="text-4xl font-extrabold mb-3">
            Complete Your <span className="text-[#FCA311]">Order</span>
          </h2>
          <p className="text-white/70 mb-10">
            Fill in your details to start your AdCreatives delivery process.
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-sm"
            >
              {/* FULL NAME */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">
                      Full Name / Business Name
                    </FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
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
                      <Input type="text" className="shad-input" {...field} />
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
                      <Input type="email" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* DRIVE LINK */}
              <FormField
                control={form.control}
                name="driveLink"
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
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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

        {/* ORDER SUMMARY */}
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
