import { Suspense } from "react";
import UpdatePasswordForm from "./updatePasswordForm";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <>
      <Suspense fallback={<div>Loading UpdatePasswordForm...</div>}>
        {/* Change password form */}
        <UpdatePasswordForm id={id} />
      </Suspense>
    </>
  );
}
