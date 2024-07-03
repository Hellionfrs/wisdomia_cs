import { CardContent } from "@/components/ui/card";
import { fetchUser } from "./actions";
import Form from "./form";
import { Skeleton } from "@/components/ui/skeleton";

export default async function FormContainer({id}: {id: string}) {   
    console.log(id);
    let user = await fetchUser(id);
    console.log(user);
  return (
    <div>
      <Form id={id} user={user} />
    </div>
  );
}

// Form Skeleton

export function FormSkeleton() {
  return (
    <CardContent>
      <div className="grid gap-2">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-[100px] w-full" />
      </div>
    </CardContent>
  );
}