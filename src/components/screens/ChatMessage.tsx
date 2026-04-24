import ReactMarkdown from "react-markdown";
import { CodeBlock } from "./CodeBlock";

export function ChatMessage({ message }: { message: string }) {
  return (
    <ReactMarkdown
      components={{
        code({ inline, className, children }) {
          const match = /language-(\w+)/.exec(className || "");
          const language = match ? match[1] : "plaintext";

          if (!inline) {
            return (
              <CodeBlock
                language={language}
                code={String(children).trim()}
              />
            );
          }

          return <code className="bg-gray-800 px-1 rounded">{children}</code>;
        },
      }}
    >
      {message}
    </ReactMarkdown>
  );
}
