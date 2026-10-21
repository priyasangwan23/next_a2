export interface DocSection {
  id: string;
  title: string;
  content?: string[];
  callout?: {
    type: "info" | "warning" | "note";
    title?: string;
    text: string;
  };
  codeBlock?: {
    filename: string;
    language: string;
    code: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface DocItem {
  id: string;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  breadcrumb: string[];
  sections: DocSection[];
  onThisPage: { id: string; title: string }[];
  previous?: { title: string; href: string };
  next?: { title: string; href: string };
}

export interface GuideStep {
  number: number;
  title: string;
  text: string;
  codeBlock?: {
    filename: string;
    language: string;
    code: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
  callout?: {
    type: "info" | "warning";
    title?: string;
    text: string;
  };
}

export interface GuideItem {
  id: string;
  slug: string[];
  category: string;
  subcategory?: string;
  title: string;
  subtitle: string;
  readTime: string;
  badge: string;
  breadcrumb: string[];
  prerequisite?: {
    title: string;
    text: string;
  };
  steps: GuideStep[];
  previous?: { title: string; href: string };
  next?: { title: string; href: string };
}
