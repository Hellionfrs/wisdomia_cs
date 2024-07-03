import { z } from "zod";
// omit id from the schema
export type FormData = User;
export const UserSchema = z.object({
  id: z.string(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  middleName: z.string().min(2, "Middle name must be at least 2 characters"),
  surname: z.string().min(2, "Surname must be at least 2 characters"),
  secondSurname: z
    .string()
    .min(2, "Second surname must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  cellphone: z.string().min(9, "Cellphone must be at least 9 digits"),
  // password: z
  //   .string()
  //   .min(8, { message: "Be at least 8 characters long" })
  //   .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
  //   .regex(/[0-9]/, { message: "Contain at least one number." })
  //   .regex(/[^a-zA-Z0-9]/, {
  //     message: "Contain at least one special character.",
  //   })
  //   .trim(),
});

// extract editUserSchema without id
export const EditUserSchema = UserSchema.omit({ id: true });

export type User = z.infer<typeof UserSchema>;

export type FormState =
  | {
      errors?: {
        name?: string[];
        middleName?: string[];
        surname?: string[];
        secondSurname?: string[];
        email?: string[];
        cellphone?: string[];
        // password?: string[];
      };
      message?: string;
      // id?: string;
    }
  | undefined;
