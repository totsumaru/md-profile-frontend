"use client"

import React, { useRef, useState } from "react";
import About from "@/components/About";
import { PencilIcon, PhotoIcon, PlayIcon } from "@heroicons/react/24/solid";
import Spinner from "@/components/Spinner";
import { PostUpdateMarkdown } from "@/utils/api/postUpdateMarkdown";
import SuccessToast from "@/components/notice/SuccessToast";
import ErrorToast from "@/components/notice/ErrorToast";
import { PostUploadImage } from "@/utils/api/postUploadImage";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  accessToken: string
  defaultValue: string
  slug: string
}

/**
 * Aboutの編集ページのクライアントコンポーネントです
 */
export default function AboutClient({ accessToken, defaultValue, slug }: Props) {
  const router = useRouter()
  const [markdown, setMarkdown] = useState<string>(defaultValue)
  const [isEditor, setIsEditor] = useState<boolean>(true)
  const [imageLoading, setImageLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

  // 画像ボタンがクリックされたときの挙動です
  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageLoading(true) // loading開始
    if (event.target.files && event.target.files[0]) {
      try {
        const imageUrl = await PostUploadImage({
          accessToken: accessToken,
          image: event.target.files[0]
        })

        const imageUrlMarkdown = `![](${imageUrl})`

        // カーソル位置に画像URLを挿入
        if (textAreaRef.current) {
          const cursorPosition = textAreaRef.current.selectionStart;
          const newText = markdown.slice(0, cursorPosition) + imageUrlMarkdown + markdown.slice(cursorPosition);
          setMarkdown(newText);
        }
      } catch (e) {
        console.error(e)
        setError(true)
      } finally {
        setImageLoading(false) // loading終了
      }
    }
  };

  // Formの値をバリデーションします
  const validate = (): string => {
    if (markdown.length > 3000) {
      return "テキストは3000文字以内で入力してください"
    }
    return ""
  }

  // 保存ボタンが押されたときの挙動です
  const handleSaveClick = async () => {
    const err = validate()
    if (err) {
      alert(err)
      return
    }

    try {
      setLoading(true)
      await PostUpdateMarkdown({
        accessToken: accessToken,
        markdown: markdown,
      })
      setSuccess(true)
      router.refresh()
    } catch (e) {
      console.error(e)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SuccessToast
        show={success}
        closeToast={() => setSuccess(false)}
        text={"保存しました"}
      />
      <ErrorToast
        show={error}
        closeToast={() => setError(false)}
        text={"エラーが発生しました"}
      />
      <div className="flex justify-between">
        <div>
          {/* 画像追加ボタン */}
          <label className={`block w-fit rounded-md mt-3 bg-white px-3 py-2 text-sm font-semibold text-gray-600
         shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:cursor-pointer ${imageLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {imageLoading ? (
              // loadingアイコンの表示
              <span className="animate-spin">
                <Spinner widthHeight={"5"}/>
              </span>
            ) : (
              <>
                <PhotoIcon className="w-5 h-5"/>
                <input type="file" className="hidden" onChange={handleImageChange} accept="image/*"
                       disabled={imageLoading}/>
              </>
            )}
          </label>
        </div>

        {/* プレビューボタン */}
        <button
          className="block w-fit rounded-md mt-3 bg-white px-3 py-2 text-sm font-semibold text-gray-600
           shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:cursor-pointer"
          onClick={() => setIsEditor(prevState => !prevState)}
        >
          {isEditor ? (
            <div className="flex gap-1">
              <PlayIcon className="w-5 h-5 text-gray-600"/>
              プレビュー
            </div>
          ) : (
            <div className="flex gap-1">
              <PencilIcon className="w-5 h-5 text-gray-500"/>
              編集
            </div>
          )}
        </button>
      </div>

      <form className="mt-3">
        {isEditor ? (
          <textarea
            ref={textAreaRef}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
           dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
           dark:focus:border-blue-500"
            rows={30}
            placeholder="自己紹介を入力"
            value={markdown}
            onChange={(event) => setMarkdown(event.target.value)}
            required
          />
        ) : (
          <div className="pb-8 border-b border-b-gray-300">
            <About markdownText={markdown}/>
          </div>
        )}

        <div className="mt-5">
          {/* 保存ボタン */}
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleSaveClick}
            disabled={loading}
          >
            {loading ? "..." : "保存する"}
          </button>

          {/* 戻る */}
          <Link href={`../../me/${slug}`} className="ml-3 px-3.5 py-2.5 text-sm font-semibold text-gray-800">
            戻る
          </Link>
        </div>
      </form>
    </>
  )
}