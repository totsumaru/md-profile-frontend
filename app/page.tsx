import Profile from "@/components/Profile";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* この中にコードを書く */}
          <Profile/>

          {/* About */}
          <div className="bg-amber-50 w-full">
            <About/>
          </div>

        </div>
      </div>
    </main>
  );
}
