"use client";
import PasswordInput from "@/components/passwordInput";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useFormState, useFormStatus } from "react-dom";
import { updatePassword } from "./actions";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
};
export default function UpdatePasswordForm({ id }: Props) {
  const router = useRouter();
  const [state, action] = useFormState(
    async (state: any, formData: FormData) => {
      const result = await updatePassword(state, formData);
      if (result?.message) {
        console.log(result);
        toast.success(result.message);
        router.push(`/dashboard`);
      } else if (result?.errors) {
        console.log(result.errors);
        toast.error(`Error updating user, details: ${result.errors}`);
      }
      return result;
    },
    undefined
  );
  return (
    <div>
      <CardContent>
        <form
          className="space-y-4"
          action={action}
        >
          <Input type="hidden" name="id" defaultValue={id} readOnly />
          <div className="space-y-2">
            <PasswordInput name="oldPassword" />
            {state?.errors?.oldPassword && (
              <p className="text-red-500">{state.errors.oldPassword}</p>
            )}
          </div>
          <div className="space-y-2">
            <PasswordInput name="password" />
            {state?.errors?.password && (
              <p className="text-red-500">{state.errors.password}</p>
            )}
          </div>
          <div className="space-y-2">
            <PasswordInput name="confirmPassword" />
            {state?.errors?.confirmPassword && (
              <p className="text-red-500">{state.errors.confirmPassword}</p>
            )}
          </div>

          <SubmitButton />
        </form>
      </CardContent>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} className="w-full" type="submit">
      {pending ? "Updating.." : "Update"}
    </Button>
  );
}
