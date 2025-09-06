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
import { available_masterclasses } from "@/modelDataset";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import axios from "axios";

// Validation schema
const BillingFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(7, "Phone number is required"),
  email: z.string().email("Enter a valid email"),
  country: z.string().min(2, "Country is required"),
});

const Billing = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const programSlug = urlParams.get("program");
  const application_fee = "55000";

  const programDetais = available_masterclasses?.find(
    (item) => item?.slug === programSlug
  );

  const form = useForm<z.infer<typeof BillingFormSchema>>({
    resolver: zodResolver(BillingFormSchema),
    mode: "onChange", // ✅ validates live
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      country: "",
    },
  });

  const config = {
    public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now().toString(),
    amount: Number(application_fee),
    currency: "NGN",
    payment_options: "card, banktransfer, ussd",
    customer: {
      email: form.getValues("email"),
      phone_number: form.getValues("phone"),
      name: form.getValues("name"),
    },
    customizations: {
      title: `Payment for ${
        programDetais?.program_name ?? "RetenaAI"
      } Application Fee`,
      description: `Application fee for the AI Photography Masterclass`,
      logo: "",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  async function onSubmit(values: z.infer<typeof BillingFormSchema>) {
    try {
      // ✅ Send data to webhook
      await axios.post(
        "https://hook.eu2.make.com/itr9bcpug7bj8gx6ecouhiux5a2kkcbo",
        {
          ...values,
          program: programDetais?.program_name ?? "AI Photography Masterclass",
          slug: programSlug,
        }
      );

      // ✅ Start payment after successful webhook submission
      handleFlutterPayment({
        callback: async (response) => {
          if (response.status === "successful") {
            window.location.replace("/retenaai-academy/thank-you");
          }
          window.location.replace("/retenaai-academy/thank-you");
          closePaymentModal();
        },
        onClose: () => {},
      });
    } catch (error) {
      console.error("Webhook error:", error);
      alert("Failed to submit details. Please try again.");
    }
  }

  // ✅ Button disabled if form is invalid OR no programSlug
  const isButtonDisabled = !programSlug || !form.formState.isValid;

  return (
    <div className="container py-4 mt-7 md:mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-2">
        {/* Left: Payment Info */}
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col">
            <h2 className="text-[#FCA311] text-2xl font-medium">
              Begin Your AI Photography Masterclass Journey
            </h2>
            <p className="text-primary-black text-base opacity-80 ml-1">
              You’re one step away from joining RetenaAI’s intensive 4-week
              Masterclass. Fill in your details and pay your application fee to
              secure your spot.
            </p>
          </div>

          {/* ✅ Form Section */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-sm"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">Full Name</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">Country</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
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
                Pay &#x20A6;{application_fee}
              </Button>
            </form>
          </Form>
        </div>

        {/* Right: Program Overview */}
        <div className="w-full h-[45rem] bg-white overflow-y-scroll scrollbar-hide">
          <section className="w-full bg-white px-6 md:px-12 py-10 rounded-lg shadow-md space-y-8">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-gray-900">
                Masterclass Overview
              </h2>
              <p className="text-gray-600 text-sm">
                What you get when you join the AI Photography Masterclass
              </p>
            </div>

            {/* Overview Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base text-gray-800">
              <div>
                <strong>Program:</strong>{" "}
                {programDetais?.program_name ?? "AI Photography Masterclass"}
              </div>
              <div>
                <strong>Application Fee:</strong> ₦10,000.00
              </div>
              <div>
                <strong>Program Length:</strong> 4 Weeks
              </div>
              <div>
                <strong>Start Date:</strong>{" "}
                {programDetais?.cohort_start_date ?? "__ __"}
              </div>
              <div>
                <strong>Location:</strong> 100% Online
              </div>
              <div>
                <strong>Live Classes:</strong> Yes
              </div>
              <div>
                <strong>Skill Level:</strong> Beginner Friendly
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2">Tuition</h3>
            <div className="border border-gray-200 rounded-lg p-5 shadow-sm bg-[#fef9f4] relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-[#FCA311] text-white text-xs font-semibold px-2 py-1 rounded">
                68% OFF
              </div>
              <p className="text-sm text-primary-blue3 font-semibold">
                One-Time Payment
              </p>
              <p className="text-green-600 text-xs mb-2">Pay once</p>
              <h3 className="text-xl font-bold mb-2 flex flex-col">
                <span className="line-through text-gray-400 text-base mr-2">
                  ₦170,000
                </span>
                <span className="text-green-600">₦55,000</span>
              </h3>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Access to Masterclass recordings</li>
                <li>Live interactive sessions</li>
                <li>Downloadable resources & templates</li>
                <li>Community & peer support</li>
                <li>Portfolio-ready projects</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Billing;
