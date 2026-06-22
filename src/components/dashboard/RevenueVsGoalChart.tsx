import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dailyRevenue } from "@/lib/dashboard-mocks";
import { formatBRL, formatBRLCompact } from "@/lib/format";
import { Card } from "./Card";

export function RevenueVsGoalChart() {
  const ultimo = dailyRevenue[dailyRevenue.length - 1];
  const pctMeta = (ultimo.acumulado / ultimo.meta) * (22 / 30) * 100;
  // simpler: real attainment vs meta-to-date
  const atingido = (ultimo.acumulado / ultimo.meta) * 100;

  return (
    <Card
      title="Faturamento Acumulado vs. Meta do Mês"
      subtitle={`Mês corrente · ${atingido.toFixed(1)}% da meta parcial`}
      right={
        <div className="flex items-center gap-3 text-[10px] text-dracula-muted">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-3 rounded-sm bg-dracula-pink" />
            Acumulado
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-[2px] w-3 bg-dracula-cyan" />
            Meta
          </span>
        </div>
      }
    >
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={dailyRevenue}
            margin={{ top: 8, right: 8, bottom: 0, left: -10 }}
          >
            <defs>
              <linearGradient id="barPink" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff79c6" stopOpacity={0.95} />
                <stop offset="100%" stopColor="#ff79c6" stopOpacity={0.35} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#44475a" strokeOpacity={0.25} vertical={false} />
            <XAxis
              dataKey="dia"
              tick={{ fill: "#6272a4", fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: "#44475a", strokeOpacity: 0.4 }}
            />
            <YAxis
              tick={{ fill: "#6272a4", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => formatBRLCompact(Number(v))}
            />
            <Tooltip
              cursor={{ fill: "#bd93f9", fillOpacity: 0.05 }}
              contentStyle={{
                background: "#21222c",
                border: "1px solid #44475a",
                borderRadius: 12,
                color: "#f8f8f2",
                fontSize: 12,
              }}
              labelStyle={{ color: "#6272a4" }}
              formatter={(v: number, name) => [formatBRL(v), name]}
              labelFormatter={(l) => `Dia ${l}`}
            />
            <Bar dataKey="acumulado" name="Acumulado" fill="url(#barPink)" radius={[6, 6, 0, 0]} />
            <Line
              type="monotone"
              dataKey="meta"
              name="Meta"
              stroke="#8be9fd"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
