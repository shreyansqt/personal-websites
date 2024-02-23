import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { passwordProtectedPosts } from "./password-protected-posts";

export function middleware(request: NextRequest) {
  if (passwordProtectedPosts.length === 0) {
    return NextResponse.next();
  }
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
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: "/case-studies/:slug*",
};
