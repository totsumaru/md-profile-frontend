import React from "react";
import XIcon from "@/components/icon/X";
import InstagramIcon from "@/components/icon/Instagram";
import GithubIcon from "@/components/icon/Github";
import LinkIcon from "@/components/icon/Link";

type Props = {
  kind: "x" | "instagram" | "github" | "website"
  url: string
}

/**
 * SNSアイコンです
 */
export default function SnsIcon({ kind, url }: Props) {
  let icon
  switch (kind) {
    case "x":
      icon = <XIcon/>
      break
    case "instagram":
      icon = <InstagramIcon/>
      break
    case "github":
      icon = <GithubIcon/>
      break
    case "website":
      icon = <LinkIcon/>
      break
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
      <span className="sr-only">{kind}</span>
      {icon}
    </a>
  )
}