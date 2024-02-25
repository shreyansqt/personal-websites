import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { passwordProtectedPosts } from "./password-protected-posts";

export function middleware(request: NextRequest): NextResponse {
  const loginCookie = process.env.PASSWORD_COOKIE_NAME
    ? request.cookies.get(process.env.PASSWORD_COOKIE_NAME)
    : undefined;
  const isLoggedIn = loginCookie?.value === "true";

  const passwordProtectedPaths = passwordProtectedPosts.map(
    (slug) => `/case-studies/${slug}`
  );

  if (
    !isLoggedIn &&
    passwordProtectedPaths.includes(request.nextUrl.pathname)
  ) {
    return NextResponse.redirect(
      new URL(`${request.nextUrl.pathname}/unlock`, request.url)
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/case-studies/:slug*",
};
