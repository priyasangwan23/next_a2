"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SearchIcon } from "./Icons";
import { docsData } from "@/data/docs";
import { guidesData } from "@/data/guides";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredDocs = docsData.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredGuides = guidesData.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="search-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="search-dialog-header">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            className="search-dialog-input"
            placeholder="Type a command or search documentation..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 12,
              color: "#94a3b8",
              fontFamily: "var(--font-mono)",
            }}
          >
            ESC
          </button>
        </div>

        <div className="search-results-list">
          {filteredDocs.length === 0 && filteredGuides.length === 0 ? (
            <div style={{ padding: "24px 16px", textAlign: "center", color: "#64748b", fontSize: 13 }}>
              No results found for &quot;{query}&quot;
            </div>
          ) : (
            <>
              {filteredDocs.map((item) => (
                <Link
                  key={item.id}
                  href={`/documentation/${item.slug}`}
                  onClick={onClose}
                  className="search-result-item"
                >
                  <div className="search-result-title">
                    <span>{item.title}</span>
                    <span className="search-result-badge">{item.category}</span>
                  </div>
                  <div className="search-result-snippet">{item.subtitle}</div>
                </Link>
              ))}

              {filteredGuides.map((item) => (
                <Link
                  key={item.id}
                  href={`/guides/${item.slug.join("/")}`}
                  onClick={onClose}
                  className="search-result-item"
                >
                  <div className="search-result-title">
                    <span>{item.title}</span>
                    <span className="search-result-badge">Guide</span>
                  </div>
                  <div className="search-result-snippet">{item.subtitle}</div>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
