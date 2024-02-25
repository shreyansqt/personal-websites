import type { NextRequest} from 'next/server';
import { NextResponse } from 'next/server';
import { draftMode } from 'next/headers'

export function GET(request: NextRequest): NextResponse {
  draftMode().disable()
  const url = new URL(request.nextUrl)
  return NextResponse.redirect(new URL('/', url.origin))
}
