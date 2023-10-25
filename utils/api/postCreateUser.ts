import { ProfileBackend } from "@/utils/api/api";

type Props = {
  accessToken: string
}

/**
 * ユーザーを新規作成します
 */
export async function PostCreateUser(
  { accessToken }: Props
): Promise<ProfileBackend> {
  const apiUrl = `${process.env.NEXT_PUBLIC_BE_URL}/api/create/user`

  // try {
  //   const res = await axios.post<ProfileBackend>(apiUrl, {
  //     headers: {
  //       "Authorization": `Bearer ${accessToken}`
  //     }
  //   })
  //
  //   return res.data
  // } catch (error) {
  //   throw error
  // }

  return {
    avatar: "https://pbs.twimg.com/profile_images/1647910051414429696/PzPDwwmk_400x400.jpg",
    display_name: "Totsumaru｜webアプリを作る人",
    introduction: "",
    slug: "totsumaru",
    x: "totsumaru_dot",
    instagram: "totsumaru_dot",
    github: "totsumaru",
    website: "https://google.com",
    markdown: "",
  }
}
