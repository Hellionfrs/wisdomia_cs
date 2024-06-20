"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const cookie = {
  name: "session",
  options: {
    httpOnly: true,
    secure: true,
    path: "/",
  },
  duration: 60 * 60 * 24 * 30, // 30 days
};

export async function createSession(token: string) {
  const expires = new Date(Date.now() + cookie.duration * 1000);
  cookies().set(cookie.name, token, {
    ...cookie.options,
    expires,
  });
  console.log("session created", token);
//   redirect("/dashboard");
}

export async function getSession() {
  const cookie = cookies().get("session")?.value;
  if (!cookie) redirect("/login");
  console.log("session", cookie);
  return cookie;
}

export async function destroySession() {
  cookies().delete("session");
  redirect("/login");
}
