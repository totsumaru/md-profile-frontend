import React from "react";
import EditTab from "@/components/tab/EditTab";
import AboutClient from "@/app/edit/about/AboutClient";
import { ProfileBackend } from "@/utils/api/api";
import { GetFindByAccessToken } from "@/utils/api/getFindByAccessToken";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

/**
 * Aboutの編集ページです
 */
export default async function Index() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  let profile: ProfileBackend | undefined
  try {
    profile = await GetFindByAccessToken({ accessToken: session?.access_token || "" })
  } catch (e) {
    console.error("データを取得できません", e)
  }

  return (
    <>
      <EditTab current={"about"}/>

      <AboutClient
        accessToken={session?.access_token || ""}
        defaultValue={profile?.markdown || ""}
        slug={profile?.slug || ""}
      />
    </>
  )
}