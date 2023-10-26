import axios from "axios"

type Props = {
  accessToken: string
  image: File
}

type Res = {
  image_url: string
}

/**
 * 画像をアップロードします
 */
export async function PostUploadImage({ accessToken, image }: Props): Promise<string> {
  const apiUrl = `${process.env.NEXT_PUBLIC_BE_URL}/api/image/upload`

  // FormDataを用いてフォームデータを準備
  const formData = new FormData()
  formData.append("image", image)

  try {
    const res = await axios.post<Res>(apiUrl, formData, {
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    })

    return res.data.image_url
  } catch (error) {
    throw error
  }
}
