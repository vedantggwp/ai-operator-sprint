import { CopyButton } from "./CopyButton";

type PromptWellProps = {
  payload: string;
  label?: string;
};

export function PromptWell({ payload, label = "prompt" }: PromptWellProps) {
  return (
    <div className="relative rounded-[var(--radius-card)] bg-well p-5 text-well-text sm:p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <span className="pt-3 font-mono text-xs uppercase text-well-text/60">
          {label}
        </span>
        <CopyButton payload={payload} />
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-sm leading-relaxed">
        <code>{payload}</code>
      </pre>
    </div>
  );
}

