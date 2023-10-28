"use client"

import { CodeBlockContext } from "@/components/about/Context";

export default function PreComponent({ children, ...props }: any) {
  const blockCodeClasses = "bg-gray-100 mt-3 p-4 rounded-md text-white overflow-x-auto font-mono text-sm";

  return (
    <CodeBlockContext.Provider value={true}>
      <pre className={blockCodeClasses}>
        {children}
      </pre>
    </CodeBlockContext.Provider>
  );
}
