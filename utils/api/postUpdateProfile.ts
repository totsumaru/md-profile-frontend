import axios from "axios"
import { ProfileBackend } from "@/utils/api/api";

export type PostProfileProps = {
  accessToken: string
  avatar?: File | null
  displayName: string
  introduction: string
  slug: string
  x: string
  instagram: string
  github: string
  website: string
}

/**
 * プロフィールを更新します
 */
export async function PostUpdateProfile(props: PostProfileProps): Promise<ProfileBackend> {
  const apiUrl = `${process.env.NEXT_PUBLIC_BE_URL}/api/profile/update`

  // FormDataを用いてフォームデータを準備
  const formData = new FormData()
  props.avatar && formData.append("avatar", props.avatar)
  formData.append("slug", props.slug)
  formData.append("display_name", props.displayName)
  formData.append("introduction", props.introduction)
  formData.append("x", props.x)
  formData.append("instagram", props.instagram)
  formData.append("github", props.github)
  formData.append("website", props.website)

  try {
    const res = await axios.post(apiUrl, formData, {
      headers: {
        "Authorization": `Bearer ${props.accessToken}`
      }
    })
    return res.data
  } catch (error) {
    throw error
  }
}
