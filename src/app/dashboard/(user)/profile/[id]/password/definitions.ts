import { z } from "zod";

export const UpdatePasswordSchema = z.object({
//   id: z.string(),
  oldPassword: z.string().min(8, "Password must be at least 8 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
});

export type UpdatePassword = z.infer<typeof UpdatePasswordSchema>;
export type FormState =
  | {
      errors?: {
        oldPassword?: string[];
        password?: string[];
        confirmPassword?: string[];
      };
      message?: string;
      // id?: string;
    }
  | undefined;
