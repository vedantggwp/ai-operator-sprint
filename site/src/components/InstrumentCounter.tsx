type InstrumentCounterProps = {
  label: string;
  value: number;
};

export function InstrumentCounter({ label, value }: InstrumentCounterProps) {
  return (
    <div className="border-b py-5" style={{ borderColor: "var(--ink-hair)" }}>
      <dt className="font-mono text-xs uppercase text-ink-soft">{label}</dt>
      <dd className="mt-2 font-mono text-4xl tabular-nums leading-none">
        {value.toLocaleString("en-GB")}
      </dd>
    </div>
  );
}

