import { DocItem } from "./types";

export interface DocCategory {
  title: string;
  items: {
    title: string;
    slug: string;
    icon: string;
  }[];
}

export const docCategories: DocCategory[] = [
  {
    title: "GETTING STARTED",
    items: [
      { title: "Introduction", slug: "getting-started/introduction", icon: "arrow" },
      { title: "Installation", slug: "getting-started/installation", icon: "download" },
      { title: "Project Setup", slug: "getting-started/project-setup", icon: "folder" },
    ],
  },
  {
    title: "CORE CONCEPTS",
    items: [
      { title: "Routing", slug: "core-concepts/routing", icon: "branch" },
      { title: "Layouts", slug: "core-concepts/layouts", icon: "layout" },
      { title: "Data Fetching", slug: "core-concepts/data-fetching", icon: "refresh" },
    ],
  },
  {
    title: "REFERENCE",
    items: [
      { title: "Configuration", slug: "reference/configuration", icon: "gear" },
      { title: "CLI Commands", slug: "reference/cli-commands", icon: "terminal" },
    ],
  },
];

export const docsData: DocItem[] = [
  {
    id: "routing",
    slug: "core-concepts/routing",
    category: "Core Concepts",
    title: "Routing",
    subtitle: "Orbit uses a file-system based routing mechanism with support for static paths, nested segments, and catch-all routes.",
    breadcrumb: ["Documentation", "Core Concepts", "Routing"],
    onThisPage: [
      { id: "overview", title: "Overview" },
      { id: "catch-all-routes", title: "Catch-all Routes" },
      { id: "route-groups", title: "Route Groups" },
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          "Every directory inside the app directory maps directly to a matching URL path segment. When an incoming request reaches your edge cluster, Orbit analyzes the matching segment tree and evaluates each layout node before rendering leaf page handlers.",
          "Route resolution runs deterministically with zero runtime regex overhead. Leaf pages defined via page.tsx or route.ts automatically export their execution strategy to either static edge renderers or dynamic compute clusters.",
        ],
        callout: {
          type: "info",
          title: "Convention Note:",
          text: "Orbit reserves system file identifiers including layout.tsx, loading.tsx, and error.tsx to isolate distinct lifecycle tiers.",
        },
      },
      {
        id: "catch-all-routes",
        title: "Catch-all Routes",
        content: [
          "Dynamic segments can be extended to catch all subsequent URL segments by prepending an ellipsis inside square brackets: [...slug]. The matched parameters are parsed into an array of path parts.",
        ],
        codeBlock: {
          filename: "app/[...slug]/page.tsx",
          language: "tsx",
          code: `// app/[...slug]/page.tsx
export default function Page({ params }: { params: { slug: string[] } }) {
  return <div>Path: {params.slug.join('/')}</div>;
}`,
        },
        table: {
          headers: ["ROUTE PATH PATTERN", "EXAMPLE URL", "PARAMS OBJECT"],
          rows: [
            ["app/shop/[...slug]/page.tsx", "/shop/clothes", "{ slug: ['clothes'] }"],
            ["app/shop/[...slug]/page.tsx", "/shop/clothes/tops", "{ slug: ['clothes', 'tops'] }"],
          ],
        },
      },
      {
        id: "route-groups",
        title: "Route Groups",
        content: [
          "Folders wrapped with parentheses, such as (marketing) or (dashboard), serve purely as organizational conventions and are omitted from the final URL path resolution. Refer to the nested layout hierarchy or explore multi-root application strategies for complex multi-tenant projects.",
        ],
      },
    ],
    previous: { title: "Project Setup", href: "/documentation/getting-started/project-setup" },
    next: { title: "Layouts", href: "/documentation/core-concepts/layouts" },
  },
  {
    id: "introduction",
    slug: "getting-started/introduction",
    category: "Getting Started",
    title: "Introduction",
    subtitle: "Welcome to Orbit framework, an enterprise-grade web architecture built for high performance, typed routing, and modular server-driven development.",
    breadcrumb: ["Documentation", "Getting Started", "Introduction"],
    onThisPage: [
      { id: "overview", title: "Overview" },
      { id: "design-principles", title: "Design Principles" },
      { id: "architecture", title: "Architecture" },
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          "Orbit is designed from the ground up to unify modern server components with fast client-side reactivity. It provides a robust, predictable mental model for building high-scale web platforms.",
          "Every route, layout, and data provider is checked statically at compile-time to eliminate runtime routing anomalies and layout thrashing.",
        ],
        callout: {
          type: "info",
          title: "System Architecture:",
          text: "Orbit 1.0 utilizes unified server-driven component composition with strict compile-time static checks.",
        },
      },
      {
        id: "design-principles",
        title: "Design Principles",
        content: [
          "Zero boilerplate: Write standard TypeScript functions and export them directly from page boundaries.",
          "Deterministic builds: Predictable bundling with reproducible tree-shaking across edge and Node runtimes.",
        ],
      },
    ],
    previous: { title: "Documentation Overview", href: "/documentation" },
    next: { title: "Installation", href: "/documentation/getting-started/installation" },
  },
  {
    id: "installation",
    slug: "getting-started/installation",
    category: "Getting Started",
    title: "Installation",
    subtitle: "Step-by-step setup guide to initialize your Orbit project scaffolding, package requirements, and environment flags.",
    breadcrumb: ["Documentation", "Getting Started", "Installation"],
    onThisPage: [
      { id: "prerequisites", title: "Prerequisites" },
      { id: "quickstart", title: "Quickstart Scaffolding" },
    ],
    sections: [
      {
        id: "prerequisites",
        title: "Prerequisites",
        content: [
          "Ensure you have Node.js 18.17.0 or higher installed on your system. We recommend using npm 9+ or pnpm for efficient dependency resolution.",
        ],
      },
      {
        id: "quickstart",
        title: "Quickstart Scaffolding",
        content: [
          "Run the automated scaffolding utility in your terminal to bootstrap a fresh Orbit instance:",
        ],
        codeBlock: {
          filename: "Terminal - Quick Setup",
          language: "bash",
          code: `$ npx orbit-cli create my-app --template standard
$ cd my-app && npm run dev`,
        },
      },
    ],
    previous: { title: "Introduction", href: "/documentation/getting-started/introduction" },
    next: { title: "Project Setup", href: "/documentation/getting-started/project-setup" },
  },
  {
    id: "project-setup",
    slug: "getting-started/project-setup",
    category: "Getting Started",
    title: "Project Setup",
    subtitle: "Configure your repository workspace, build tooling, and directory structure.",
    breadcrumb: ["Documentation", "Getting Started", "Project Setup"],
    onThisPage: [
      { id: "structure", title: "Directory Structure" },
      { id: "env-vars", title: "Environment Variables" },
    ],
    sections: [
      {
        id: "structure",
        title: "Directory Structure",
        content: [
          "Orbit applications follow a nested convention where the app folder defines your HTTP routing tree, public stores static assets, and src/components encapsulates reusable UI modules.",
        ],
      },
    ],
    previous: { title: "Installation", href: "/documentation/getting-started/installation" },
    next: { title: "Routing", href: "/documentation/core-concepts/routing" },
  },
  {
    id: "layouts",
    slug: "core-concepts/layouts",
    category: "Core Concepts",
    title: "Layouts",
    subtitle: "Share UI across routes with nested layouts and persistent state preservation.",
    breadcrumb: ["Documentation", "Core Concepts", "Layouts"],
    onThisPage: [
      { id: "root-layout", title: "Root Layout" },
      { id: "nested-layouts", title: "Nested Layouts" },
    ],
    sections: [
      {
        id: "root-layout",
        title: "Root Layout",
        content: [
          "The top-level layout.tsx defines the HTML shell, global typography stylesheets, and site-wide navigation chrome.",
        ],
      },
    ],
    previous: { title: "Routing", href: "/documentation/core-concepts/routing" },
    next: { title: "Data Fetching", href: "/documentation/core-concepts/data-fetching" },
  },
  {
    id: "data-fetching",
    slug: "core-concepts/data-fetching",
    category: "Core Concepts",
    title: "Data Fetching",
    subtitle: "Modern patterns for async server data loading, caching strategies, and revalidation triggers.",
    breadcrumb: ["Documentation", "Core Concepts", "Data Fetching"],
    onThisPage: [
      { id: "server-components", title: "Server Component Fetching" },
      { id: "caching", title: "Caching & Revalidation" },
    ],
    sections: [
      {
        id: "server-components",
        title: "Server Component Fetching",
        content: [
          "In Orbit, data can be fetched directly inside async Server Components without client-side waterfalls.",
        ],
      },
    ],
    previous: { title: "Layouts", href: "/documentation/core-concepts/layouts" },
    next: { title: "Configuration", href: "/documentation/reference/configuration" },
  },
  {
    id: "configuration",
    slug: "reference/configuration",
    category: "Reference",
    title: "Configuration",
    subtitle: "Schema definitions, runtime parameters, and full schema dictionary for orbit.config.ts.",
    breadcrumb: ["Documentation", "Reference", "Configuration"],
    onThisPage: [
      { id: "schema", title: "Config Schema" },
      { id: "options", title: "Build Options" },
    ],
    sections: [
      {
        id: "schema",
        title: "Config Schema",
        content: [
          "The orbit.config.ts file in the root of your project controls bundling rules, compiler plugins, and image optimization adapters.",
        ],
      },
    ],
    previous: { title: "Data Fetching", href: "/documentation/core-concepts/data-fetching" },
    next: { title: "CLI Commands", href: "/documentation/reference/cli-commands" },
  },
  {
    id: "cli-commands",
    slug: "reference/cli-commands",
    category: "Reference",
    title: "CLI Commands",
    subtitle: "Complete command-line interface specification for building, testing, and deploying Orbit projects.",
    breadcrumb: ["Documentation", "Reference", "CLI Commands"],
    onThisPage: [
      { id: "dev", title: "orbit dev" },
      { id: "build", title: "orbit build" },
    ],
    sections: [
      {
        id: "dev",
        title: "orbit dev",
        content: [
          "Starts the local development server with Fast Refresh and hot module replacement.",
        ],
      },
    ],
    previous: { title: "Configuration", href: "/documentation/reference/configuration" },
  },
];
