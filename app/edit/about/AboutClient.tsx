"use client"

import React, { useState } from "react";
import PreviewButton from "@/components/button/PreviewButton";
import About from "@/components/About";

type Props = {
  defaultValue: string
  slug: string
}

/**
 * Aboutの編集ページのクライアントコンポーネントです
 */
export default function AboutClient({ defaultValue, slug }: Props) {
  const [text, setText] = useState<string>(defaultValue)
  const [isEditor, setIsEditor] = useState<boolean>(true)

  return (
    <>
      <div className="flex flex-row-reverse">
        <PreviewButton
          isPlayIcon={isEditor}
          setStatus={() => setIsEditor((prevState) => !prevState)}
        />
      </div>

      <form className="mt-3">
        {isEditor ? (
          <textarea
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
           dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
           dark:focus:border-blue-500"
            rows={30}
            placeholder="自己紹介を入力"
            value={text}
            onChange={(event) => setText(event.target.value)}
            required
          />
        ) : (
          <div className="pb-8 border-b border-b-gray-300">
            <About markdownText={text}/>
          </div>
        )}

        <div className="mt-5">
          {/* 保存ボタン */}
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            保存する
          </button>

          {/* 戻る */}
          <a
            href={`/me/${slug}`}
            className="ml-3 px-3.5 py-2.5 text-sm font-semibold text-gray-800"
          >
            戻る
          </a>
        </div>
      </form>
    </>
  )
}