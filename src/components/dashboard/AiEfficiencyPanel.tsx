import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Sparkles } from "lucide-react";
import { aiMetrics } from "@/lib/dashboard-mocks";

type Accent = "green" | "orange" | "pink" | "cyan";

const accentMap: Record<Accent, { text: string; ring: string; bg: string }> = {
  green: { text: "text-dracula-green", ring: "ring-dracula-green/30", bg: "bg-dracula-green/10" },
  orange: { text: "text-dracula-orange", ring: "ring-dracula-orange/30", bg: "bg-dracula-orange/10" },
  pink: { text: "text-dracula-pink", ring: "ring-dracula-pink/30", bg: "bg-dracula-pink/10" },
  cyan: { text: "text-dracula-cyan", ring: "ring-dracula-cyan/30", bg: "bg-dracula-cyan/10" },
};

export function AiEfficiencyPanel() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-dracula-purple/30 bg-gradient-to-br from-dracula-card to-dracula-card-2 p-5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)]">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-dracula-purple/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-dracula-pink/10 blur-3xl" />

      <header className="relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-dracula-purple/15 ring-1 ring-dracula-purple/40">
            <Sparkles className="h-5 w-5 text-dracula-purple" />
          </div>
          <div className="min-w-0">
            <h2 className="truncate text-base font-bold text-dracula-fg">
              Motor de Automação IA
            </h2>
            <p className="truncate text-xs text-dracula-muted">
              Eficiência da infraestrutura inteligente — ROI do dia
            </p>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-dracula-green/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-dracula-green ring-1 ring-dracula-green/30">
          Online
        </span>
      </header>

      <div className="relative mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {aiMetrics.map((m) => {
          const c = accentMap[m.accent];
          const Icon = (Icons[m.icon] as LucideIcon) ?? Icons.Circle;
          return (
            <div
              key={m.id}
              className="rounded-xl border border-dracula-line/40 bg-dracula-bg/40 p-4 backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-medium uppercase tracking-wide text-dracula-muted">
                  {m.label}
                </p>
                <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ring-1 ${c.bg} ${c.ring}`}>
                  <Icon className={`h-4 w-4 ${c.text}`} />
                </div>
              </div>
              <p className={`mt-3 text-2xl font-bold tracking-tight ${c.text}`}>
                {m.value}
              </p>
              <p className="mt-1 text-[11px] text-dracula-muted">{m.sub}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
