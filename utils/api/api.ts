// バックエンドのプロフィールのオブジェクトです
export type ProfileBackend = {
  id: string
  slug: string
  avatar: string
  display_name: string
  introduction: string
  link: {
    x: string
    instagram: string
    github: string
    website: string
  }
  markdown: string
}