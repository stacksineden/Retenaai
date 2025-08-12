import * as z from "zod";

export const GenerateImageSchema = z.object({
  prompt: z.string().min(2, { message: "Prompt too short" }),
  dimension: z.string(),
  is_public: z.boolean(),
  is_raw: z.boolean().optional(),
});

export const TrainingLoraSchema = z.object({
  is_public: z.boolean(),
});

export const PromoValidationSchema = z.object({
  code: z.string(),
});

export const ImageUpscalingSchema = z.object({
  image: z.array(z.string()),
});

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

export const SigninValidationSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});
export const ForgetPasswordValidationSchema = z.object({
  email: z.string().email(),
});

export const ResetPasswordValidationSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
  });

export const BusinessRequestSchema = z.object({
  subject: z.string(),
  email: z.string(),
  additonal_info: z.string().optional(),
});
