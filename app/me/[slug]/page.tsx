import Profile from "@/app/me/[slug]/Profile";
import About from "@/components/About";
import ProfileTab from "@/components/tab/ProfileTab";
import { SampleData } from "@/utils/sample";

/**
 * ユーザーの公開ページ(me)です
 */
export default function Index({
  params: { slug }
}: {
  params: { slug: string }
}) {
  return (
    <main className="">
      {/* プロフィール */}
      <div className="bg-white mt-7 sm:mt-10 mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <Profile
          imageUrl={SampleData.imageUrl}
          displayName={SampleData.displayName}
          introduction={SampleData.introduction}
          x={SampleData.x}
          instagram={SampleData.instagram}
          github={SampleData.github}
          website={SampleData.website}
        />
        <div className="mt-6">
          <ProfileTab/>
        </div>
      </div>

      {/* コンテンツ */}
      <div className="mx-auto sm:px-6 lg:px-8 bg-blue-50 bg-opacity-50 pt-5">
        <div className="mx-auto max-w-3xl pb-10 px-6 sm:px-6 lg:px-8">
          {/* About */}
          <div className="w-full mb-20">
            <About markdownText={SampleData.about.markdown}/>
          </div>
        </div>
      </div>
    </main>
  );
}