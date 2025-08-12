import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ResetPasswordValidationSchema } from "@/lib/validation";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "@/lib/appwrite/api";

const ResetPassword = () => {
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  const secret = urlParams.get("secret");
  const userId = urlParams.get("userId");

  // 1. Define your form.
  const form = useForm<z.infer<typeof ResetPasswordValidationSchema>>({
    resolver: zodResolver(ResetPasswordValidationSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(
    values: z.infer<typeof ResetPasswordValidationSchema>
  ) {
    const response = await resetPassword(
      userId!,
      secret!,
      values?.newPassword,
      values?.confirmPassword
    );
    if (response) {
      toast.success("Password Reset successful");
      navigate("/sign-in");
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
          Reset Password
        </h2>
        <p className="text-primary-black font-light small-medium md:base-regular">
          Please input your new password
        </p>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">New Password</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">
                  Confirm Password
                </FormLabel>
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

export default ResetPassword;
