import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

const markdownText = `
# 私のプロフィール

Goを専業とするエンジニアです。
最近はNext.jsも取り組んでいます。

## h2です

### h3です

a

#### h4です

- list1
- list2
  - list3
- list4

pです

1行明けたPです
したのPです
`;

export default function About() {
  return (
    <>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        components={{
          // カスタムレンダラーを定義
          h1: ({ node, ...props }) => (
            <h1 className="mt-5 pb-1 text-4xl font-bold border-b border-gray-300" {...props} />),
          h2: ({ node, ...props }) => (
            <h2 className="mt-5 pb-1 text-3xl font-bold border-b border-gray-200" {...props} />),
          h3: ({ node, ...props }) => (<h3 className="mt-5 text-2xl font-bold" {...props} />),
          h4: ({ node, ...props }) => (<h4 className="mt-5 text-xl font-bold" {...props} />),
          p: ({ node, ...props }) => (<p className="mt-3 text-base" {...props} />),
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
        }}
      >
        {markdownText}
      </ReactMarkdown>
    </>
  );
}
