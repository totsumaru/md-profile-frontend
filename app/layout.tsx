import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from "react";
import Header from "@/components/Header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Profio",
  description: "Profio｜個人のための、最も使いやすいプロフィール作成ツール。",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="">
      <body className={`${inter.className} min-h-screen`}>
        {/* ヘッダー */}
        <Header/>
        {children}
      </body>
    </html>
  )
}
