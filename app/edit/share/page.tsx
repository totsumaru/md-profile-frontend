import EditTab from "@/components/tab/EditTab";
import ShareClient from "@/app/edit/share/ShareClient";
import { ProfileBackend } from "@/utils/api/api";
import { GetFindByAccessToken } from "@/utils/api/getFindByAccessToken";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = 'force-dynamic'

/**
 * 公開設定ページです
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

  const publicUrl = `${process.env.NEXT_PUBLIC_FE_URL}/me/${profile?.slug}`

  return (
    <>
      <EditTab current={"share"}/>
      <div className="mt-8">
        <p className="font-bold">あなたのプロフィールURL</p>

        <ShareClient publicUrl={publicUrl}/>
      </div>
    </>
  );
}
