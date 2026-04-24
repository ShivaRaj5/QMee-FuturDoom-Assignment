import { useState } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy } from "lucide-react";

export function CodeBlock({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const formatLanguage = (lang: string) => {
    const map: Record<string, string> = {
      js: "JavaScript",
      javascript: "JavaScript",
      py: "Python",
      python: "Python",
      cpp: "C++",
    };
    return map[lang] || lang.toUpperCase();
  };

  return (
    <div className="rounded-xl overflow-hidden border border-gray-700 bg-[#0d1117] my-4">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-sm text-gray-300">
        <span>{formatLanguage(language)}</span>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 hover:text-white"
        >
          <Copy size={16} />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* Code */}
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: "16px",
          background: "#0d1117",
        }}
        codeTagProps={{
          style: { background: "transparent" }, // ✅ remove inner bg
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
