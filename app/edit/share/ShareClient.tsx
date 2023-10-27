"use client"

import { useState } from "react";
import Link from "next/link";

type Props = {
  publicUrl: string
}

/**
 * 公開設定ページのClientコンポーネントです
 */
export default function ShareClient({ publicUrl }: Props) {
  const [message, setMessage] = useState<string>("");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(publicUrl);
      setMessage("コピーしました！");
    } catch (err) {
      setMessage("コピーに失敗しました");
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center mt-3">
        <Link href={publicUrl} className="text-blue-600 block">{publicUrl}</Link>
        <button
          onClick={copyToClipboard}
          className="rounded-md bg-white px-3 py-2 mt-2 sm:mt-0 sm:ml-3 text-sm font-semibold text-gray-900
             shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 w-fit"
        >
          URLをコピーする
        </button>
      </div>
      {message && <span className="text-sm text-gray-600">{message}</span>}
    </>
  )
}