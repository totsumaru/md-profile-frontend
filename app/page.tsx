import Profile from "@/components/Profile";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="">
      {/* プロフィール */}
      <div className="bg-white mt-3 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Profile/>
      </div>

      {/* コンテンツ */}
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 bg-blue-50 pt-10">
        <div className="mx-auto max-w-3xl pb-10 px-4 sm:px-6 lg:px-8">
          {/* About */}
          <div className="w-full mb-20">
            <About/>
          </div>
        </div>
      </div>
    </main>
  );
}
