import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

/**
 * コールバックのエンドポイントです
 */
export async function GET(request: Request): Promise<Response> {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = createRouteHandlerClient({ cookies })
    await supabase.auth.exchangeCodeForSession(code)
    const { data: { session } } = await supabase.auth.getSession()

    if (!session?.access_token) {
      return NextResponse.redirect(`/login`)
    }

    // try {
    //   await PostCreateHost(session.access_token, name)
    // } catch (error) {
    //   return new Response("Error occurred", { status: 500 })
    // }
  }

  return NextResponse.redirect(`${requestUrl.origin}/`)
}
