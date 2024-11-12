// export { auth as middleware } from "@/auth";

import { NextResponse, type NextRequest } from "next/server";
import { auth } from "./auth";

const protectedRoutes = ["/client-component"];

export default async function middleware(request: NextRequest) {
  const session = await auth();

  const isProtected = protectedRoutes.some((route) => {
    request.nextUrl.pathname.startsWith(route);
  });

  if (!session && isProtected) {
    const abssoluteURL = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(abssoluteURL.toString());
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
