type GeometryAccentProps = {
  className?: string;
};

export function GeometryAccent({ className = "" }: GeometryAccentProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full bg-accent ${className}`}
    />
  );
}

