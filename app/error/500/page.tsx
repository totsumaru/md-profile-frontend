"use client"

import { useSearchParams } from "next/navigation";

export default function Index() {
  const searchParams = useSearchParams()
  const text = searchParams.get("text")

  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">500</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            エラーが発生しました
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            {text}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              トップページへ
            </a>
            <a href="https://twitter.com/totsumaru_dot" className="text-sm font-semibold text-gray-900">
              管理者へ連絡<span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}