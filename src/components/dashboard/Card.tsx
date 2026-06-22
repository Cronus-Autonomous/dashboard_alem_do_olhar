import type { ReactNode } from "react";

export function Card({
  title,
  subtitle,
  right,
  children,
  className = "",
}: {
  title: string;
  subtitle?: string;
  right?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`flex flex-col rounded-2xl border border-dracula-line/40 bg-dracula-card p-5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)] ${className}`}
    >
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-dracula-fg">{title}</h3>
          {subtitle && (
            <p className="mt-0.5 truncate text-xs text-dracula-muted">{subtitle}</p>
          )}
        </div>
        {right && <div className="shrink-0">{right}</div>}
      </header>
      <div className="mt-4 flex-1">{children}</div>
    </section>
  );
}
