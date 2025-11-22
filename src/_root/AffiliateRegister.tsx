import { useEffect } from "react";
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
import { Sparkles } from "lucide-react";

import axios from "axios";

// 1. Define the Affiliate Registration Schema
const AffiliateFormSchema = z.object({
  name: z.string().min(2, "Full Name / Business Name is required"),
  phone: z.string().min(7, "Phone number is required"),
  email: z.string().email("Enter a valid email"),
  bankName: z.string().min(2, "Bank Name is required for payouts"),
  accountNumber: z.string().min(10, "Account Number is required"),
});

const AffiliateRegister = () => {
  /* ------------------------------------------------------------
      🚨 AUTO-REDIRECT IF USER ALREADY HAS A PROMO CODE
     ------------------------------------------------------------ */
  useEffect(() => {
    const existingCode = localStorage.getItem("RETE_AFFILIATE_CODE");
    if (existingCode) {
      window.location.replace(`/affiliate-success?code=${existingCode}`);
    }
  }, []);

  const form = useForm<z.infer<typeof AffiliateFormSchema>>({
    resolver: zodResolver(AffiliateFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      bankName: "",
      accountNumber: "",
    },
  });

  const AFFILIATE_WEBHOOK_URL = "https://hook.eu2.make.com/pcr8em1rrdlmugbvkvac5w6g64hsyxji";

  /* ------------------------------------------------------------
      🔥 GENERATE PROMO CODE (FIRSTNAME + RANDOM)
     ------------------------------------------------------------ */
  const generatePromoCode = (fullName: string) => {
    const firstName = fullName.split(" ")[0].toUpperCase();
    const random = Math.random().toString(36).substring(2, 7).toUpperCase();
    return `${firstName}-${random}`;
  };

  async function onSubmit(values: z.infer<typeof AffiliateFormSchema>) {
    console.log("Affiliate Registration Data:", values);

    // 1️⃣ Create promo code
    const promoCode = generatePromoCode(values.name);

    try {
      toast.loading("Registering affiliate...");

      // 2️⃣ Save promo code in LocalStorage so success page can persist
      localStorage.setItem("RETE_AFFILIATE_CODE", promoCode);

      // 3️⃣ Send to webhook
      await axios.post(AFFILIATE_WEBHOOK_URL, {
        ...values,
        promoCode,
        registrationDate: new Date().toISOString(),
      });

      toast.dismiss();
      toast.success("Registration successful! Your code is ready.");

      // 4️⃣ Redirect to success page WITH promoCode as query param
      window.location.replace(`/affiliate-success?code=${promoCode}`);

    } catch (error) {
      toast.dismiss();
      console.error(error);
      toast.error("Registration failed. Please try again.");
    }
  }

  return (
    <section className="bg-black min-h-screen text-white py-10 md:py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SIDE FORM */}
        <div>
          <Button
            variant="outline"
            className="mb-6 flex items-center gap-2 border-white/20 text-white hover:bg-white/10 hover:text-white bg-black"
            onClick={() => window.history.back()}
          >
            ← Back
          </Button>

          <h2 className="text-4xl font-extrabold mb-3">
            Join the <span className="text-[#FCA311]">Affiliate</span> Network
          </h2>

          <p className="text-white/70 mb-10">
            Fill in your details to register and start earning 7% commission on every referral.
          </p>

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
                      Full Name / Account Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="shad-input"
                        placeholder="Enter your full name or account Name"
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
                    <FormLabel className="shad-form_label">Phone Number</FormLabel>
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

              {/* BANK NAME */}
              <FormField
                control={form.control}
                name="bankName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">
                      Bank Name (For Commission Payouts)
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="shad-input"
                        placeholder="e.g., Access Bank, Zenith Bank"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* ACCOUNT NUMBER */}
              <FormField
                control={form.control}
                name="accountNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">Account Number</FormLabel>
                    <FormControl>
                      <Input
                        className="shad-input"
                        placeholder="Enter your 10-digit account number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* SUBMIT */}
              <Button
                type="submit"
                className="shad-button_primary md:w-[100%] mt-3"
              >
                <Sparkles className="text-white h-6 w-6" />
                Register & Get Promo Code
              </Button>
            </form>
          </Form>
        </div>

        {/* RIGHT SIDE BENEFITS */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-fit sticky top-10">
          <h3 className="text-2xl font-bold mb-6">Why Join RetenaAI Affiliates?</h3>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <Sparkles className="text-[#FCA311] h-6 w-6 shrink-0" />
              <div>
                <p className="text-lg font-semibold">High 7% Commission</p>
                <p className="text-white/70 text-sm">
                  Earn up to ₦20,000 per referral, depending on the package purchased.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Sparkles className="text-[#FCA311] h-6 w-6 shrink-0" />
              <div>
                <p className="text-lg font-semibold">Rapid 24-Hour Settlement</p>
                <p className="text-white/70 text-sm">
                  Get paid daily—commissions are settled every 24 hours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Sparkles className="text-[#FCA311] h-6 w-6 shrink-0" />
              <div>
                <p className="text-lg font-semibold">Automated Tracking</p>
                <p className="text-white/70 text-sm">
                  A unique promo code ensures accurate tracking across our platform.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 my-6" />

          <p className="text-sm text-white/60">
            Upon successful registration, you will instantly receive your promo code and be redirected to start promoting immediately!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AffiliateRegister;
