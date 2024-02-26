import type { TPost } from "@repo/common/types";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import {PROTECTED_POSTS_QUERY} from '@/sanity/lib/queries';
import { token } from "@/sanity/lib/token";

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const loginCookie = process.env.PASSWORD_COOKIE_NAME
    ? request.cookies.get(process.env.PASSWORD_COOKIE_NAME)
    : undefined;
  const isLoggedIn = loginCookie?.value === "true";

  const passwordProtectedPosts = await client.withConfig({ token }).fetch<TPost[]>(
    PROTECTED_POSTS_QUERY
  );

  const passwordProtectedPaths = passwordProtectedPosts.map(
    ({ slug }) => `/case-studies/${slug.current}`
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
