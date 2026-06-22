import { createFileRoute } from "@tanstack/react-router";
import { DashboardHeader } from "@/components/dashboard/Header";
import { KpiRow } from "@/components/dashboard/KpiRow";
import { RevenueOriginDonut } from "@/components/dashboard/RevenueOriginDonut";
import { RevenueVsGoalChart } from "@/components/dashboard/RevenueVsGoalChart";
import { FranchiseRankingTable } from "@/components/dashboard/FranchiseRankingTable";
import { AiEfficiencyPanel } from "@/components/dashboard/AiEfficiencyPanel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard Executivo — Rede de Franquias de Estética" },
      {
        name: "description",
        content:
          "Painel executivo da rede de franquias de estética e beleza com métricas financeiras, operacionais e ROI da infraestrutura de IA em tempo real.",
      },
      { property: "og:title", content: "Dashboard Executivo — Rede de Franquias" },
      {
        property: "og:description",
        content:
          "Visão consolidada de faturamento, ocupação, conversão e eficiência da IA em uma rede nacional de franquias.",
      },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <main className="min-h-screen bg-dracula-bg text-dracula-fg">
      <div className="mx-auto max-w-[1600px] space-y-5 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <DashboardHeader />

        <KpiRow />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <RevenueOriginDonut />
          </div>
          <div className="lg:col-span-4">
            <RevenueVsGoalChart />
          </div>
          <div className="lg:col-span-4">
            <FranchiseRankingTable />
          </div>
        </div>

        <AiEfficiencyPanel />

        <footer className="pt-2 text-center text-[11px] text-dracula-muted">
          Atualizado em tempo real
        </footer>
      </div>
    </main>
  );
}
