//define schema for signup form

import { z } from "zod";

// define type for formState

// define type for formData
export type FormData = z.infer<typeof SignUpFormSchema>;
export const SignUpFormSchema = z
  .object({
    // name: z
    //   .string()
    //   .min(2, { message: "Name must be at least 2 characters long." })
    //   .trim(),
    email: z.string().email({ message: "Please enter a valid email." }).trim(),
    password: z
      .string()
      .min(8, { message: "Be at least 8 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
      .regex(/[0-9]/, { message: "Contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character.",
      })
      .trim(),
    confirmPassword: z
      .string()
      .min(8, {
        message: "Confirm Password must be at least 8 characters long",
      })
      .regex(/[a-zA-Z]/, {
        message: "Confirm Password must contain at least one letter.",
      })
      .regex(/[0-9]/, {
        message: "Confirm Password must contain at least one number.",
      })
      .regex(/[^a-zA-Z0-9]/, {
        message:
          "Confirm Password must contain at least one special character.",
      })
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type FormState =
  | {
      errors?: {
        // name?: string[];
        email?: string[];
        password?: string[];
        confirmPassword?: string[];
      };
      message?: string;
      id?: string;
    }
  | undefined;

export type SessionPayload = {
  userId: string | number;
  expiresAt: Date;
};
