import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { revenueOrigin } from "@/lib/dashboard-mocks";
import { formatBRL } from "@/lib/format";
import { Card } from "./Card";

export function RevenueOriginDonut() {
  const total = revenueOrigin.reduce((s, i) => s + i.value, 0);

  return (
    <Card title="Origem de Faturamento do Dia" subtitle="Mix de receita por canal">
      <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_1.1fr]">
        <div className="relative mx-auto h-48 w-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={revenueOrigin}
                dataKey="value"
                innerRadius="68%"
                outerRadius="100%"
                paddingAngle={3}
                stroke="none"
              >
                {revenueOrigin.map((d) => (
                  <Cell key={d.name} fill={d.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[10px] uppercase tracking-wider text-dracula-muted">
              Total dia
            </span>
            <span className="text-xl font-bold text-dracula-fg">{formatBRL(total)}</span>
          </div>
        </div>

        <ul className="flex flex-col gap-3">
          {revenueOrigin.map((d) => {
            const pct = (d.value / total) * 100;
            const isIA = d.name.includes("IA");
            return (
              <li
                key={d.name}
                className={`rounded-xl border p-3 transition ${
                  isIA
                    ? "border-dracula-purple/40 bg-dracula-purple/5"
                    : "border-dracula-line/30 bg-dracula-card-2/40"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: d.color }}
                    />
                    <span className="truncate text-xs text-dracula-fg">{d.name}</span>
                  </div>
                  <span className="shrink-0 text-xs font-semibold text-dracula-muted">
                    {pct.toFixed(1)}%
                  </span>
                </div>
                <div className="mt-1 text-right text-sm font-bold tabular-nums text-dracula-fg">
                  {formatBRL(d.value)}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
}
