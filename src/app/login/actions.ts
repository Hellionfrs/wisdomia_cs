"use server";

import { createSession } from "../_lib/session";
import { FormState, LoginFormSchema } from "./definitions";

export async function login(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  // 1. Validate fields
  // 2. Create user
  // 3. Create session
  
  const validationResult = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  //create session

  const response = await fetch(`${process.env.BACKEND_URL}/user/login`, {
    method: "POST",
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    return {
      errors: errorData,
    };
  }
  const sessionPayload = await response.json();
  await createSession(sessionPayload.data[0].token);
  return {
    message: "Login successful",
    id: sessionPayload.data[0].id,
  };
}
