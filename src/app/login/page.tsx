import Link from "next/link";
import { LoginForm } from "./form";

export default function Page() {
    return (
      <>
        <h2 className="text-2xl font-bold">Login</h2>
        <LoginForm />
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          {"Don't have an account? "}
          <Link
            href="signup"
            className="font-medium underline"
            prefetch={false}
          >
            Sign up
          </Link>
        </div>
      </>
    );
}