'use server'
import { getSession } from "@/app/_lib/session";
import { FormState, UpdatePasswordSchema } from "./definitions";

const BACKEND_URL = process.env.BACKEND_URL;
export async function updatePassword(state: FormState, formData: FormData): Promise<FormState> {
    const token = await getSession();
    const validationResult = await UpdatePasswordSchema.safeParseAsync({
        oldPassword: formData.get("oldPassword"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    });
    console.log(formData)
    if (!validationResult.success) {
        return {
            errors: validationResult.error.flatten().fieldErrors,
        };
    }
    const res = await fetch(`${BACKEND_URL}/user/password/${formData.get("id")}`, {
        method: "POST",
        body: JSON.stringify({
            oldPassword: formData.get("oldPassword"),
            newPassword: formData.get("password"),
            confirmationPassword: formData.get("confirmPassword"),
        }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });
    console.log(res);
    if (!res.ok) {
        const error = await res.json();
        return {
            errors: error,
        };
    }
    return {
        message: "Password updated successfully",
        // id: formData.get("id"),
    };
}