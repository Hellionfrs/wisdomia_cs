import { Suspense } from "react";
import Schools from "./schools";

export default function SchoolPage({ params }: { params: { id: string } }) {
  const id = params.id;
  console.log(id);
  return (
    <main className="pt-4 md:pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <Suspense fallback={<div>Loading...</div>}>
        <Schools id={id} />
      </Suspense>
    </main>
  );
}
