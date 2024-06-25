"use client";

import { signup } from "@/app/signup/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";

export function SignupForm() {
  const router = useRouter();
  const [state, action] = useFormState(
    async (state: any, formData: FormData) => {
      const result = await signup(state, formData);
      if (result?.message) {
        toast.success(result.message);
        router.push(`/dashboard`);
      } else if (result?.errors) {
        toast.error("Error creating user");
      }
      return result;
    },
    undefined
  );
  return (
    <form className="space-y-4" action={action}>
      {/* Name field is not required */}
      {/* <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="name"
          placeholder="Enter your name"
        />
        {state?.errors?.name && (
          <div className="text-red-500 text-sm">{state?.errors.name}</div>
        )}
      </div> */}
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
                <li className="list-disc" key={error}>
                  {error}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
        />
        {state?.errors?.confirmPassword && (
          <div className="text-red-500 text-sm">
            <span>Password must have:</span>
            <ul className="flex flex-col pl-3">
              {state?.errors.confirmPassword.map((error) => (
                <li className="list-disc" key={error}>
                  {error}
                </li>
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
