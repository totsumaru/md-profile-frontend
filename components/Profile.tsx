import SnsIcon from "@/components/SnsIcon";

export default function Profile() {
  return (
    <div className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
        <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
          <div className="flex flex-col gap-10 pt-12 sm:flex-row">
            {/* アイコン */}
            <img className="w-32 h-32 flex-none rounded-full object-cover"
                 src={"https://pbs.twimg.com/profile_images/1647910051414429696/PzPDwwmk_400x400.jpg"} alt=""
            />
            <div className="max-w-xl flex-auto">

              {/* 名前 */}
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                戸塚翔太 / Totsumaru
              </h3>

              {/* 説明 */}
              <p className="mt-6 text-base leading-7 text-gray-600">
                webサービスやbot開発をしています。NFTプロジェクトのエンジニアや、受託開発をしていましたが、今年度から自社開発に力を入れていきます。Go,Next.js,Typescript
              </p>

              {/* SNSアイコン */}
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <SnsIcon/>
                </li>
              </ul>

            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}
