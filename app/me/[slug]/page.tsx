import Profile from "@/app/me/[slug]/Profile";
import About from "@/components/About";
import ProfileTab from "@/components/tab/ProfileTab";
import { ProfileBackend } from "@/utils/api/api";
import { GetFindBySlug } from "@/utils/api/getFindBySlug";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Metadata } from "next";
import NotFound404 from "@/components/error/NotFound404";

export const revalidate = 100

export async function generateMetadata({
  params: { slug }
}: {
  params: { slug: string }
}): Promise<Metadata> {
  // fetch data
  let profile: ProfileBackend | undefined
  try {
    profile = await GetFindBySlug({ slug: slug })
  } catch (e) {
    console.error("データを取得できません", e)
  }

  return {
    title: profile?.display_name,
    description: `${profile?.introduction} / Profio`,
    openGraph: {
      images: {
        url: `${process.env.NEXT_PUBLIC_FE_URL}/ogp?slug=${slug}`,
      },
    },
  }
}

/**
 * ユーザーの公開ページ(me)です
 */
export default async function Index({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const supabase = createServerComponentClient({ cookies })
  const { data: { user } } = await supabase.auth.getUser()

  let profile: ProfileBackend | undefined
  try {
    profile = await GetFindBySlug({ slug: slug })
  } catch (e) {
    console.error("データを取得できません", e)
    return <NotFound404/>
  }

  return (
    <main className="">
      {/* プロフィール */}
      <div className="bg-white mt-7 sm:mt-10 mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <Profile
          imageUrl={profile?.avatar || ""}
          displayName={profile?.display_name || ""}
          introduction={profile?.introduction || ""}
          x={profile?.link.x || ""}
          instagram={profile?.link.instagram || ""}
          github={profile?.link.github || ""}
          website={profile?.link.website || ""}
          isLogin={!!user}
        />
        <div className="mt-6">
          <ProfileTab/>
        </div>
      </div>

      {/* コンテンツ */}
      <div className="mx-auto sm:px-6 lg:px-8 h-full bg-blue-50 bg-opacity-50 pt-5">
        <div className="mx-auto max-w-3xl pb-10 px-6 sm:px-6 lg:px-8">
          {/* About */}
          <div className="w-full mb-20">
            <About markdownText={profile?.markdown || ""}/>
          </div>
        </div>
      </div>
    </main>
  );
}