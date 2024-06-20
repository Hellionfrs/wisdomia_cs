"use client";

import { redirect } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Not Authorized</h2>
      <button onClick={redirect("/login")}>Login</button>
    </div>
  );
}
