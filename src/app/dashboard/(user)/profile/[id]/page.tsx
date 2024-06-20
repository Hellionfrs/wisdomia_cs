import { Suspense } from "react";
import Form, { Formkeleton } from "./form";
import { fetchUser } from "./actions";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  console.log(id);
  let user = await fetchUser(id);
  
  // console.log(user);
  return (
    <div>
      <Suspense fallback={<Formkeleton />}>
        <Form user={user} id={id} />
      </Suspense>
    </div>
  );
}
