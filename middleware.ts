import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const session = request.cookies.get('scope_session')

  const isAuthRoute = request.nextUrl.pathname.startsWith('/login') ||
                      request.nextUrl.pathname.startsWith('/register')

  const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard')

  // No session → no dashboard
  if (!session && isDashboardRoute) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Session → no auth pages
  if (session && isAuthRoute) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}
