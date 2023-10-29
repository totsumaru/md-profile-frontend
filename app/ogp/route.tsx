import { ImageResponse } from 'next/server';
import { GetFindBySlug } from "@/utils/api/getFindBySlug";

export const runtime = 'edge';

const imageURL = "https://assets.profio.jp/ogp-1.png"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  let avatarURL = imageURL
  let displayName = ""
  let introduction = ""

  try {
    const backendRes = await GetFindBySlug({ slug: slug || "" })
    avatarURL = backendRes.avatar
    displayName = backendRes.display_name
    introduction = backendRes.introduction
  } catch (e) {
    console.error(e)
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center', // 上下中央揃え
          color: 'black',
          backgroundImage: `url(${imageURL})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover", // 背景画像をカバーにする
          width: '1200px',
          height: '630px',
        }}
      >
        {/* アバター画像 */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: '0 0 auto',
          paddingLeft: '130px', // 左の余白
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatarURL || ""}
            style={{
              borderRadius: '50%', // 丸い形状にする
              maxWidth: '300px', // 最大幅を制限
              maxHeight: '300px', // 最大高さを制限
            }}
            alt={displayName || "Profile Image"}
          />
        </div>

        {/* ユーザー名と紹介文 */}
        <div style={{
          display: 'flex',
          flexDirection: "column",
          justifyContent: 'center',
          alignItems: 'flex-start', // 左揃え
          marginLeft: '80px', // アバターからの余白
        }}>
          {/* ユーザー名 */}
          <p style={{
            color: "black", // 濃いグレーの文字色
            fontSize: "40px",
            fontWeight: "bold", // 太字
            margin: '0 0 20px 0', // 下の余白を増やす
            maxWidth: '600px', // 最大幅
            wordWrap: 'break-word', // 単語の途中で改行する
          }}>
            {displayName}
          </p>

          {/* 紹介文 */}
          <p style={{
            color: "black", // 濃いグレーの文字色
            fontSize: "18px", // 小さめの文字サイズ
            lineHeight: '1.5', // 行の高さ
            textAlign: 'left', // 左揃え
            margin: '0', // 余白なし
            maxWidth: '600px', // 最大幅
            wordWrap: 'break-word', // 単語の途中で改行する
          }}>
            {introduction}
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
