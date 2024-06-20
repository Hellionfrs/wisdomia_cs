"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="text-center gap-4 md:flex md:items-center md:gap-4">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-xl">Not Authorized</p>
      </div>
      <div className="md:w-60 flex items-center justify-center">
        <Link
          href={"/login"}
          className="text-white text-sm  font-medium bg-black rounded-sm p-2  hover:bg-gray-600"
        >
          Go to login
        </Link>
      </div>
    </div>
  );
}
