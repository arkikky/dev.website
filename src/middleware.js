import { NextResponse } from "next/server";

// @lib
import { getUser } from "@lib/controller/User";

export async function middleware(req) {
  let authID = req.cookies.get("acsAuthUser");
  let acsAuth = req.cookies.get("acsAuthToken");

  const rs = await getUser(authID?.value, acsAuth?.value);
  // @check user
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    if (rs !== false) {
      // @dashboard
      if (authID.value === rs.result.id) {
        // @auth success
      } else {
        return NextResponse.redirect(new URL("/", req.url));
      }
    } else {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // if (req.nextUrl.pathname.startsWith("/")) {
  //   if (rs !== false) {
  //     if (authID.value === rs.result.id) {
  //       // @auth success
  //       return NextResponse.redirect(new URL("/dashboard", req.url));
  //     }
  //   }
  // }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
