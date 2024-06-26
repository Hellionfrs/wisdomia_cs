import { getUserIdFromSession } from "@/app/_lib/session";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default async function EditUser() {
  const id = await getUserIdFromSession();
  return (
    <DropdownMenuItem>
      <Link
        href={`/dashboard/profile/${id}/edit`}
        className="flex items-center"
      >
        <UserIcon className="mr-2 h-4 w-4" />
        Edit Profile
      </Link>
    </DropdownMenuItem>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
