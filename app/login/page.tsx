"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

/**
 * ログインページです
 */
export default function Index() {
  const supabase = createClientComponentClient()

  async function signInWithTwitter() {
    await supabase.auth.signInWithOAuth({
      provider: 'twitter', options: {
        redirectTo: `${process.env.NEXT_PUBLIC_FE_URL}/auth/callback`
      }
    })
  }

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            個人に最適なWebサイトを作成。
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            フリーランスや副業、クリエイターなど個人で活動している方におすすめです。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              type="button"
              onClick={signInWithTwitter}
              className="flex rounded-md items-center bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <svg className="w-7 h-7" viewBox="0 0 1800 1800" xmlns="http://www.w3.org/2000/svg">
                <rect height="100%" width="100%" rx="10%" ry="10%"/>
                <path
                  d="m1014.2 805.8 446.7-519.3h-105.9l-387.9 450.9-309.8-450.9h-357.3l468.5 681.8-468.5 544.6h105.9l409.6-476.2 327.2 476.2h357.3zm-145 168.5-47.5-67.9-377.7-540.2h162.6l304.8 436 47.5 67.9 396.2 566.7h-162.6z"
                  fill="#fff"/>
              </svg>
              <span className="ml-2">
                (Twitter) ログイン
              </span>
            </button>
            <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}