import React from 'react';
import EditTab from "@/components/tab/EditTab";
import ProfileClient from "@/app/edit/profile/ProfileClient";
import { ProfileBackend } from "@/utils/api/api";
import { GetFindByAccessToken } from "@/utils/api/getFindByAccessToken";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

/**
 * プロフィールの編集ページです
 */
export default async function Index() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  let profile: ProfileBackend | undefined
  try {
    profile = await GetFindByAccessToken({
      accessToken: session?.access_token || ""
    })
  } catch (e) {
    console.error("データを取得できません", e)
  }

  return (
    <>
      <EditTab current={"profile"}/>
      <ProfileClient
        accessToken={session?.access_token || ""}
        imageUrl={profile?.avatar || ""}
        displayName={profile?.display_name || ""}
        introduction={profile?.introduction || ""}
        slug={profile?.slug || ""}
        x={profile?.link.x || ""}
        instagram={profile?.link.instagram || ""}
        github={profile?.link.github || ""}
        website={profile?.link.website || ""}
      />
    </>
  )
}