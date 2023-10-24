import React from "react";
import XIcon from "@/components/icon/x";
import InstagramIcon from "@/components/icon/instagram";
import GithubIcon from "@/components/icon/github";
import LinkIcon from "@/components/icon/link";

type Props = {
  kind: "x" | "instagram" | "github" | "link"
  url: string
}

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
    case "link":
      icon = <LinkIcon/>
      break
  }

  return (
    <a href={url} className="text-gray-400 hover:text-gray-500">
      <span className="sr-only">{kind}</span>
      {icon}
    </a>
  )
}