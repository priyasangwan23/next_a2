"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IndentArrowIcon,
  DownloadIcon,
  FolderIcon,
  BranchIcon,
  LayoutIcon,
  RefreshIcon,
  GearIcon,
  TerminalIcon,
  CodeBracketIcon,
  FileTextIcon,
} from "./Icons";
import { docCategories } from "@/data/docs";
import { guidesCategories } from "@/data/guides";

export default function Sidebar() {
  const pathname = usePathname();
  const isGuides = pathname.startsWith("/guides");

  const getDocIcon = (iconName: string) => {
    switch (iconName) {
      case "arrow":
        return <IndentArrowIcon className="sidebar-item-icon" />;
      case "download":
        return <DownloadIcon className="sidebar-item-icon" />;
      case "folder":
        return <FolderIcon className="sidebar-item-icon" />;
      case "branch":
        return <BranchIcon className="sidebar-item-icon" />;
      case "layout":
        return <LayoutIcon className="sidebar-item-icon" />;
      case "refresh":
        return <RefreshIcon className="sidebar-item-icon" />;
      case "gear":
        return <GearIcon className="sidebar-item-icon" />;
      case "terminal":
        return <TerminalIcon className="sidebar-item-icon" />;
      default:
        return <IndentArrowIcon className="sidebar-item-icon" />;
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        {isGuides ? (
          <>
            <div className="sidebar-context-pill">
              <span role="img" aria-label="guides">📖</span>
              <span>GUIDES CONTEXT</span>
            </div>
            <h2 className="sidebar-title">Next.js App Router</h2>
            <div className="sidebar-subtitle">v1.0 Architecture Guide</div>
          </>
        ) : (
          <>
            <h2 className="sidebar-title">Core Documentation</h2>
            <div className="sidebar-subtitle">v1.0 Architecture Guide</div>
          </>
        )}
      </div>

      <div className="sidebar-nav">
        {isGuides ? (
          guidesCategories.map((cat) => (
            <div key={cat.title} className="sidebar-section">
              <div className="sidebar-section-title">{cat.title}</div>
              <ul className="sidebar-list">
                {cat.items.map((item) => {
                  const hasSubitems = item.subitems && item.subitems.length > 0;
                  const isCurrentActive = pathname.includes(item.slug);

                  return (
                    <li key={item.title}>
                      <div
                        className={`sidebar-link ${
                          isCurrentActive && !hasSubitems ? "active" : ""
                        }`}
                        style={{ cursor: hasSubitems ? "default" : "pointer" }}
                      >
                        {item.title === "Routing" && <BranchIcon className="sidebar-item-icon" />}
                        {item.title === "Introduction" && <IndentArrowIcon className="sidebar-item-icon" />}
                        {item.title === "Installation" && <DownloadIcon className="sidebar-item-icon" />}
                        {item.title === "Project Setup" && <FolderIcon className="sidebar-item-icon" />}
                        {item.title === "Layouts" && <LayoutIcon className="sidebar-item-icon" />}
                        {item.title === "Data Fetching" && <RefreshIcon className="sidebar-item-icon" />}
                        {item.title === "Configuration" && <GearIcon className="sidebar-item-icon" />}
                        {item.title === "CLI Commands" && <TerminalIcon className="sidebar-item-icon" />}
                        <span>{item.title}</span>
                      </div>

                      {hasSubitems && (
                        <ul className="sidebar-sublist">
                          {item.subitems?.map((sub) => {
                            const subHref = `/guides/${sub.slug}`;
                            const isSubActive = pathname === subHref;
                            return (
                              <li key={sub.slug}>
                                <Link
                                  href={subHref}
                                  className={`sidebar-sublink ${
                                    isSubActive ? "active" : ""
                                  }`}
                                >
                                  {sub.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))
        ) : (
          docCategories.map((cat) => (
            <div key={cat.title} className="sidebar-section">
              <div className="sidebar-section-title">{cat.title}</div>
              <ul className="sidebar-list">
                {cat.items.map((item) => {
                  const href = `/documentation/${item.slug}`;
                  const isActive =
                    pathname === href ||
                    (item.slug === "getting-started/introduction" &&
                      (pathname === "/documentation" || pathname === "/"));

                  return (
                    <li key={item.slug}>
                      <Link
                        href={href}
                        className={`sidebar-link ${isActive ? "active" : ""}`}
                      >
                        {getDocIcon(item.icon)}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))
        )}
      </div>

      <div className="sidebar-footer">
        <a
          href="https://github.com/priyasangwan23/next_a2"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-footer-link"
        >
          <CodeBracketIcon style={{ width: 15, height: 15 }} />
          <span>GitHub Repo</span>
        </a>
        <Link href="/documentation/reference/configuration" className="sidebar-footer-link">
          <FileTextIcon style={{ width: 15, height: 15 }} />
          <span>API Reference</span>
        </Link>
      </div>
    </aside>
  );
}
