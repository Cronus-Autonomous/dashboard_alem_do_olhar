import { franchises } from "@/lib/dashboard-mocks";
import { formatBRL } from "@/lib/format";
import { Card } from "./Card";
import { StatusBadge } from "./StatusBadge";

export function FranchiseRankingTable() {
  const top = franchises.filter((f) => f.rank <= 5);
  const bottom = franchises.filter((f) => f.rank > 5);

  return (
    <Card
      title="Ranking de Franquias"
      subtitle="Top 5 e Bottom 5 — desempenho do dia"
      className="lg:row-span-1"
    >
      <div className="-mx-2 overflow-x-auto">
        <table className="w-full min-w-[520px] border-separate border-spacing-0 text-xs">
          <thead>
            <tr className="text-[10px] uppercase tracking-wider text-dracula-muted">
              <th className="px-2 py-2 text-center font-medium">#</th>
              <th className="px-2 py-2 text-left font-medium">Unidade</th>
              <th className="px-2 py-2 text-left font-medium">UF</th>
              <th className="px-2 py-2 text-right font-medium">Faturamento</th>
              <th className="px-2 py-2 text-right font-medium">Ocup.</th>
              <th className="px-2 py-2 text-right font-medium">% IA</th>
              <th className="px-2 py-2 text-center font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            <Section label="Top 5" rows={top} />
            <tr>
              <td colSpan={7} className="pt-3 pb-1">
                <div className="border-t border-dashed border-dracula-line/40" />
              </td>
            </tr>
            <Section label="Bottom 5" rows={bottom} />
          </tbody>
        </table>
      </div>
    </Card>
  );
}

function Section({
  label,
  rows,
}: {
  label: string;
  rows: typeof franchises;
}) {
  return (
    <>
      <tr>
        <td colSpan={7} className="px-2 pt-1 pb-2 text-[10px] font-semibold uppercase tracking-wider text-dracula-purple">
          {label}
        </td>
      </tr>
      {rows.map((f, i) => (
        <tr
          key={f.rank}
          className={`text-dracula-fg transition hover:bg-dracula-line/20 ${
            i % 2 === 1 ? "bg-white/[0.02]" : ""
          }`}
        >
          <td className="rounded-l-lg px-2 py-2.5 text-center font-mono text-dracula-muted">
            {f.rank}
          </td>
          <td className="px-2 py-2.5 text-left font-medium">{f.unidade}</td>
          <td className="px-2 py-2.5 text-left text-dracula-muted">{f.regiao}</td>
          <td className="px-2 py-2.5 text-right font-semibold tabular-nums">
            {formatBRL(f.faturamento)}
          </td>
          <td className="px-2 py-2.5 text-right tabular-nums">{f.ocupacao}%</td>
          <td className="px-2 py-2.5 text-right tabular-nums text-dracula-purple">
            {f.aiAgendamentos}%
          </td>
          <td className="rounded-r-lg px-2 py-2.5 text-center">
            <StatusBadge status={f.status} />
          </td>
        </tr>
      ))}
    </>
  );
}
