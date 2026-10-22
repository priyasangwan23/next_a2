import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guidesData } from "@/data/guides";
import CodeBlock from "@/components/CodeBlock";
import FeedbackWidget from "@/components/FeedbackWidget";
import { InfoIcon, WarningIcon } from "@/components/Icons";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export function generateStaticParams() {
  return guidesData.map((guide) => ({
    slug: guide.slug,
  }));
}

export default async function GuideDetailPage({ params }: Props) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    notFound();
  }

  const slugPath = slug.join("/");
  const guide = guidesData.find(
    (item) => item.slug.join("/").toLowerCase() === slugPath.toLowerCase()
  );

  if (!guide) {
    notFound();
  }

  return (
    <main className="main-content" style={{ maxWidth: 840 }}>
      {/* Monospace Breadcrumb Navigation */}
      <div className="breadcrumb-nav">
        {guide.breadcrumb.map((crumb, idx) => {
          const isLast = idx === guide.breadcrumb.length - 1;
          return (
            <React.Fragment key={crumb}>
              {idx > 0 && <span className="breadcrumb-sep">/</span>}
              {isLast ? (
                <span className="breadcrumb-active">{crumb}</span>
              ) : (
                <Link href="/guides">{crumb}</Link>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Badges */}
      <div className="guide-badge-row">
        <span className="guide-pill">{guide.badge}</span>
        <span className="guide-read-time">Estimated read: {guide.readTime}</span>
      </div>

      {/* Title & Subtitle */}
      <h1 className="page-title">{guide.title}</h1>
      <p className="page-subtitle">{guide.subtitle}</p>

      {/* Prerequisite Callout */}
      {guide.prerequisite && (
        <div className="callout callout-info">
          <InfoIcon className="callout-icon" />
          <div>
            <span className="callout-title">{guide.prerequisite.title}</span>
            <span
              dangerouslySetInnerHTML={{
                __html: guide.prerequisite.text.replace(
                  /`([^`]+)`/g,
                  "<code>$1</code>"
                ),
              }}
            />
          </div>
        </div>
      )}

      {/* Numbered Steps */}
      {guide.steps.map((step) => (
        <div key={step.number} className="guide-step">
          <div className="guide-step-header">
            <span className="step-number-badge">{step.number}</span>
            <h2 className="step-title">{step.title}</h2>
          </div>

          <p
            className="doc-paragraph"
            dangerouslySetInnerHTML={{
              __html: step.text.replace(/`([^`]+)`/g, "<code>$1</code>"),
            }}
          />

          {step.codeBlock && (
            <CodeBlock
              filename={step.codeBlock.filename}
              code={step.codeBlock.code}
              language={step.codeBlock.language}
            />
          )}

          {step.table && (
            <div className="docs-table-wrapper">
              <table className="docs-table">
                <thead>
                  <tr>
                    {step.table.headers.map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {step.table.rows.map((row, rIdx) => (
                    <tr key={rIdx}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {step.callout && (
            <div className="callout callout-warning">
              <WarningIcon className="callout-icon" />
              <div>
                {step.callout.title && (
                  <span className="callout-title">{step.callout.title} </span>
                )}
                <span
                  dangerouslySetInnerHTML={{
                    __html: step.callout.text.replace(
                      /`([^`]+)`/g,
                      "<code>$1</code>"
                    ),
                  }}
                />
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Bottom Pagination */}
      <div className="pagination-nav">
        {guide.previous ? (
          <Link href={guide.previous.href} className="pagination-btn prev">
            <span className="pagination-label">Previous</span>
            <span className="pagination-title">&larr; {guide.previous.title}</span>
          </Link>
        ) : <div />}

        {guide.next ? (
          <Link href={guide.next.href} className="pagination-btn next">
            <span className="pagination-label">Next</span>
            <span className="pagination-title">{guide.next.title} &rarr;</span>
          </Link>
        ) : <div />}
      </div>

      {/* Feedback Widget */}
      <FeedbackWidget />
    </main>
  );
}
