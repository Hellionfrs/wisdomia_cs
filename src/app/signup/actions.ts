'use server'

import { toast } from "sonner";
import { FormState, SignUpFormSchema } from "./definitions"
import { createSession } from "../_lib/session";

export async function signup(state: FormState, formData: FormData): Promise<FormState> {
  // 1. Validate fields 
  // 3. Create session
  const validationResult = SignUpFormSchema.safeParse({
    // name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  // 2. Create user using formData and BACKEND_URL using fetch
  const response = await fetch(`${process.env.BACKEND_URL}/user/sign`, {
    method: "POST",
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
      password_confirmation: formData.get("confirmPassword"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    toast.error(errorData.message);
    return {
      errors: errorData,
    };
  }

  const sessionPayload = await response.json();
  console.log(sessionPayload);
  await createSession(sessionPayload.data[0].token)
  console.log("token", sessionPayload.data[0].token);
  // Mutate data
  return {
    message: "User created",
    id: sessionPayload.data[0].id,
  };    
} 