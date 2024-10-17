import * as z from "zod";

export const GenerateImageSchema = z.object({
  prompt: z.string().min(2, { message: "Prompt too short" }),
  dimension: z.string(),
  is_public: z.boolean(),
});

export const TrainingLoraSchema = z.object({
  prompt: z.string().optional(),
  is_public: z.boolean(),
  trigger_word: z.string(),
});

export const ImageUpscalingSchema = z.object({
  image: z.array(z.string()),
});

export const SignupValidationSchema = z.object({
  name: z.string().min(2, { message: "Name too short" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
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
