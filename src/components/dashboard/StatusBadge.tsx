import type { FranchiseStatus } from "@/lib/dashboard-mocks";

const map: Record<FranchiseStatus, { label: string; className: string }> = {
  meta: {
    label: "Meta Batida",
    className: "bg-dracula-green/15 text-dracula-green ring-dracula-green/30",
  },
  atencao: {
    label: "Atenção",
    className: "bg-dracula-yellow/15 text-dracula-yellow ring-dracula-yellow/30",
  },
  critico: {
    label: "Crítico",
    className: "bg-dracula-red/15 text-dracula-red ring-dracula-red/30",
  },
};

export function StatusBadge({ status }: { status: FranchiseStatus }) {
  const s = map[status];
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ${s.className}`}
    >
      {s.label}
    </span>
  );
}
