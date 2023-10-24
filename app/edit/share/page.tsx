"use client"

import EditTab from "@/components/tab/EditTab";
import { useState } from "react";

export default function Index() {
  const [message, setMessage] = useState<string>("");

  const slug = "totsumaru"

  const url = `${process.env.NEXT_PUBLIC_FE_URL}/me/${slug}`

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setMessage("コピーしました！");
    } catch (err) {
      setMessage("コピーに失敗しました");
    }
  };

  return (
    <>
      <EditTab current={"share"}/>
      <div className="mt-8">
        <p className="font-bold">あなたのプロフィールURL</p>
        <div className="flex items-center mt-3">
          <a href={url} className="text-blue-600">{url}</a>
          <button
            onClick={copyToClipboard}
            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900
             ml-3 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            URLをコピーする
          </button>
        </div>
        {message && <span className="text-sm text-gray-600">{message}</span>}
      </div>
    </>
  );
}
