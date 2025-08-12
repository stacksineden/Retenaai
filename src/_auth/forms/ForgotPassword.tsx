import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ForgetPasswordValidationSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { forgotPassword } from "@/lib/appwrite/api";
import toast from "react-hot-toast";


const ForgotPassword = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof ForgetPasswordValidationSchema>>({
    resolver: zodResolver(ForgetPasswordValidationSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(
    values: z.infer<typeof ForgetPasswordValidationSchema>
  ) {
    const response = await forgotPassword(values?.email);
    if (response) {
      toast.success("An Email has been set to reset your password");
    }
    if (response instanceof Error) {
      // Assuming err.message contains the API error message
      return toast.error(
        response?.message || "Reset password failed, please try again."
      );
    }
  }

  return (
    <Form {...form}>
      <div className="w-[85%] md:w-[65%] flex-col">
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12 text-[#FCA311]">
          Forgot Password
        </h2>
        <p className="text-primary-black font-light small-medium md:base-regular">
          Please Input your email to reset password
        </p>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Email</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary">
            Reset Password
          </Button>
        </form>
      </div>
    </Form>
  );
};

export default ForgotPassword;
