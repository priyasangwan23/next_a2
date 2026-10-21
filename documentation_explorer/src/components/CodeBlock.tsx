"use client";

import React, { useState } from "react";
import { CopyIcon, CheckIcon } from "./Icons";

interface CodeBlockProps {
  filename?: string;
  code: string;
  language?: string;
}

export default function CodeBlock({ filename = "Terminal", code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="code-container">
      <div className="code-header">
        <span className="code-title">{filename}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="copy-btn"
          title="Copy code"
        >
          {copied ? (
            <>
              <CheckIcon className="copy-icon" style={{ width: 14, height: 14, color: "#10b981" }} />
              <span style={{ color: "#10b981" }}>Copied!</span>
            </>
          ) : (
            <>
              <CopyIcon className="copy-icon" style={{ width: 14, height: 14 }} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="code-body">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
