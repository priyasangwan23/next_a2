import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { docsData } from "@/data/docs";
import CodeBlock from "@/components/CodeBlock";
import TableOfContents from "@/components/TableOfContents";
import { InfoIcon } from "@/components/Icons";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export function generateStaticParams() {
  return docsData.map((doc) => ({
    slug: doc.slug.split("/"),
  }));
}

export default async function DocDetailPage({ params }: Props) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    notFound();
  }

  const slugPath = slug.join("/");
  const doc = docsData.find(
    (item) => item.slug.toLowerCase() === slugPath.toLowerCase()
  );

  if (!doc) {
    notFound();
  }

  return (
    <div className="content-wrapper-with-toc">
      <main className="main-content">
        {/* Monospace Breadcrumb Navigation */}
        <div className="breadcrumb-nav">
          {doc.breadcrumb.map((crumb, idx) => {
            const isLast = idx === doc.breadcrumb.length - 1;
            return (
              <React.Fragment key={crumb}>
                {idx > 0 && <span className="breadcrumb-sep">/</span>}
                {isLast ? (
                  <span className="breadcrumb-active">{crumb}</span>
                ) : (
                  <Link href="/documentation">{crumb}</Link>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Title & Subtitle */}
        <h1 className="page-title">{doc.title}</h1>
        <p className="page-subtitle">{doc.subtitle}</p>

        {/* Dynamic Sections */}
        {doc.sections.map((sec) => (
          <section key={sec.id} id={sec.id} className="doc-section">
            <h2 className="section-title">{sec.title}</h2>

            {sec.content?.map((p, i) => (
              <p
                key={i}
                className="doc-paragraph"
                dangerouslySetInnerHTML={{
                  __html: p
                    .replace(/`([^`]+)`/g, "<code>$1</code>")
                    .replace(/nested layout hierarchy/g, '<a href="/documentation/core-concepts/layouts" style="color: #4f46e5; text-decoration: underline;">nested layout hierarchy</a>')
                    .replace(/multi-root application strategies/g, '<a href="/documentation/core-concepts/routing" style="color: #4f46e5; text-decoration: underline;">multi-root application strategies</a>'),
                }}
              />
            ))}

            {sec.callout && (
              <div className="callout callout-info">
                <InfoIcon className="callout-icon" />
                <div>
                  {sec.callout.title && (
                    <span className="callout-title">{sec.callout.title} </span>
                  )}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: sec.callout.text.replace(/`([^`]+)`/g, "<code>$1</code>"),
                    }}
                  />
                </div>
              </div>
            )}

            {sec.codeBlock && (
              <CodeBlock
                filename={sec.codeBlock.filename}
                code={sec.codeBlock.code}
                language={sec.codeBlock.language}
              />
            )}

            {sec.table && (
              <div className="docs-table-wrapper">
                <table className="docs-table">
                  <thead>
                    <tr>
                      {sec.table.headers.map((h) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sec.table.rows.map((row, rIdx) => (
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
          </section>
        ))}

        {/* Bottom Pagination */}
        <div className="pagination-nav">
          {doc.previous ? (
            <Link href={doc.previous.href} className="pagination-btn prev">
              <span className="pagination-label">Previous</span>
              <span className="pagination-title">&larr; {doc.previous.title}</span>
            </Link>
          ) : <div />}

          {doc.next ? (
            <Link href={doc.next.href} className="pagination-btn next">
              <span className="pagination-label">Next</span>
              <span className="pagination-title">{doc.next.title} &rarr;</span>
            </Link>
          ) : <div />}
        </div>
      </main>

      {/* Right Table of Contents */}
      {doc.onThisPage && doc.onThisPage.length > 0 && (
        <TableOfContents items={doc.onThisPage} activeId="catch-all-routes" />
      )}
    </div>
  );
}
