'use client'

import { Button } from "@/components/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { login } from "./actions";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { redirect } from "next/navigation";


export function LoginForm() {
    const [state, action] = useFormState( async (state: any, formData: FormData) => {
      const result = await login(state, formData);
      if (result?.message) {
        toast.success(result.message);
        redirect("/dashboard");
      } else if (result?.errors) {
        toast.error("Error creating user");
      }
      return result;
    }, undefined);
  return (
    <form className="space-y-4" action={action}>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your Email"
        />
        {state?.errors?.email && (
          <div className="text-red-500 text-sm">{state?.errors?.email}</div>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        {state?.errors?.password && (
          <div className="text-red-500 text-sm">
            <span>Password must have:</span>
            <ul className="flex flex-col pl-3">
              {state?.errors.password.map((error) => (
                <li className="list-disc"key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} className="w-full" type="submit">
      {pending ? "Signing up..." : "Sign up"}
    </Button>
  );
}