import { Suspense } from "react";
import Schools from "./schools";

export default function SchoolPage({ params }: { params: { id: string } }) {
  const id = params.id;
  console.log(id);
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <header className="bg-card p-4 md:p-6 shadow rounded-lg">
        <h1 className="text-2xl font-bold">School Dashboard</h1>
      </header>
      <main className="pt-4 md:pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <Suspense fallback={<div>Loading...</div>}>
          <Schools id={id} />
        </Suspense>
      </main>
    </div>
  );
}
