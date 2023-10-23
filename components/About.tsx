import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const markdownText = `
# hello

## h2です

今日はいい日ですね
`;

export default function About() {
  return (
    <>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // カスタムレンダラーを定義
          h1: ({ node, ...props }) => <h1 className="text-2xl font-bold" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-xl font-semibold" {...props} />,
        }}
      >
        {markdownText}
      </ReactMarkdown>
    </>
  );
}
