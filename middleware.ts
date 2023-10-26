import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    // ログインしていない時
    if (req.nextUrl.pathname.startsWith("/edit")) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }

  return res
}