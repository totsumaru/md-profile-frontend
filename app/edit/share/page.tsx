import EditTab from "@/components/tab/EditTab";
import { SampleData } from "@/utils/sample";
import ShareClient from "@/app/edit/share/ShareClient";

/**
 * 公開設定ページです
 */
export default async function Index() {
  const slug = SampleData.slug
  const url = `${process.env.NEXT_PUBLIC_FE_URL}/me/${slug}`

  return (
    <>
      <EditTab current={"share"}/>
      <div className="mt-8">
        <p className="font-bold">あなたのプロフィールURL</p>

        <ShareClient publicUrl={url}/>
      </div>
    </>
  );
}
