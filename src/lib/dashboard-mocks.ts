export type FranchiseStatus = "meta" | "atencao" | "critico";

export type Franchise = {
  rank: number;
  unidade: string;
  regiao: string;
  faturamento: number;
  ocupacao: number;
  aiAgendamentos: number;
  status: FranchiseStatus;
};

export const regioes = [
  "Todas as Regiões",
  "São Paulo",
  "Rio de Janeiro",
  "Minas Gerais",
  "Paraná",
  "Bahia",
  "Rio Grande do Sul",
] as const;

export const kpis = [
  {
    id: "faturamento",
    label: "Faturamento da Rede (Hoje)",
    value: "R$ 145.200",
    delta: "+12,4%",
    deltaDir: "up" as const,
    sub: "vs. ontem",
    accent: "pink" as const,
    icon: "DollarSign" as const,
  },
  {
    id: "ocupacao",
    label: "Taxa de Ocupação da Agenda",
    value: "78%",
    delta: "+3 pp",
    deltaDir: "up" as const,
    sub: "vs. ontem",
    accent: "cyan" as const,
    icon: "CalendarCheck" as const,
  },
  {
    id: "conversao",
    label: "Conversão de Avaliações",
    value: "64%",
    delta: "+5 pp",
    deltaDir: "up" as const,
    sub: "vs. ontem",
    accent: "green" as const,
    icon: "Target" as const,
  },
  {
    id: "ia",
    label: "Agendamentos Autônomos por IA",
    value: "32%",
    delta: "+8 pp",
    deltaDir: "up" as const,
    sub: "vs. ontem",
    accent: "purple" as const,
    icon: "Sparkles" as const,
  },
  {
    id: "nps",
    label: "NPS Médio da Rede",
    value: "92",
    delta: "+1",
    deltaDir: "up" as const,
    sub: "vs. semana anterior",
    accent: "yellow" as const,
    icon: "Heart" as const,
  },
];

export const revenueOrigin = [
  { name: "Serviços em Loja", value: 89800, color: "#ff79c6" },
  { name: "Produtos Home Care", value: 30750, color: "#8be9fd" },
  { name: "Upgrades Cross-Sell IA", value: 24650, color: "#bd93f9" },
];

// 22 dias do mês corrente (até hoje), acumulado vs meta linear
const META_MES = 4_200_000;
const DIAS_MES = 30;
const metaPorDia = META_MES / DIAS_MES;

export const dailyRevenue = Array.from({ length: 22 }, (_, i) => {
  const dia = i + 1;
  // tendência crescente com leve ruído
  const base = 130000 + i * 2500 + Math.sin(i / 2) * 15000;
  return {
    dia: String(dia).padStart(2, "0"),
    diario: Math.round(base),
    meta: Math.round(metaPorDia * dia),
  };
}).reduce<Array<{ dia: string; acumulado: number; meta: number; diario: number }>>(
  (acc, curr, i) => {
    const prev = i === 0 ? 0 : acc[i - 1].acumulado;
    acc.push({
      dia: curr.dia,
      diario: curr.diario,
      acumulado: prev + curr.diario,
      meta: curr.meta,
    });
    return acc;
  },
  [],
);

export const franchises: Franchise[] = [
  { rank: 1, unidade: "Beleza Pura — Moema", regiao: "SP", faturamento: 28450, ocupacao: 94, aiAgendamentos: 41, status: "meta" },
  { rank: 2, unidade: "Estética Vita — Barra", regiao: "RJ", faturamento: 26780, ocupacao: 91, aiAgendamentos: 38, status: "meta" },
  { rank: 3, unidade: "Glow Studio — Savassi", regiao: "MG", faturamento: 24100, ocupacao: 88, aiAgendamentos: 36, status: "meta" },
  { rank: 4, unidade: "Lumière — Batel", regiao: "PR", faturamento: 22340, ocupacao: 86, aiAgendamentos: 34, status: "meta" },
  { rank: 5, unidade: "Pure Skin — Pinheiros", regiao: "SP", faturamento: 21890, ocupacao: 85, aiAgendamentos: 33, status: "meta" },
  { rank: 38, unidade: "Bella Forma — Centro", regiao: "BA", faturamento: 9420, ocupacao: 62, aiAgendamentos: 18, status: "atencao" },
  { rank: 39, unidade: "Estética Aura — Asa Sul", regiao: "DF", faturamento: 8870, ocupacao: 59, aiAgendamentos: 16, status: "atencao" },
  { rank: 40, unidade: "Spa Mar — Boa Viagem", regiao: "PE", faturamento: 7640, ocupacao: 54, aiAgendamentos: 14, status: "critico" },
  { rank: 41, unidade: "Beauty House — Centro", regiao: "RS", faturamento: 6980, ocupacao: 49, aiAgendamentos: 12, status: "critico" },
  { rank: 42, unidade: "Estilo Próprio — Norte", regiao: "GO", faturamento: 5320, ocupacao: 42, aiAgendamentos: 9, status: "critico" },
];

export const aiMetrics = [
  {
    id: "fcr",
    label: "Resolução na 1ª Interação (FCR)",
    value: "84%",
    sub: "dúvidas e agendamentos sem humano",
    accent: "green" as const,
    icon: "CheckCircle2" as const,
  },
  {
    id: "transbordo",
    label: "Transbordo Humano",
    value: "16%",
    sub: "direcionados para a recepção",
    accent: "orange" as const,
    icon: "Users" as const,
  },
  {
    id: "recuperada",
    label: "Receita Recuperada (Hoje)",
    value: "R$ 18.450",
    sub: "follow-up de inativos & carrinhos",
    accent: "pink" as const,
    icon: "TrendingUp" as const,
  },
  {
    id: "tempo",
    label: "Tempo Médio de Resposta",
    value: "2,4s",
    sub: "primeira resposta da IA",
    accent: "cyan" as const,
    icon: "Zap" as const,
  },
];
