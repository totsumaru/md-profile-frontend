import React from "react";
import EditTab from "@/components/tab/EditTab";
import AboutClient from "@/app/edit/about/AboutClient";
import { ProfileBackend } from "@/utils/api/api";
import { GetFindByAccessToken } from "@/utils/api/getFindByAccessToken";

export const dynamic = 'force-dynamic'

/**
 * Aboutの編集ページです
 */
export default async function Index() {
  const token = "token-hello"

  let profile: ProfileBackend | undefined
  try {
    profile = await GetFindByAccessToken({ accessToken: token })
  } catch (e) {
    console.error("データを取得できません", e)
  }

  return (
    <>
      <EditTab current={"about"}/>

      <AboutClient
        defaultValue={profile?.markdown || ""}
        slug={profile?.slug || ""}
      />
    </>
  )
}