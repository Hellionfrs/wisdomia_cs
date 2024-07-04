"use client";

import { Card, CardFooter } from "@/components/ui/card";
import { School as S } from "../../app/dashboard/(user)/profile/[id]/school/definitions";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { CheckCheck, CheckCheckIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function SchoolWithParams({ data }: { data: S }) {
  const userId = useParams().id;
  return (
    <Card className="bg-card shadow flex flex-col justify-between">
      <div className="p-2 flex justify-between items-center gap-4">
        <Link
          href={`/dashboard/profile/${userId}/school/${data.id}`}
          className="flex gap-2 items-center"
        >
          <Avatar>
            <AvatarImage src={data.logo} />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-sm font-semibold capitalize">{data.name}</h2>
            <p className="text-xstext-muted-foreground">{data.address}</p>
          </div>
        </Link>
        <Button>
          <CheckCheckIcon></CheckCheckIcon>
        </Button>
      </div>
      {/* <CardFooter>ToDo server action</CardFooter> */}
    </Card>
  );
}

function SchoolIcon(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}
