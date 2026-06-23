import Link from "next/link";
import type { ReactNode } from "react";
import { PromptWell } from "./PromptWell";
import {
  markdownPlainText,
  parseMarkdown,
  slugifyHeading,
  type MarkdownNode,
} from "@/lib/markdown";

type MarkdownBodyProps = {
  markdown: string;
};

export function MarkdownBody({ markdown }: MarkdownBodyProps) {
  const tree = parseMarkdown(markdown);

  return (
    <div className="max-w-[var(--text-col)] text-lg leading-relaxed">
      {renderChildren(tree)}
    </div>
  );
}

function renderChildren(node: MarkdownNode): ReactNode {
  return node.children?.map((child, index) => renderNode(child, index)) ?? null;
}

function renderNode(node: MarkdownNode, key: number): ReactNode {
  switch (node.type) {
    case "heading":
      return renderHeading(node, key);
    case "paragraph":
      return (
        <p key={key} className="my-5 text-ink-soft">
          {renderChildren(node)}
        </p>
      );
    case "blockquote":
      return (
        <blockquote
          key={key}
          className="my-8 border-l pl-5 text-xl leading-relaxed"
          style={{ borderColor: "var(--accent)" }}
        >
          {renderChildren(node)}
        </blockquote>
      );
    case "strong":
      return (
        <strong key={key} className="font-semibold text-ink">
          {renderChildren(node)}
        </strong>
      );
    case "emphasis":
      return (
        <em key={key} className="italic">
          {renderChildren(node)}
        </em>
      );
    case "list":
      return renderList(node, key);
    case "listItem":
      return (
        <li key={key} className="pl-1">
          {renderChildren(node)}
        </li>
      );
    case "code":
      return (
        <div key={key} className="my-8">
          <PromptWell payload={node.value ?? ""} label={node.lang ?? "code"} />
        </div>
      );
    case "inlineCode":
      return (
        <code
          key={key}
          className="rounded-[var(--radius-ui)] bg-paper-soft px-1.5 py-0.5 font-mono text-sm text-ink"
        >
          {node.value}
        </code>
      );
    case "link":
      return (
        <Link
          key={key}
          href={node.url ?? "#"}
          className="underline decoration-[var(--ink-hair)] underline-offset-4 transition-colors duration-150 hover:text-ink"
        >
          {renderChildren(node)}
        </Link>
      );
    case "thematicBreak":
      return (
        <hr
          key={key}
          className="my-10 border-0 border-t"
          style={{ borderColor: "var(--ink-hair)" }}
        />
      );
    case "break":
      return <br key={key} />;
    case "text":
      return node.value;
    default:
      return renderChildren(node);
  }
}

function renderHeading(node: MarkdownNode, key: number): ReactNode {
  const text = markdownPlainText(node);
  const id = slugifyHeading(text);

  if (node.depth === 1) {
    return (
      <h1
        key={key}
        id={id}
        className="mt-4 scroll-mt-28 font-display text-[clamp(2.75rem,7vw,5rem)] font-bold leading-none text-ink"
      >
        {renderChildren(node)}
      </h1>
    );
  }

  if (node.depth === 2) {
    return (
      <h2
        key={key}
        id={id}
        className="mt-12 scroll-mt-28 font-display text-[2.75rem] font-bold leading-none text-ink"
      >
        {renderChildren(node)}
      </h2>
    );
  }

  return (
    <h3
      key={key}
      id={id}
      className="mt-10 scroll-mt-28 text-2xl font-semibold leading-tight text-ink"
    >
      {renderChildren(node)}
    </h3>
  );
}

function renderList(node: MarkdownNode, key: number): ReactNode {
  const className = "my-6 space-y-3 pl-6 text-ink-soft";

  if (node.ordered) {
    return (
      <ol key={key} className={`${className} list-decimal`}>
        {renderChildren(node)}
      </ol>
    );
  }

  return (
    <ul key={key} className={`${className} list-disc`}>
      {renderChildren(node)}
    </ul>
  );
}
