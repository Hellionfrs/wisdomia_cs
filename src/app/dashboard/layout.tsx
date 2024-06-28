import React from "react";
import { getUserIdFromSession } from "../_lib/session";
import NavbarDesktop from "@/components/navbar/navbar.desktop";
import NavbarMobile from "@/components/navbar/navbar.mobile";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const id = await getUserIdFromSession();
  return (
    <div className="flex h-screen w-full">
      {/* navbar */}
      <NavbarDesktop id={id}></NavbarDesktop>

      <div className="flex-1 overflow-y-auto">
        {/* mobile nav */}
        <NavbarMobile id={id}></NavbarMobile>

        {/* dashboard content */}
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
