import React from 'react';
import EditTab from "@/components/tab/EditTab";
import ProfileClient from "@/app/edit/profile/ProfileClient";
import { ProfileBackend } from "@/utils/api/api";
import { GetFindByAccessToken } from "@/utils/api/getFindByAccessToken";

export const dynamic = 'force-dynamic'

/**
 * プロフィールの編集ページです
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
      <EditTab current={"profile"}/>
      <ProfileClient
        imageUrl={profile?.avatar || ""}
        displayName={profile?.display_name || ""}
        introduction={profile?.introduction || ""}
        slug={profile?.slug || ""}
        x={profile?.x || ""}
        instagram={profile?.instagram || ""}
        github={profile?.github || ""}
        website={profile?.website || ""}
      />
    </>
  )
}