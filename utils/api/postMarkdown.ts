import axios from "axios";

type Props = {
  accessToken: string
  markdown: string
}

/**
 * マークダウンを登録します
 */
export async function PostMarkdown({ accessToken, markdown }: Props) {
  const apiUrl = `${process.env.NEXT_PUBLIC_BE_URL}/api/markdown`

  // FormDataを用いてフォームデータを準備
  const formData = new FormData()
  formData.append("markdown", markdown)

  try {
    await axios.post(apiUrl, formData, {
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    })
  } catch (error) {
    throw error
  }
}
