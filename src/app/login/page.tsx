import Link from "next/link";
import { LoginForm, LoginSkeleton } from "./form";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <h2 className="text-2xl font-bold">Login</h2>
      <Suspense fallback={<LoginSkeleton />}>
        <LoginForm />
      </Suspense>
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        {"Don't have an account? "}
        <Link href="signup" className="font-medium underline" prefetch={false}>
          Sign up
        </Link>
      </div>
    </>
  );
}
