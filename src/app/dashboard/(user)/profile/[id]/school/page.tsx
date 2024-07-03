import { Suspense } from "react";
import Schools from "./schoolsAccess";
import { Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SchoolPage({ params }: { params: { id: string } }) {
  const id = params.id;
  console.log(id);
  return (
    <div className="flex flex-col gap-4 p-2 md:gap-8">
      {/* Get Access */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Get Access</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Request access to a school.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <main className="pt-4 md:pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Suspense
              fallback={
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
              }
            >
              <Schools id={id} />
            </Suspense>
          </main>
        </CardContent>
      </Card>
      {/* Your Schools */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Your Schools</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            View and manage the schools you have access to.
          </CardDescription>
          <CardContent>
            <Schools id={id} />
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
