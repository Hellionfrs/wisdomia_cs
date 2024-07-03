"use client";
import { useFormState, useFormStatus } from "react-dom";
import { updateUser } from "./actions";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "./definitions";
import { Skeleton } from "@/components/ui/skeleton";

export default function Form({ user, id }: { user: User | null; id: string }) {
  const [state, action] = useFormState(
    async (state: any, formData: FormData) => {
      const result = await updateUser(state, formData);
      if (result?.message) {
        toast.success(result.message);
        redirect("/dashboard");
      } else if (result?.errors) {
        console.log(result.errors);
        toast.error(`Error updating user, details: ${result.errors}`);
      }
      return result;
    },
    undefined
  );
  console.log(user);
  return (
    <>
      <CardContent>
        <form className="space-y-4" action={action}>
          <Input type="hidden" name="id" defaultValue={id} readOnly />
          {/* name */}
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              name="name"
              defaultValue={user?.name || ""}
            />
            {state?.errors?.name && (
              <p className="text-red-500">{state.errors.name}</p>
            )}
          </div>
          {/* middleName */}
          <div className="space-y-2">
            <Label htmlFor="middleName">Middle name</Label>
            <Input
              id="middleName"
              type="text"
              name="middleName"
              defaultValue={user?.middleName || ""}
            />
            {state?.errors?.middleName && (
              <p className="text-red-500">{state.errors.middleName}</p>
            )}
          </div>
          {/* surname */}
          <div className="space-y-2">
            <Label htmlFor="surname">Surname</Label>
            <Input
              id="surname"
              type="text"
              name="surname"
              defaultValue={user?.surname || ""}
            />
            {state?.errors?.surname && (
              <p className="text-red-500">{state.errors.surname}</p>
            )}
          </div>
          {/* secondSurname */}
          <div className="space-y-2">
            <Label htmlFor="secondSurname">Second surname</Label>
            <Input
              id="secondSurname"
              type="text"
              name="secondSurname"
              defaultValue={user?.secondSurname || ""}
            />
            {state?.errors?.secondSurname && (
              <p className="text-red-500">{state.errors.secondSurname}</p>
            )}
          </div>
          {/* email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              defaultValue={user?.email || ""}
            />
            {state?.errors?.email && (
              <p className="text-red-500">{state.errors.email}</p>
            )}
          </div>
          {/* cellphone */}
          <div className="space-y-2">
            <Label htmlFor="cellphone">Cellphone</Label>
            <Input
              id="cellphone"
              type="tel"
              name="cellphone"
              defaultValue={user?.cellphone || ""}
            />
            {state?.errors?.cellphone && (
              <p className="text-red-500">{state.errors.cellphone}</p>
            )}
          </div>
          {/* password */}
          {/* <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              defaultValue={user?.password || ""}
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
          </div> */}
          <SubmitButton />
        </form>
      </CardContent>
    </>
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
