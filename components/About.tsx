import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

const markdownText = `
# 私のプロフィール

Goを専業とするエンジニアです。
最近はNext.jsも取り組んでいます。

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
`;

export default function About() {
  return (
    <>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        components={{
          // カスタムレンダラーを定義
          h1: ({ node, ...props }) => (
            <h1 className="mt-7 pb-1 text-4xl font-bold border-b border-gray-300" {...props} />),
          h2: ({ node, ...props }) => (
            <h2 className="mt-7 pb-1 text-3xl font-bold border-b border-gray-200" {...props} />),
          h3: ({ node, ...props }) => (<h3 className="mt-7 text-2xl font-bold" {...props} />),
          h4: ({ node, ...props }) => (<h4 className="mt-7 text-xl font-bold" {...props} />),
          p: ({ node, ...props }) => (<p className="mt-3 text-base leading-relaxed mb-4" {...props} />),
          ul: ({ node, ...props }) => (<ul className={`mt-3 list-disc ml-5 ${props.className}`} {...props} />),
          ol: ({ node, ...props }) => (<ol className="list-decimal ml-5" {...props} />),
          li: ({ node, ...props }) => {
            // TypeScriptにnodeが任意のプロパティを持つことができるオブジェクトであると明示
            const anyNode = node as any;

            // anyNodeまたはその親がundefinedでないことを確認
            const isNested = anyNode && anyNode.parent && anyNode.parent.type === 'list' && anyNode.parent.parent && anyNode.parent.parent.type === 'listItem';
            return (
              <li className={`${isNested ? 'mt-0' : 'mt-3'}`} {...props} />
            );
          },
          a: ({ node, ...props }) => (
            <a
              {...props}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            />
          ),
          img: ({ src, alt }) => {
            // altタグに基づいてスタイルを変更
            const isHalf = alt?.includes("#half");
            const cleanAlt = alt?.replace("#half", ""); // 実際のaltテキストを取得

            return (
              <img
                src={src}
                alt={cleanAlt}
                className={isHalf ? "w-1/2 mt-3" : "w-full mt-3"}
              />
            );
          },
          table: ({ node, ...props }) => (
            <table className="min-w-full divide-y divide-gray-300 border border-gray-300" {...props} />
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-gray-50" {...props} />
          ),
          tbody: ({ node, ...props }) => (
            <tbody className="bg-white divide-y divide-gray-200" {...props} />
          ),
          tr: ({ node, ...props }) => (
            <tr {...props} />
          ),
          th: ({ node, ...props }) => (
            <th scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6" {...props} />
          ),
        }}
      >
        {markdownText}
      </ReactMarkdown>
    </>
  );
}
