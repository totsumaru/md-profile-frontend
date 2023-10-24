import React from "react";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto sm:px-6 lg:px-8 bg-blue-100 min-h-screen bg-opacity-50 pt-5 px-3">
      <div className="mx-auto max-w-3xl pb-10 px-6 py-6 sm:px-6 lg:px-8 bg-white">
        {children}
      </div>
    </div>
  )
}
