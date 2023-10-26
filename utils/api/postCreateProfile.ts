import { ProfileBackend } from "@/utils/api/api";
import axios from "axios";

type Props = {
  accessToken: string
}

/**
 * ユーザーを新規作成します
 */
export async function PostCreateProfile({ accessToken }: Props): Promise<ProfileBackend> {
  const apiUrl = `${process.env.NEXT_PUBLIC_BE_URL}/api/profile/create`

  try {
    const res = await axios.post<ProfileBackend>(apiUrl, {}, {
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    })

    return res.data
  } catch (error) {
    throw error
  }
}
