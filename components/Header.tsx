import Image from "next/image";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import ToLoginPageButton from "@/components/button/ToLoginPageButton";
import Link from "next/link";

/**
 * Headerのコンポーネントです
 */
export default async function Header() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  return (
    <div className="w-full top-0 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
          {/* 左側(ロゴ) */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Company</span>
              <Image
                width={100} height={100}
                className="h-8 w-auto sm:h-10"
                src="/logo.png"
                alt=""
              />
            </Link>
          </div>

          <div className="flex items-center justify-end md:flex-1 lg:w-0">
            <ToLoginPageButton isLogin={!!session}/>
          </div>
        </div>
      </div>
    </div>
  );
}
