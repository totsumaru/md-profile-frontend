import Profile from "@/components/Profile";
import About from "@/components/About";
import Tabs from "@/components/Tabs";

export default function Home() {
  return (
    <main className="">
      {/* プロフィール */}
      <div className="bg-white mt-10 mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <Profile/>
        <Tabs/>
      </div>

      {/* コンテンツ */}
      <div className="mx-auto sm:px-6 lg:px-8 bg-blue-50 bg-opacity-50 pt-5">
        <div className="mx-auto max-w-3xl pb-10 px-6 sm:px-6 lg:px-8">
          {/* About */}
          <div className="w-full mb-20">
            <About/>
          </div>
        </div>
      </div>
    </main>
  );
}
