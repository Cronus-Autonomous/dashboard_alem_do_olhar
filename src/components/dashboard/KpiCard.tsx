import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Accent = "pink" | "purple" | "cyan" | "green" | "yellow" | "orange";

const accentMap: Record<Accent, { text: string; ring: string; bg: string }> = {
  pink: { text: "text-dracula-pink", ring: "ring-dracula-pink/30", bg: "bg-dracula-pink/10" },
  purple: { text: "text-dracula-purple", ring: "ring-dracula-purple/40", bg: "bg-dracula-purple/10" },
  cyan: { text: "text-dracula-cyan", ring: "ring-dracula-cyan/30", bg: "bg-dracula-cyan/10" },
  green: { text: "text-dracula-green", ring: "ring-dracula-green/30", bg: "bg-dracula-green/10" },
  yellow: { text: "text-dracula-yellow", ring: "ring-dracula-yellow/30", bg: "bg-dracula-yellow/10" },
  orange: { text: "text-dracula-orange", ring: "ring-dracula-orange/30", bg: "bg-dracula-orange/10" },
};

export function KpiCard({
  label,
  value,
  delta,
  deltaDir,
  sub,
  accent,
  icon,
  highlight = false,
}: {
  label: string;
  value: string;
  delta: string;
  deltaDir: "up" | "down";
  sub: string;
  accent: Accent;
  icon: keyof typeof Icons;
  highlight?: boolean;
}) {
  const c = accentMap[accent];
  const Icon = (Icons[icon] as LucideIcon) ?? Icons.Circle;
  const Arrow = deltaDir === "up" ? ArrowUpRight : ArrowDownRight;
  const deltaColor = deltaDir === "up" ? "text-dracula-green" : "text-dracula-red";

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border bg-dracula-card p-5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.6)] ${
        highlight ? "border-dracula-purple/40" : "border-dracula-line/40"
      }`}
    >
      {highlight && (
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-dracula-purple/10 blur-2xl" />
      )}
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-medium uppercase tracking-wide text-dracula-muted">
          {label}
        </p>
        <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ring-1 ${c.bg} ${c.ring}`}>
          <Icon className={`h-4 w-4 ${c.text}`} />
        </div>
      </div>
      <p className={`mt-4 text-3xl font-bold tracking-tight ${highlight ? c.text : "text-dracula-fg"}`}>
        {value}
      </p>
      <div className="mt-3 flex items-center gap-2 text-xs">
        <span className={`inline-flex items-center gap-0.5 font-semibold ${deltaColor}`}>
          <Arrow className="h-3.5 w-3.5" />
          {delta}
        </span>
        <span className="text-dracula-muted">{sub}</span>
      </div>
    </div>
  );
}
