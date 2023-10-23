import Profile from "@/components/profile";

export default function Home() {
  return (
    <main className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* この中にコードを書く */}
          <Profile/>
        </div>
      </div>
    </main>
  );
}
