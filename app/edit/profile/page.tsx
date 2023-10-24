"use client"

import React, { ChangeEvent, useRef, useState } from 'react';
import EditTab from "@/components/tab/EditTab";

export default function Index() {
  // 画像のURLを保存するためのステート
  const [image, setImage] = useState("https://pbs.twimg.com/profile_images/1647910051414429696/PzPDwwmk_400x400.jpg");

  const slug = "totsumaru"

  // input要素への参照
  const inputRef = useRef<HTMLInputElement>(null);

  // inputが変更されたときにファイルを読み込む関数
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => { // eventパラメータの型を指定
    const file = event.target.files?.[0]; // `files`はnull可能性があるため、オプショナルチェイニングを使用
    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => { // ここでもeの型を明示的に指定
        if (e.target?.result) {
          setImage(e.target.result.toString()); // resultはstringまたはArrayBufferのため、toStringを使用してstringに変換
        }
      };
      reader.readAsDataURL(file);
    } else {
      console.error("選択されたファイルが画像ではありません。");
    }
  };

  return (
    <>
      <EditTab current={"profile"}/>
      {/*  フォーム  */}
      <form className="mt-6">
        {/* アバター */}
        <div className="mb-6 w-fit hover:cursor-pointer flex flex-col items-center">
          <img
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.click();
              }
            }} // imgがクリックされたときのハンドラー
            className="w-24 h-24 md:w-32 md:h-32 flex-none rounded-full object-cover"
            src={image} // ステートの画像URL
            alt=""
          />
          <input
            type="file"
            ref={inputRef} // 作成したref
            onChange={handleChange} // inputの変更ハンドラー
            accept="image/png, image/jpeg" // 受け入れるファイルの種類
            style={{ display: 'none' }} // inputを隠す
          />
          <label className="mt-1 text-gray-400">変更する</label>
        </div>

        {/* 表示名 */}
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            表示名
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="表示名を入力" required
          />
        </div>

        {/* 自己紹介 */}
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            自己紹介
          </label>
          <textarea
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            rows={5}
            placeholder="自己紹介を入力"
            required
          />
        </div>

        {/* 公開ページのURL */}
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            公開ページのURL
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="表示名を入力" required
          />
        </div>

        {/* Twitter/X */}
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            X(Twitter)ユーザー名
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="@なしで入力"
          />
        </div>

        {/* Instagram */}
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Instagramユーザー名
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ユーザー名を入力"
          />
        </div>

        {/* github */}
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            githubユーザー名
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ユーザー名を入力"
          />
        </div>

        {/* その他 */}
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            その他ウェブサイト
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="https://example.com"
          />
        </div>

        <div className="border-b border-b-gray-300"/>

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