import React from "react";
import Link from "next/link";
import { IndentArrowIcon, BranchIcon, GearIcon, InfoIcon } from "@/components/Icons";
import CodeBlock from "@/components/CodeBlock";

export default function DocumentationPage() {
  const quickSetupCode = `$ npx orbit-cli create my-app --template standard
$ cd my-app && npm run dev`;

  return (
    <main className="main-content">
      <div className="breadcrumb-nav">
        <Link href="/documentation">Orbit Docs</Link>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-active">Overview</span>
      </div>

      <h1 className="page-title">Documentation</h1>
      <p className="page-subtitle">
        Welcome to Orbit Docs. Explore the <strong>core architecture</strong>, installation <strong>guides</strong>, and complete <strong>API references</strong> for building scalable modern web applications.
      </p>

      <div className="overview-cards-container">
        {/* Getting Started Card */}
        <Link href="/documentation/getting-started/introduction" className="overview-card">
          <div className="overview-card-header">
            <IndentArrowIcon className="overview-card-icon" />
            <h2 className="overview-card-title">Getting Started</h2>
          </div>
          <p className="overview-card-desc">
            Quickstart guides, prerequisites, and initial project configuration.
          </p>
          <span className="overview-card-link">
            Start reading &rarr;
          </span>
        </Link>

        {/* Core Concepts Card */}
        <Link href="/documentation/core-concepts/routing" className="overview-card">
          <div className="overview-card-header">
            <BranchIcon className="overview-card-icon" />
            <h2 className="overview-card-title">Core Concepts</h2>
          </div>
          <p className="overview-card-desc">
            Deep dive into nested routing patterns, catch-all paths, and data loading.
          </p>
          <span className="overview-card-link">
            Explore concepts &rarr;
          </span>
        </Link>

        {/* Reference Card */}
        <Link href="/documentation/reference/configuration" className="overview-card">
          <div className="overview-card-header">
            <GearIcon className="overview-card-icon" />
            <h2 className="overview-card-title">Reference</h2>
          </div>
          <p className="overview-card-desc">
            Detailed configuration parameters, flags, and CLI commands.
          </p>
          <span className="overview-card-link">
            View reference &rarr;
          </span>
        </Link>
      </div>

      {/* Info Callout */}
      <div className="callout callout-info">
        <InfoIcon className="callout-icon" />
        <div>
          <span className="callout-title">Architecture Alignment</span>
          Orbit 1.0 utilizes unified server-driven component composition with strict compile-time static checks. Ensure you review the configuration parameters before migration.
        </div>
      </div>

      {/* Quick Setup Terminal */}
      <CodeBlock
        filename="Terminal - Quick Setup"
        code={quickSetupCode}
        language="bash"
      />

      {/* Footer */}
      <div className="overview-footer">
        <div className="footer-status">
          <span className="status-dot"></span>
          <span>Orbit framework v1.0.4 stable release</span>
        </div>
        <div className="footer-links">
          <Link href="/about">Documentation License</Link>
          <Link href="/about">Changelog</Link>
        </div>
      </div>
    </main>
  );
}
