import Profile from "@/components/Profile";
import About from "@/components/About";
import ProfileTab from "@/components/tab/ProfileTab";
import { SampleMD } from "@/utils/markdown_tmp";

export default function Index({
  params: { slug }
}: {
  params: { slug: string }
}) {
  return (
    <main className="">
      {/* プロフィール */}
      <div className="bg-white mt-7 sm:mt-10 mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <Profile/>
        <div className="mt-3">
          <ProfileTab/>
        </div>
      </div>

      {/* コンテンツ */}
      <div className="mx-auto sm:px-6 lg:px-8 bg-blue-50 bg-opacity-50 pt-5">
        <div className="mx-auto max-w-3xl pb-10 px-6 sm:px-6 lg:px-8">
          {/* About */}
          <div className="w-full mb-20">
            <About markdownText={SampleMD}/>
          </div>
        </div>
      </div>
    </main>
  );
}