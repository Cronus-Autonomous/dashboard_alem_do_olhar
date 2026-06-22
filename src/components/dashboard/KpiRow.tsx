import { kpis } from "@/lib/dashboard-mocks";
import { KpiCard } from "./KpiCard";

export function KpiRow() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {kpis.map((k) => (
        <KpiCard
          key={k.id}
          label={k.label}
          value={k.value}
          delta={k.delta}
          deltaDir={k.deltaDir}
          sub={k.sub}
          accent={k.accent}
          icon={k.icon}
          highlight={k.id === "ia"}
        />
      ))}
    </div>
  );
}
