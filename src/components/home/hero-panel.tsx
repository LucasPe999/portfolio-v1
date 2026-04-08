export function HeroPanel() {
  return (
    <section className="relative z-10 max-w-[26rem]">
      <div className="inline-flex items-center gap-3 rounded-full border border-[var(--line-strong)] bg-[rgba(126,255,163,0.08)] px-4 py-2 shadow-[0_0_24px_rgba(126,255,163,0.08)]">
        <span className="text-sm text-[var(--accent-soft)]">+</span>
        <span className="hud-label text-[11px] text-[var(--accent-soft)]">
          Bem-vindo ao meu mundo
        </span>
      </div>

      <div className="mt-9">
        <h1 className="font-[family:var(--font-display)] text-[2.9rem] uppercase leading-[0.88] tracking-[0.03em] text-white [text-shadow:0_12px_40px_rgba(0,0,0,0.48)] sm:text-[3.8rem] xl:text-[4.6rem]">
          Design que conecta.
          <span className="block text-[var(--accent-soft)]">Experiencias</span>
          que transformam.
        </h1>
        <p className="mt-6 max-w-md text-base leading-7 text-white/72 sm:text-lg">
          Explore meu mapa de habilidades, conheca projetos e descubra como transformo
          ideias em produtos digitais de alto impacto.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#mapa"
          className="hud-label rounded-2xl bg-[linear-gradient(180deg,#93ff9a_0%,#57e66b_100%)] px-6 py-4 text-xs text-slate-950 shadow-[0_0_32px_rgba(126,255,163,0.32)] transition hover:brightness-110"
        >
          Explorar mapa
        </a>
        <a
          href="#projetos"
          className="hud-label rounded-2xl border border-white/12 bg-white/[0.03] px-6 py-4 text-xs text-white/70 transition hover:border-white/20 hover:text-white"
        >
          Ver projetos
        </a>
      </div>
    </section>
  );
}
