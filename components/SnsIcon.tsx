import React from "react";
import XIcon from "@/components/icon/x";
import InstagramIcon from "@/components/icon/instagram";
import GithubIcon from "@/components/icon/github";

type Props = {
  kind: "x" | "instagram" | "github"
}

export default function SnsIcon({ kind }: Props) {
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
  }

  return (
    <a href={"#"} className="text-gray-400 hover:text-gray-500">
      <span className="sr-only">{kind}</span>
      {icon}
    </a>
  )
}