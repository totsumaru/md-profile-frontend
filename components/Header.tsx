import Image from "next/image";

/**
 * Headerのコンポーネントです
 */
export default function Header() {
  return (
    <div className="w-full top-0 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
          {/* 左側(ロゴ) */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Company</span>
              <Image
                width={100} height={100}
                className="h-8 w-auto sm:h-10"
                src="https://via.placeholder.com/150"
                alt=""
              />
            </a>
          </div>

          <div className="flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="ml-6 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              ログイン
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
