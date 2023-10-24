import React from "react";
import EditTab from "@/components/tab/EditTab";
import Client from "@/app/edit/about/Client";
import { SampleMD } from "@/utils/markdown_tmp";
import PreviewButton from "@/components/button/PreviewButton";

export default function Index() {
  const slug = "totsumaru"

  return (
    <>
      <EditTab current={"about"}/>

      <Client defaultValue={SampleMD} slug={slug}/>
    </>
  )
}