import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { PencilIcon } from "@heroicons/react/24/outline";

type Props = {
  isPlayIcon: boolean
  setStatus: () => void
}

/**
 * 概要のエディター/プレビュー の切り替えボタンです
 */
export default function PreviewButton({ isPlayIcon, setStatus }: Props) {
  return (
    <button
      className="block w-fit rounded-md mt-3 bg-white px-3 py-2 text-sm font-semibold text-gray-900
           shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:cursor-pointer"
      onClick={() => setStatus()}
    >
      {isPlayIcon ? (
        <PlayIcon className="w-5 h-5 text-gray-500"/>
      ) : (
        <PencilIcon className="w-5 h-5 text-gray-500"/>
      )}

    </button>
  )
}