import Footer from "@/components/Footer";
import XLoginButton from "@/components/button/XLoginButton";

export default function Index() {
  return (
    <div className="bg-blue-50">
      <div className="relative isolate pt-14">
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                プロフィールサイトを作ろう。
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                フリーランス/クリエイター/副業など、個人で活躍する方が、すぐに自分だけのプロフィールページを作成できます。
                マークダウンで記述可能。経歴、スキル、作品を美しく整理して発信。今、自分を世界に紹介しましょう。
              </p>
              <p className="mt-8 text-lg leading-8 text-gray-600">
                無料で利用できます。
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <XLoginButton/>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div
                className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  src="/top.png"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
