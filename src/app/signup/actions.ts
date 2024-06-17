'use server'

import { FormState, SignUpFormSchema } from "../_lib/definitions"

export async function signup(state: FormState, formData: FormData): Promise<FormState> {
    // 1. Validate fields
    // 2. Create user
    // 3. Create session            
    const validationResult = SignUpFormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
    })

    if (!validationResult.success) {
        return {
            errors: validationResult.error.flatten().fieldErrors,
        }
    }
} 