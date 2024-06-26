import { SignupForm } from "@/app/signup/form";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h2 className="text-2xl font-bold">Create an account</h2>
      <SignupForm />
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link href="login" className="font-medium underline" prefetch={false}>
          Login
        </Link>
      </div>
    </>
  );
}
