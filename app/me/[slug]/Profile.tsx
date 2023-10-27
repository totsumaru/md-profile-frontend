import SnsIcon from "@/components/SnsIcon";
import { ArrowUpOnSquareIcon, PencilIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

type Props = {
  imageUrl: string
  displayName: string
  introduction: string
  x: string
  instagram: string
  github: string
  website: string
}

/**
 * プロフィールです
 */
export default function Profile(props: Props) {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl grid-cols-1 gap-x-8 gap-y-20 xl:grid-cols-5">
        <ul role="list" className="space-y-12 divide-y divide-gray-200 xl:col-span-3">
          <div className="flex flex-col gap-6 sm:flex-row">

            {/* アバター */}
            <Image className="w-24 h-24 md:w-32 md:h-32 flex-none rounded-full object-cover ring-1 ring-gray-400"
                   width={200} height={200}
                   src={props.imageUrl} alt="avatar"
            />
            <div className="max-w-xl flex-auto">

              {/* 名前 */}
              <div className="flex justify-between items-center">
                <h3 className="mr-3 text-xl font-bold leading-8 tracking-tight text-gray-900">
                  {props.displayName}
                </h3>

                <div className="w-fit flex gap-1">
                  {/* 編集アイコン */}
                  <Link
                    href="../../edit/profile"
                    className="block w-fit rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:cursor-pointer">
                    <PencilIcon className="h-5 w-5"/>
                  </Link>
                  {/* 共有アイコン */}
                  <a
                    href="/edit/share"
                    className="block w-fit rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:cursor-pointer">
                    <ArrowUpOnSquareIcon className="h-5 w-5"/>
                  </a>
                </div>
              </div>

              {/* 説明 */}
              <p className="mt-4 text-base leading-7 text-gray-600">
                {props.introduction}
              </p>

              {/* SNSアイコン */}
              <ul role="list" className="mt-6 ml-1 flex gap-x-6">
                {props.x && (
                  <li><SnsIcon kind={"x"} url={`https://x.com/${props.x}`}/></li>
                )}
                {props.instagram && (
                  <li><SnsIcon kind={"instagram"} url={`https://www.instagram.com/${props.instagram}`}/></li>
                )}
                {props.github && (
                  <li><SnsIcon kind={"github"} url={`https://github.com/${props.github}`}/></li>
                )}
                {props.website && (
                  <li><SnsIcon kind={"website"} url={props.website}/></li>
                )}
              </ul>

            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}
