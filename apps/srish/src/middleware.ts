import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { passwordProtectedPosts } from './password-protected-posts';

export async function middleware(request: NextRequest) {
  const loginCookie = request.cookies.get(process.env.PASSWORD_COOKIE_NAME!);
  const isLoggedIn = loginCookie?.value === 'true';

  const passwordProtectedPaths = passwordProtectedPosts.map(
    (slug) => `/case-studies/${slug}`,
  );

  if (
    !isLoggedIn &&
    passwordProtectedPaths.indexOf(request.nextUrl.pathname) > -1
  ) {
    return NextResponse.redirect(
      new URL(`${request.nextUrl.pathname}/unlock`, request.url),
    );
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: '/case-studies/:slug*',
};
