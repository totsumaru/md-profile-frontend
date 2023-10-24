import axios from "axios"

type Props = {
  accessToken: string
  avatar: File
  displayName: string
  introduction: string
  slug: string
  x: string
  instagram: string
  github: string
  website: string
}

/**
 * プロフィールを登録します
 */
export async function PostProfile(props: Props) {
  const apiUrl = `${process.env.NEXT_PUBLIC_BE_URL}/api/profile`

  // FormDataを用いてフォームデータを準備
  const formData = new FormData()
  formData.append("avatar", props.avatar)
  formData.append("display_name", props.displayName)
  formData.append("introduction", props.introduction)
  formData.append("slug", props.slug)
  formData.append("x", props.x)
  formData.append("instagram", props.instagram)
  formData.append("github", props.github)
  formData.append("website", props.website)

  try {
    await axios.post(apiUrl, formData, {
      headers: {
        "Authorization": `Bearer ${props.accessToken}`
      }
    })
  } catch (error) {
    throw error
  }
}
