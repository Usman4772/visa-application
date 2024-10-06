import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const route = req.nextUrl.pathname;
  if (route == "/admin/add-visa") {
    const token = cookies().get("jwt-token")?.value;
    console.log(token);
    if (!token) return NextResponse.redirect(new URL("/", req.url));
    const actualToken =
      "tk-2b$10$ACpF2pQirbycHdHZuUuBE.kAnHgklUDASqxLqyAdAF8lG8YmYaSp6";
    if (token !== actualToken)
      return NextResponse.redirect(new URL("/", req.url));
    return NextResponse.next();
  }
}
