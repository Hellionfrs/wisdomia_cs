import { Suspense } from "react";
import FormContainer, { FormSkeleton } from "./formContainer";
import { CardFooter } from "@/components/ui/card";
import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <>
      <Suspense fallback={<FormSkeleton />}>
        <FormContainer id={id} />
      </Suspense>
      <CardFooter className="text-sm text-gray-500 flex gap-1">
        Change your password{" "}
        <Link
          className="text-blue-500 underline hover:text-blue-400 "
          href={`/dashboard/profile/${id}/password`}
        >
          here
        </Link>
      </CardFooter>
    </>
  );
}
