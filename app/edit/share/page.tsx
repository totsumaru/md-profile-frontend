import EditTab from "@/components/tab/EditTab";
import ShareClient from "@/app/edit/share/ShareClient";
import { ProfileBackend } from "@/utils/api/api";
import { GetFindByAccessToken } from "@/utils/api/getFindByAccessToken";

export const dynamic = 'force-dynamic'

/**
 * 公開設定ページです
 */
export default async function Index() {
  const token = "token-hello"

  let profile: ProfileBackend | undefined
  try {
    profile = await GetFindByAccessToken({ accessToken: token })
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
