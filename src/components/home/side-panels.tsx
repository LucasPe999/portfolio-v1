const tools = ["Figma", "Framer", "Notion", "FigJam", "Tailwind CSS", "VS Code", "GitHub"];

const stats = [
  { value: "5+", label: "Anos de experiência" },
  { value: "15+", label: "Projetos entregues" },
  { value: "10+", label: "Clientes satisfeitos" },
  { value: "oo", label: "Cafés consumidos" },
];

export function LeftMissionPanel() {
  return (
    <div className="space-y-5">
      <section className="panel relative overflow-hidden rounded-[1.8rem] p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,255,163,0.12),transparent_42%)]" />
        <div className="relative">
          <p className="hud-label text-[11px] text-[var(--accent-soft)]">Ferramentas do meu cinto</p>
          <p className="mt-4 font-[family:var(--font-display)] text-[2rem] uppercase leading-[0.96] tracking-[0.06em] text-white">
            Stack de criação e execução
          </p>
          <p className="mt-4 text-sm leading-6 text-white/65">
            Algumas das ferramentas usadas para transformar ideias em interfaces premium.
          </p>
        </div>
      </section>

      <section className="panel rounded-[1.8rem] p-5">
        <p className="font-[family:var(--font-display)] text-2xl uppercase leading-none tracking-[0.08em] text-white">
          Leituras do sistema
        </p>
        <div className="mt-5 space-y-4">
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/38">Disponibilidade</p>
            <p className="mt-2 text-sm text-white/80">Projetos de produto, interfaces e sistemas visuais.</p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/38">Foco atual</p>
            <p className="mt-2 text-sm text-white/80">Experiências imersivas com design e frontend moderno.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function BottomDock() {
  return (
    <section className="panel rounded-[1.9rem] p-5 sm:p-6">
      <div className="flex flex-wrap gap-3">
        {tools.map((tool) => (
          <div
            key={tool}
            className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-white/78 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
          >
            {tool}
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.025] p-4"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line-strong)] bg-[rgba(126,255,163,0.08)] text-[var(--accent-soft)]">
              +
            </div>
            <div>
              <p className="font-[family:var(--font-display)] text-2xl uppercase tracking-[0.08em] text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/45">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
