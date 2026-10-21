"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { OrbitLogo, SearchIcon } from "./Icons";
import SearchModal from "./SearchModal";

export default function Navbar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const isGuides = pathname.startsWith("/guides");
  const isAbout = pathname.startsWith("/about");
  const isDocs = !isGuides && !isAbout;

  // Global keyboard shortcut for Ctrl+K / Cmd+K
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="navbar-left">
          <Link href="/documentation" className="brand-link">
            <OrbitLogo className="brand-icon" />
            <span className="brand-text">Orbit Docs</span>
          </Link>

          <nav className="nav-links">
            <Link
              href="/documentation"
              className={`nav-item ${isDocs ? "active" : ""}`}
            >
              Documentation
            </Link>
            <Link
              href="/guides/nextjs/app-router/dynamic-routes"
              className={`nav-item ${isGuides ? "active" : ""}`}
            >
              Guides
            </Link>
            <Link
              href="/about"
              className={`nav-item ${isAbout ? "active" : ""}`}
            >
              About
            </Link>
          </nav>
        </div>

        <div className="navbar-right">
          <button
            type="button"
            className="search-box-btn"
            onClick={() => setIsSearchOpen(true)}
          >
            <SearchIcon className="search-icon" />
            <span>{isGuides ? "Search guides, APIs, conf..." : "Search documentation..."}</span>
            <span className="search-shortcut">⌘K</span>
          </button>

          <div className="nav-divider" />

          <span className="version-pill">{isAbout ? "Version 1.0" : "v1.0"}</span>

          <button
            type="button"
            className="icon-btn"
            title="Orbit Architecture Specification"
            onClick={() => alert("Orbit Docs v1.0.4 - Next.js Architecture Explorer")}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
          </button>
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
