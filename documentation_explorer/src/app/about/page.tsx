import React from "react";
import Link from "next/link";
import { BranchIcon, IndentArrowIcon, GearIcon } from "@/components/Icons";

export default function AboutPage() {
  return (
    <main className="main-content" style={{ maxWidth: 840 }}>
      <div className="breadcrumb-nav">
        <Link href="/documentation">Orbit Docs</Link>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-active">About</span>
      </div>

      <h1 className="page-title">About Orbit Docs</h1>
      <p className="page-subtitle">
        Documentation Explorer is built as a reference implementation of the Next.js App Router architecture, focusing on clean file-based routing, catch-all parameter resolution, and resilient user interfaces.
      </p>

      <section className="doc-section">
        <h2 className="section-title">Key Architectural Highlights</h2>
        <p className="doc-paragraph">
          This project illustrates core Next.js App Router patterns required for technical college vivas and production systems:
        </p>

        <div className="suggested-list" style={{ marginTop: 16 }}>
          <div className="suggested-card">
            <div className="suggested-card-left">
              <div className="suggested-icon-box">
                <BranchIcon style={{ width: 16, height: 16 }} />
              </div>
              <div>
                <div className="suggested-card-title">Dynamic Catch-all Routing ([...slug])</div>
                <div className="suggested-card-sub">
                  Handles multi-level documentation hierarchies cleanly with <code>app/documentation/[...slug]/page.tsx</code> and <code>app/guides/[...slug]/page.tsx</code>.
                </div>
              </div>
            </div>
          </div>

          <div className="suggested-card">
            <div className="suggested-card-left">
              <div className="suggested-icon-box">
                <IndentArrowIcon style={{ width: 16, height: 16 }} />
              </div>
              <div>
                <div className="suggested-card-title">Custom 404 Fallback Boundary</div>
                <div className="suggested-card-sub">
                  Integrates with Next.js <code>notFound()</code> API to trigger custom diagnostic and search experiences when a slug is unmapped.
                </div>
              </div>
            </div>
          </div>

          <div className="suggested-card">
            <div className="suggested-card-left">
              <div className="suggested-icon-box">
                <GearIcon style={{ width: 16, height: 16 }} />
              </div>
              <div>
                <div className="suggested-card-title">Zero Dependency Component Design</div>
                <div className="suggested-card-sub">
                  Built using vanilla CSS variables, pure React state, and native SVG icons without third-party bloat.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="overview-footer" style={{ marginTop: 48 }}>
        <div className="footer-status">
          <span className="status-dot"></span>
          <span>Orbit Documentation Explorer &copy; 2026</span>
        </div>
        <div className="footer-links">
          <Link href="/documentation">Documentation</Link>
          <Link href="/guides">Guides</Link>
        </div>
      </div>
    </main>
  );
}
