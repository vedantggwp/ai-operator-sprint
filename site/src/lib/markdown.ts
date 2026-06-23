import { remark } from "remark";

export type MarkdownNode = {
  type: string;
  value?: string;
  depth?: number;
  ordered?: boolean;
  lang?: string;
  url?: string;
  alt?: string;
  children?: MarkdownNode[];
};

export function parseMarkdown(markdown: string): MarkdownNode {
  return remark().parse(markdown) as MarkdownNode;
}

export function markdownPlainText(node: MarkdownNode): string {
  if (typeof node.value === "string") return node.value;
  return node.children?.map(markdownPlainText).join("") ?? "";
}

export function slugifyHeading(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getMarkdownAnchorIds(markdown: string): Set<string> {
  const tree = parseMarkdown(markdown);
  const ids = new Set<string>();

  walk(tree, (node) => {
    if (node.type === "heading") {
      const slug = slugifyHeading(markdownPlainText(node));
      if (slug) ids.add(slug);
    }
  });

  return ids;
}

function walk(node: MarkdownNode, visit: (node: MarkdownNode) => void): void {
  visit(node);
  node.children?.forEach((child) => walk(child, visit));
}

