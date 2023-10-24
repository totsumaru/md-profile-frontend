"use client"

import React from 'react';
import EditTab from "@/components/tab/EditTab";
import ProfileClient from "@/app/edit/profile/ProfileClient";
import { SampleData } from "@/utils/sample";

export const dynamic = 'force-dynamic'

/**
 * プロフィールの編集ページです
 */
export default function Index() {
  return (
    <>
      <EditTab current={"profile"}/>
      <ProfileClient
        imageUrl={SampleData.imageUrl}
        displayName={SampleData.displayName}
        introduction={SampleData.introduction}
        slug={SampleData.slug}
        x={SampleData.x}
        instagram={SampleData.instagram}
        github={SampleData.github}
        website={SampleData.website}
      />
    </>
  )
}