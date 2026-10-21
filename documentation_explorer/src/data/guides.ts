import { GuideItem } from "./types";

export interface GuideCategory {
  title: string;
  items: {
    title: string;
    slug: string;
    icon?: string;
    subitems?: {
      title: string;
      slug: string;
    }[];
  }[];
}

export const guidesCategories: GuideCategory[] = [
  {
    title: "GETTING STARTED",
    items: [
      { title: "Introduction", slug: "getting-started/introduction" },
      { title: "Installation", slug: "getting-started/installation" },
      { title: "Project Setup", slug: "getting-started/project-setup" },
    ],
  },
  {
    title: "CORE CONCEPTS",
    items: [
      {
        title: "Routing",
        slug: "nextjs/app-router/routing",
        subitems: [
          { title: "Defining Routes", slug: "nextjs/app-router/defining-routes" },
          { title: "Dynamic Routes", slug: "nextjs/app-router/dynamic-routes" },
          { title: "Parallel & Intercepting", slug: "nextjs/app-router/parallel-and-intercepting" },
        ],
      },
      { title: "Layouts", slug: "core-concepts/layouts" },
      { title: "Data Fetching", slug: "core-concepts/data-fetching" },
    ],
  },
  {
    title: "REFERENCE",
    items: [
      { title: "Configuration", slug: "reference/configuration" },
      { title: "CLI Commands", slug: "reference/cli-commands" },
    ],
  },
];

export const guidesData: GuideItem[] = [
  {
    id: "dynamic-routes",
    slug: ["nextjs", "app-router", "dynamic-routes"],
    category: "Next.js",
    subcategory: "App Router",
    title: "Dynamic Routes",
    subtitle: "Learn how to define dynamic route segments and handle catch-all parameters in nested application architectures.",
    readTime: "6 min",
    badge: "GUIDE",
    breadcrumb: ["Guides", "Next.js", "App Router", "Dynamic Routes"],
    prerequisite: {
      title: "Prerequisite Knowledge:",
      text: "In the App Router, dynamic segments allow segments of your URL path to be variable without relying on query parameters. Dynamic segments are evaluated at request time or pre-rendered at build time with generateStaticParams().",
    },
    steps: [
      {
        number: 1,
        title: "Creating the segment folder",
        text: "A Dynamic Segment can be created by wrapping a folder's name in square brackets: [id] or [slug]. For example, to handle an arbitrary project ID within Orbit, organize your app directory structure as follows:",
        codeBlock: {
          filename: "app/projects/[id]/page.tsx",
          language: "tsx",
          code: `export default function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <section className="project-container">
      <h1>Active Project ID: {params.id}</h1>
    </section>
  );
}`,
        },
      },
      {
        number: 2,
        title: "Accessing route parameters",
        text: "Dynamic segment values are passed as the params object inside the page, layout, and metadata generator functions. In asynchronous environments, you resolve or destructure this object directly from your component arguments.",
        table: {
          headers: ["ROUTE PATTERN", "EXAMPLE URL", "RESOLVED PARAMS"],
          rows: [
            ["app/blog/[slug]/page.js", "/blog/hello-world", "{ slug: 'hello-world' }"],
            ["app/shop/[category]/[item]/page.js", "/shop/shoes/boots", "{ category: 'shoes', item: 'boots' }"],
          ],
        },
      },
      {
        number: 3,
        title: "Handling optional catch-all segments",
        text: "When building docs systems or multi-level CMS trees, paths can vary in depth. Use double brackets [[...slug]] to make catch-all segments optional, matching both the root parent path and arbitrarily nested sub-paths.",
        codeBlock: {
          filename: "<> app/docs/[[...slug]]/page.tsx",
          language: "tsx",
          code: `type Props = {
  params: { slug?: string[] };
};

export default function DocsReader({ params }: Props) {
  const currentPath = params.slug ? params.slug.join('/') : 'index';
  return <article>Displaying documentation tree: {currentPath}</article>;
}`,
        },
      },
      {
        number: 4,
        title: "Providing fallback behavior",
        text: "When dynamic segments fail to resolve to a known record in your backend database or content source, trigger the standard notFound() boundary to render your application's customized not-found.tsx view immediately.",
        callout: {
          type: "warning",
          title: "Safety Tip:",
          text: "Never serve un-sanitized dynamic route parameters directly into raw HTML or arbitrary queries. Always validate incoming params using schemas like Zod or Orbit Schema Validator before performing IO operations.",
        },
      },
    ],
    previous: { title: "Defining Routes", href: "/guides/nextjs/app-router/defining-routes" },
    next: { title: "Parallel & Intercepting", href: "/guides/nextjs/app-router/parallel-and-intercepting" },
  },
  {
    id: "defining-routes",
    slug: ["nextjs", "app-router", "defining-routes"],
    category: "Next.js",
    subcategory: "App Router",
    title: "Defining Routes",
    subtitle: "Learn the fundamentals of creating routes in Next.js App Router using folders and page files.",
    readTime: "4 min",
    badge: "GUIDE",
    breadcrumb: ["Guides", "Next.js", "App Router", "Defining Routes"],
    prerequisite: {
      title: "Prerequisite Knowledge:",
      text: "Every route segment is defined by a folder within the app directory, and rendered using a page.tsx file.",
    },
    steps: [
      {
        number: 1,
        title: "Understanding Route Hierarchies",
        text: "Folders define the route paths. Only folders containing a page.tsx file are publicly addressable.",
      },
    ],
    previous: { title: "Project Setup", href: "/documentation/getting-started/project-setup" },
    next: { title: "Dynamic Routes", href: "/guides/nextjs/app-router/dynamic-routes" },
  },
  {
    id: "parallel-and-intercepting",
    slug: ["nextjs", "app-router", "parallel-and-intercepting"],
    category: "Next.js",
    subcategory: "App Router",
    title: "Parallel & Intercepting",
    subtitle: "Advanced routing patterns allowing simultaneous view rendering and URL interception.",
    readTime: "8 min",
    badge: "GUIDE",
    breadcrumb: ["Guides", "Next.js", "App Router", "Parallel & Intercepting"],
    prerequisite: {
      title: "Prerequisite Knowledge:",
      text: "Parallel routes use named slots defined with the @folder convention. Intercepting routes use (.) or (..) syntax.",
    },
    steps: [
      {
        number: 1,
        title: "Slot Configuration",
        text: "Slots are passed to the parent layout as props alongside children.",
      },
    ],
    previous: { title: "Dynamic Routes", href: "/guides/nextjs/app-router/dynamic-routes" },
  },
];
