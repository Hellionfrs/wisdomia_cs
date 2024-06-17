'use server'

import { FormState, LoginFormSchema } from "./definitions"

export async function login(state: FormState, formData: FormData): Promise<FormState> {
    // 1. Validate fields
    // 2. Create user
    // 3. Create session            
    const validationResult = LoginFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    })

    if (!validationResult.success) {
        return {
            errors: validationResult.error.flatten().fieldErrors,
        }
    }

    // return {
    //     message: "Login successful!",
    // }
}

