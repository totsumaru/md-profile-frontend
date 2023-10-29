// import { ProfileBackend } from "@/utils/api/api";
// import axios from "axios";
//
// type Props = {
//   slug: string
// }
//
// /**
//  * プロフィールを取得します
//  */
// export async function GetFindBySlug({ slug }: Props): Promise<ProfileBackend> {
//   const apiUrl = `${process.env.NEXT_PUBLIC_BE_URL}/api/profile/slug/${slug}`;
//
//   try {
//     const response = await axios.get<ProfileBackend>(apiUrl);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }

import { ProfileBackend } from "@/utils/api/api";

type Props = {
  slug: string
}

/**
 * プロフィールを取得します
 */
export async function GetFindBySlug({ slug }: Props): Promise<ProfileBackend> {
  const apiUrl = `${process.env.NEXT_PUBLIC_BE_URL}/api/profile/slug/${slug}`;

  const headers = {
    'Content-Type': 'application/json'
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: headers,
    });

    if (!response.ok) {
      // レスポンスのステータスが OK（200番台）ではない場合はエラーを投げる
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`There was a problem fetching the profile: ${error}`);
  }
}
