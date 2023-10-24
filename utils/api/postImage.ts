import axios from "axios"

type Props = {
  accessToken: string
  image: File
}

/**
 * 画像をアップロードします
 */
export async function PostImageUpload({ accessToken, image }: Props): Promise<string> {
  const apiUrl = `${process.env.NEXT_PUBLIC_BE_URL}/api/image`

  // FormDataを用いてフォームデータを準備
  const formData = new FormData()
  formData.append("image", image)

  try {
    const res = await axios.post<string>(apiUrl, formData, {
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    })

    return res.data
  } catch (error) {
    throw error
  }
}
