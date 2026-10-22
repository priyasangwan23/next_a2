"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  DownloadIcon,
  BranchIcon,
  GearIcon,
  SearchIcon,
  DiscordIcon,
} from "@/components/Icons";

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("/docs/routing/catch-all-param");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.toLowerCase().includes("rout")) {
      window.location.href = "/documentation/core-concepts/routing";
    } else if (searchQuery.toLowerCase().includes("install")) {
      window.location.href = "/documentation/getting-started/installation";
    } else if (searchQuery.toLowerCase().includes("config")) {
      window.location.href = "/documentation/reference/configuration";
    } else {
      window.location.href = "/documentation";
    }
  };

  return (
    <main className="main-content" style={{ maxWidth: 840 }}>
      {/* Monospace Breadcrumb Navigation */}
      <div className="breadcrumb-nav">
        <Link href="/documentation">Documentation</Link>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-active">404 Not Found</span>
      </div>

      {/* Status Badge */}
      <div className="status-badge">STATUS: 404_PAGE_NOT_FOUND</div>

      {/* Title & Subtitle */}
      <h1 className="page-title">Page not found</h1>
      <p className="page-subtitle" style={{ marginBottom: 20 }}>
        The documentation page you requested could not be located. The path may have changed or the slug identifier might be invalid.
      </p>

      {/* Back Link */}
      <Link href="/documentation" className="back-link">
        &larr; Back to Documentation
      </Link>

      {/* Quick Path Lookup Card */}
      <div className="lookup-card">
        <div className="lookup-card-header">
          <span>QUICK PATH LOOKUP</span>
          <span>Search query cache</span>
        </div>
        <form onSubmit={handleSearchSubmit} className="lookup-input-wrapper">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            className="lookup-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="/docs/routing/catch-all-param"
          />
          <button type="submit" className="lookup-btn">
            Search
          </button>
        </form>
      </div>

      {/* Suggested Articles */}
      <div className="suggested-section-header">
        <h2 className="suggested-title">Suggested articles</h2>
        <span className="suggested-subtitle">Frequently accessed resources</span>
      </div>

      <div className="suggested-list">
        <Link
          href="/documentation/getting-started/installation"
          className="suggested-card"
        >
          <div className="suggested-card-left">
            <div className="suggested-icon-box">
              <DownloadIcon style={{ width: 16, height: 16 }} />
            </div>
            <div>
              <div className="suggested-card-title">Quickstart & Installation</div>
              <div className="suggested-card-sub">
                Step-by-step setup guide to initialize your Orbit project scaffolding, package requirements, and environment flags.
              </div>
            </div>
          </div>
          <span className="suggested-card-arrow">&rarr;</span>
        </Link>

        <Link
          href="/documentation/core-concepts/routing"
          className="suggested-card"
        >
          <div className="suggested-card-left">
            <div className="suggested-icon-box">
              <BranchIcon style={{ width: 16, height: 16 }} />
            </div>
            <div>
              <div className="suggested-card-title">Routing and Catch-All Rules</div>
              <div className="suggested-card-sub">
                Comprehensive overview of file-based routing protocols, dynamic segment syntax, and custom 404 fallback handlers.
              </div>
            </div>
          </div>
          <span className="suggested-card-arrow">&rarr;</span>
        </Link>

        <Link
          href="/documentation/reference/configuration"
          className="suggested-card"
        >
          <div className="suggested-card-left">
            <div className="suggested-icon-box">
              <GearIcon style={{ width: 16, height: 16 }} />
            </div>
            <div>
              <div className="suggested-card-title">Configuration Reference</div>
              <div className="suggested-card-sub">
                Schema definitions, runtime parameters, and full schema dictionary for <code>orbit.config.ts</code>.
              </div>
            </div>
          </div>
          <span className="suggested-card-arrow">&rarr;</span>
        </Link>
      </div>

      {/* Orbit Diagnostic Terminal Log */}
      <div className="code-container" style={{ margin: "24px 0" }}>
        <div className="code-header" style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#94a3b8" }} />
            <span>orbit-diagnostic.log</span>
          </div>
          <span style={{ color: "#94a3b8" }}>HTTP 404</span>
        </div>
        <div className="code-body">
          <pre>
            <code style={{ color: "#cbd5e1" }}>
              {"# Diagnostic router trace\n"}
              {"$ orbit-cli verify --path \"/docs/routing/catch-all-param\"\n"}
              <span style={{ color: "#f87171" }}>
                {"ERR_ROUTER_SLUG_UNMATCHED: No route matching slug segment in manifest tree.\n"}
              </span>
              <span style={{ color: "#94a3b8" }}>
                {"-> Suggested resolution: run orbit sync --manifest or inspect orbit.routes.json"}
              </span>
            </code>
          </pre>
        </div>
      </div>

      {/* 404 Footer */}
      <div className="overview-footer" style={{ marginTop: 36 }}>
        <span>Looking for something specific that should be here?</span>
        <div className="footer-links">
          <a
            href="https://github.com/priyasangwan23/next_a2/issues"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 5 }}
          >
            <span>⏱</span>
            <span>Report broken link</span>
          </a>
          <span>&middot;</span>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 5 }}
          >
            <DiscordIcon style={{ width: 14, height: 14 }} />
            <span>Community Discord</span>
          </a>
        </div>
      </div>
    </main>
  );
}
