import XLoginButton from "@/components/button/XLoginButton";
import Link from "next/link";

/**
 * ログインページです
 */
export default function Index() {
  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ログイン
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            フリーランスや副業、クリエイターなど個人で活動している方におすすめです。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <XLoginButton/>
            <Link href="../" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}