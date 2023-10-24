import React from "react";
import EditTab from "@/components/tab/EditTab";
import AboutClient from "@/app/edit/about/AboutClient";
import { SampleData } from "@/utils/sample";

/**
 * Aboutページです
 */
export default async function Index() {
  const slug = "totsumaru"

  return (
    <>
      <EditTab current={"about"}/>

      <AboutClient defaultValue={SampleData.about.markdown} slug={slug}/>
    </>
  )
}