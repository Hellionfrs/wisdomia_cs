import { Suspense } from "react";
import FormContainer, { FormSkeleton } from "./formContainer";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <Suspense fallback={<FormSkeleton />}>
      <FormContainer id={id} />
    </Suspense>
  );
}
