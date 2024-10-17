import { useState } from "react";
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
import { SigninValidationSchema } from "@/lib/validation";
import Loader from "@/components/shared/Loader";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useUserContext } from "@/context/AuthContext";
import { useSignInAccount } from "@/lib/tanstack-query/queriesAndMutation";
// import Oauth from "./Oauth";

const SignInForm = () => {
  const { checkAuthUser } = useUserContext();
  const navigate = useNavigate();

  const [isCheckingAuth, setIsCheckingAuth] = useState(false);

  const { mutateAsync: signInAccount, isPending: isLogginInUser } =
    useSignInAccount();

  // 1. Define your form.
  const form = useForm<z.infer<typeof SigninValidationSchema>>({
    resolver: zodResolver(SigninValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SigninValidationSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    const session = await signInAccount({
      email: values.email,
      password: values.password,
    });
    // if (session) {
    //   return toast.success("Login Successful.");
    // }
    if (session instanceof Error) {
      // Assuming err.message contains the API error message
      if (
        session?.message ===
        "Creation of a session is prohibited when a session is active."
      ) {
        navigate("/app");
      }
      return toast.error(
        session?.message || "Sign in failed, please try again."
      );
    }
    setIsCheckingAuth(true);
    const isLoggedIn = await checkAuthUser();
    if (isLoggedIn) {
      form.reset();
      setIsCheckingAuth(false);
      navigate("/app");
    } else {
      setIsCheckingAuth(false);
      return toast.error("Sign up failed, please try again.");
    }
  }

  return (
    <Form {...form}>
      <div className="w-[85%] md:w-[60%] flex-center flex-col">
        <Link to="/" className="w-[150px] md:w-[170px]">
          <img
            src="/assets/logo.png"
            alt="brand"
            className="w-full object-contain"
          />
        </Link>
        <h2 className="h3-bold md:h2-bold pt-5 text-primary-black">
          Log in to your account
        </h2>
        <p className="text-primary-blue font-light small-medium md:base-regular">
          Welcome back, Please enter your details
        </p>
        {/* <Oauth /> */}
        {/* <p className="text-primary-black text-sm font-medium">or</p> */}
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

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="shad-button_primary"
            disabled={isLogginInUser || isCheckingAuth}
          >
            {isLogginInUser || isCheckingAuth ? (
              <div className="flex-center gap-2">
                <Loader /> Logging in ...
              </div>
            ) : (
              "Sign in"
            )}
          </Button>
          <Link
            className="w-full flex items-center justify-end cursor-pointer hover:text-primary-blue text-sm text-primary-black"
            to="/forgot-password"
          >
            Forgot password
          </Link>
          <p className="text-small-regular text-primary-black text-center mt-2">
            First time user?
            <Link
              to="/sign-up"
              className="text-primary-blue text-small-semibold ml-1"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SignInForm;
