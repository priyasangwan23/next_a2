"use client";

import React, { useState } from "react";
import { EditPencilIcon } from "./Icons";

interface TableOfContentsProps {
  items: { id: string; title: string }[];
  activeId?: string;
}

export default function TableOfContents({ items, activeId: initialActive }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState(initialActive || (items[1]?.id || items[0]?.id));

  const handleScrollTo = (id: string) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="toc-container">
      <div className="toc-header">ON THIS PAGE</div>
      <ul className="toc-list">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleScrollTo(item.id)}
                className={`toc-link ${isActive ? "active" : ""}`}
                style={{
                  background: isActive ? "#eff6ff" : "none",
                  border: "none",
                  textAlign: "left",
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="toc-divider" />

      <a
        href="https://github.com/priyasangwan23/next_a2"
        target="_blank"
        rel="noopener noreferrer"
        className="toc-github-link"
      >
        <EditPencilIcon style={{ width: 14, height: 14 }} />
        <span>Edit this page on GitHub</span>
      </a>
    </aside>
  );
}
