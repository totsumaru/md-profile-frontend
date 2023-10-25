import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const { data: { user } } = await supabase.auth.getUser()

  // if (!user && req.nextUrl.pathname === '/edit/about') {
  //   return NextResponse.redirect(new URL('/login', req.url))
  // }
  //
  // if (!user && req.nextUrl.pathname === '/edit/profile') {
  //   return NextResponse.redirect(new URL('/login', req.url))
  // }
  //
  // if (!user && req.nextUrl.pathname === '/edit/share') {
  //   return NextResponse.redirect(new URL('/login', req.url))
  // }

  return res
}