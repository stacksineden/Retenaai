import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Loader from "@/components/shared/Loader";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserAccount } from "@/lib/tanstack-query/queriesAndMutation";
import { useUserContext } from "@/context/AuthContext";

// Validation schema
export const SignupValidationSchema = z
  .object({
    firstName: z.string().min(2, { message: "First name too short" }),
    lastName: z.string().min(2, { message: "Last name too short" }),
    email: z.string().email({ message: "Invalid email address" }),
    phoneNumber: z.string().min(7, { message: "Phone number too short" }),
    country: z.string().min(2, { message: "Country is required" }),
    state: z.string().min(2, { message: "State is required" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm Password must be at least 8 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignUpForm = () => {
  const navigate = useNavigate();
  const [isCheckingAuth, setIsCheckingAuth] = useState(false);
  const { checkAuthUser } = useUserContext();

  const { mutateAsync: createUserAccount, isPending: isCreatingUser } =
    useCreateUserAccount();

  // Form setup with default values
  const form = useForm<z.infer<typeof SignupValidationSchema>>({
    resolver: zodResolver(SignupValidationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      country: "",
      state: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignupValidationSchema>) {
    console.log("Form submitted with values:", values);
    const newUser = await createUserAccount(values);
    if (newUser instanceof Error) {
      return toast.error(
        newUser?.message || "Sign up failed, please try again."
      );
    }

    if (newUser) {
      toast.success(
        "A verification email has been sent. Please verify your account"
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
    }
  }

  return (
    <Form {...form}>
      <div className="w-[85%] md:w-[85%] flex-center flex-col">
        <div className="w-full py-4 flex flex-col gap-1">
          <h2 className="h3-bold md:h2-bold pt-5 text-[#FCA311] text-lg">
            Join RetenaAI
          </h2>
          <p className="text-primary-blue font-light small-medium md:base-regular text-base">
            Take your first step towards learning, growth, and innovation with
            RetenaAI.
          </p>
        </div>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-2 md:mt-4"
        >
          {/* First & Last Name */}
          <div className="flex flex-col md:flex-row items-center gap-2 w-full">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="shad-form_label">First Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="shad-input"
                      {...field}
                      placeholder="First Name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="shad-form_label">Last Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="shad-input"
                      {...field}
                      placeholder="Last Name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Email & Phone */}
          <div className="flex flex-col md:flex-row items-center gap-2 w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="shad-form_label">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="shad-input"
                      {...field}
                      placeholder="Email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="shad-form_label">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="shad-input"
                      {...field}
                      placeholder="+2347062837954"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Country & State */}
          <div className="flex flex-col md:flex-row items-center gap-2 w-full">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="shad-form_label">
                    Country of Residence
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="shad-input"
                      {...field}
                      placeholder="Country of Residence"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="shad-form_label">
                    State of Residence
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="shad-input"
                      {...field}
                      placeholder="State of Residence"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Password & Confirm Password */}
          <div className="flex flex-col md:flex-row items-center gap-2 w-full">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="shad-form_label">Password</FormLabel>
                  <FormControl>
                    <Input type="password" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="shad-form_label">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input type="password" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="shad-button_primary"
            disabled={isCreatingUser || isCheckingAuth}
          >
            {isCreatingUser || isCheckingAuth ? (
              <div className="flex-center gap-2">
                <Loader /> Loading...
              </div>
            ) : (
              "Sign Up"
            )}
          </Button>
          <p className="text-small-regular text-[#FCA311] text-center mt-2">
            Already a Retenan?
            <Link
              to="/sign-in"
              className="text-primary-blue text-small-semibold ml-1"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SignUpForm;
