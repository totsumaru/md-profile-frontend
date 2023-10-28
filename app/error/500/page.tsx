"use client"

import { useSearchParams } from "next/navigation";
import ServerError500 from "@/components/error/ServerError500";

export default function Index() {
  const searchParams = useSearchParams()
  const text = searchParams.get("text")

  return (
    <ServerError500 text={text || ""}/>
  )
}
