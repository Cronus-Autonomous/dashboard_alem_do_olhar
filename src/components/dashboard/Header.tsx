import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { regioes } from "@/lib/dashboard-mocks";
import { formatDatePtBR } from "@/lib/format";

export function DashboardHeader() {
  const [regiao, setRegiao] = useState<string>(regioes[0]);
  const [open, setOpen] = useState(false);
  const hoje = formatDatePtBR(new Date());

  return (
    <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:flex-wrap sm:justify-between">
      <div className="flex min-w-0 items-center gap-3">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-dracula-card-2 ring-1 ring-dracula-purple/30">
          <Sparkles className="h-6 w-6 text-dracula-purple" />
        </div>
        <div className="min-w-0">
          <h1 className="truncate text-xl font-bold text-dracula-fg sm:text-2xl">
            Olá, Patrícia
          </h1>
          <p className="truncate text-xs text-dracula-muted sm:text-sm">
            Visão consolidada da rede · <span className="capitalize">{hoje}</span>
          </p>
        </div>
      </div>

      <div className="relative shrink-0">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 rounded-xl border border-dracula-line/60 bg-dracula-card px-4 py-2.5 text-sm font-medium text-dracula-fg transition hover:border-dracula-purple/60 hover:bg-dracula-card-2"
        >
          <span className="hidden text-dracula-muted sm:inline">Filtro:</span>
          <span>{regiao}</span>
          <ChevronDown className="h-4 w-4 text-dracula-muted" />
        </button>
        {open && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
            <div className="absolute right-0 z-20 mt-2 w-56 overflow-hidden rounded-xl border border-dracula-line/60 bg-dracula-card-2 shadow-2xl">
              {regioes.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => {
                    setRegiao(r);
                    setOpen(false);
                  }}
                  className={`block w-full px-4 py-2.5 text-left text-sm transition hover:bg-dracula-line/40 ${
                    r === regiao ? "text-dracula-purple" : "text-dracula-fg"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </header>
  );
}
