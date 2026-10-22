# Documentation Explorer (Orbit Docs)

A modern, fast, and lightweight documentation website built with **Next.js App Router**, **TypeScript**, and **Vanilla CSS**.

## Features

- 📑 **Core Documentation Overview**: Features high-level overview cards, architectural notices, terminal setup snippets, and release tags.
- 🔀 **Catch-All Dynamic Routes (`[...slug]`)**: Fully dynamic routing for multi-level docs paths (`/documentation/core-concepts/routing`, `/documentation/getting-started/installation`, etc.).
- 📖 **Interactive Guides System**: Numbered step-by-step guides with prerequisites, code samples, route parameter mapping tables, and helpfulness feedback widgets.
- ⚠️ **Custom 404 Fallback Boundary**: `not-found.tsx` with quick path lookup search bar, suggested articles list, and terminal router trace diagnostics.
- 🔍 **Interactive Search**: Accessible with keyboard shortcut `⌘K` / `Ctrl+K` for instant client-side article lookup.
- 📋 **Copy to Clipboard**: Seamless code snippet copying with instantaneous visual checkmark feedback.
- 🎓 **Viva-Ready Code**: Written using clean Next.js 16 conventions, readable TypeScript, and no heavy unnecessary libraries.

## Getting Started

Run the development server:

```bash
cd documentation_explorer
npm run dev
```

Or from the root directory:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
documentation_explorer/
├── src/
│   ├── app/
│   │   ├── layout.tsx                     # Global layout with Navbar & Sidebar
│   │   ├── page.tsx                       # Home redirect to documentation
│   │   ├── globals.css                    # Unified design tokens & CSS styling
│   │   ├── not-found.tsx                  # Viva 404 Not Found screen
│   │   ├── about/page.tsx                 # Project overview and viva details
│   │   ├── documentation/
│   │   │   ├── page.tsx                   # Core Documentation overview
│   │   │   └── [...slug]/page.tsx         # Catch-all docs dynamic route
│   │   └── guides/
│   │       ├── page.tsx                   # Guides index redirect
│   │       └── [...slug]/page.tsx         # Step-by-step numbered guides
│   ├── components/
│   │   ├── Navbar.tsx                     # Sticky top bar with brand & search
│   │   ├── Sidebar.tsx                    # Contextual sidebar (Docs / Guides)
│   │   ├── CodeBlock.tsx                  # Terminal & code viewer with copy
│   │   ├── TableOfContents.tsx            # "On this page" right sidebar
│   │   ├── SearchModal.tsx                # Cmd+K live documentation search
│   │   ├── FeedbackWidget.tsx             # Was this helpful widget
│   │   └── Icons.tsx                      # Zero-dependency SVG icons
│   └── data/
│       ├── types.ts                       # TypeScript interfaces
│       ├── docs.ts                        # Documentation categories & content
│       └── guides.ts                      # Guides data & step breakdown
├── package.json
└── tsconfig.json
```
