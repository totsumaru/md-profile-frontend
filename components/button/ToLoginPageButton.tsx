"use client"

import { usePathname, useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

type Props = {
  isLogin: boolean
}

/**
 * ログインボタンです
 */
export default function ToLoginPageButton({ isLogin }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const supabase = createClientComponentClient()
  const [loading, setLoading] = useState<boolean>(false)

  const logout = async () => {
    setLoading(true)
    await supabase.auth.signOut()
    router.push("/login")
    router.refresh()
  }

  return (
    <>
      {pathname !== "/login" && (
        isLogin ? (
          <button
            type="button"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={logout}
            disabled={loading}
          >
            {loading ? "..." : "ログアウト"}
          </button>
        ) : (
          <a
            href="/login"
            className="ml-6 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            ログイン
          </a>
        )
      )}
    </>
  )
}