"use client"

// Contextの作成
import { createContext, useContext } from "react";
import { CodeBlockContext } from "@/components/about/Context";

// Hookの作成
function useIsInsideCodeBlock() {
  return useContext(CodeBlockContext);
}

export default function CodeComponent({ children, ...props }: any) {
  const isInsidePre = useIsInsideCodeBlock();

  // コードブロック
  if (isInsidePre) {
    return (
      <code className="text-gray-800 rounded-md overflow-x-auto font-mono text-sm leading-relaxed" {...props}>
        {children}
      </code>
    );
  }

  // インラインコード
  return (
    <code className="bg-gray-200 px-2 py-1 text-gray-800 rounded-md text-sm" {...props}>
      {children}
    </code>
  );
}
