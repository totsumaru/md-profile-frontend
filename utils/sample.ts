const SampleMD = `
# 私のプロフィール

Goを専業とするエンジニアです。
最近はNext.jsも取り組んでいます。

テキスト
テキスト2行目

## h2です

[hello](https://google.com)
aタグです: https://google.com
![img](https://media.discordapp.net/attachments/1112319028225130607/1165946918967455754/atari.png?ex=6548b3af&is=65363eaf&hm=5c5b6a62c63f0447d38ea5f89447d836000697363794409afaf55d5dfb06505a&=&width=2020&height=1136)

### h3です

a

#### h4です

- list1
- list2
  - list3

pです

|hello|foo|
|---|---|
|a|b|
`

export const SampleData = {
  imageUrl: "https://pbs.twimg.com/profile_images/1647910051414429696/PzPDwwmk_400x400.jpg",
  displayName: "Totsumaru｜webアプリを作る人",
  introduction: "GoとNext.jsを頑張っています。",
  slug: "totsumaru",
  x: "totsumaru_dot",
  instagram: "totsumaru_dot",
  github: "totsumaru",
  website: "https://google.com",
  about: {
    markdown: SampleMD
  }
}
