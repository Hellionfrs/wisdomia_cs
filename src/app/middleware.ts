import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "./_lib/session";

export async function middleware(request: NextRequest) {
    const session = await getSession();
    console.log("session in middleware", session);
    if (!session) {
        return NextResponse.redirect("/login");
    }
    return NextResponse.next();
}