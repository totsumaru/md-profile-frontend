import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const markdownText = `
# h1です

## h2です

### h3です

#### h4です

- list1
- list2
  - list3

pです
`;

export default function About() {
  return (
    <>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // カスタムレンダラーを定義
          h1: ({ node, ...props }) => (
            <h1 className="mt-3 text-4xl font-bold pb-1 border-b border-gray-300" {...props} />),
          h2: ({ node, ...props }) => (
            <h2 className="mt-3 text-3xl font-bold pb-1 border-b border-gray-200" {...props} />),
          h3: ({ node, ...props }) => (<h3 className="mt-3 text-2xl font-bold pb-1" {...props} />),
          h4: ({ node, ...props }) => (<h4 className="mt-3 text-xl font-bold pb-1" {...props} />),
          p: ({ node, ...props }) => (<p className="mt-3 text-base" {...props} />),
          ul: ({ node, ...props }) => (<ul className="list-disc ml-5" {...props} />),
          ol: ({ node, ...props }) => (<ol className="list-decimal ml-5" {...props} />),
          li: ({ node, ...props }) => (<li className="mb-1" {...props} />),
        }}
      >
        {markdownText}
      </ReactMarkdown>
    </>
  );
}
