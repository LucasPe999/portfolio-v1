import Image from "next/image";
import { motion } from "framer-motion";

type SkillProject = {
  title: string;
  description: string;
  image: string;
  imageContain?: boolean;
  imageClassName?: string;
  hideButton?: boolean;
  buttonHref?: string;
};

type SkillPanelProps = {
  title: string;
  eyebrow: string;
  summary: string;
  overview: string;
  color: string;
  panelBackground?: string;
  progressLabel: string;
  progressValue: string;
  progressFill: string;
  icon: string;
  competencies: string[];
  project?: SkillProject;
  onClose: () => void;
};

export function SkillPanel({
  title,
  eyebrow,
  summary,
  overview,
  color,
  panelBackground = "rgba(0, 18, 0, 0.9)",
  progressLabel,
  progressValue,
  progressFill,
  icon,
  competencies,
  project,
  onClose,
}: SkillPanelProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 96 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 72 }}
      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full overflow-hidden rounded-[12px] border px-8 pb-12 pt-8 backdrop-blur-[2px]"
      style={{
        backgroundColor: panelBackground,
        borderColor: color,
        boxShadow: `0 20px 80px rgba(0,0,0,0.45), 0 0 0 1px ${color}18`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[12px] border border-white/15" />

      <div className="relative flex flex-col gap-8">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="flex h-4 w-4 items-center justify-center text-[14px] leading-none text-white/55 transition hover:text-white"
            aria-label="Fechar painel"
          >
            x
          </button>
        </div>

        <div className="flex items-center gap-4">
          <Image src={icon} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
          <div>
            <p className="text-[10px] uppercase tracking-[0.02em]" style={{ color }}>
              {eyebrow}
            </p>
            <h2 className="font-[family:var(--font-display)] text-[24px] uppercase leading-none text-white">
              {title}
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-[35px]">
          <section className="space-y-2">
            <p className="text-[12px] leading-normal text-[#b9b9b9]">{summary}</p>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[12px] leading-normal">
                <span className="uppercase" style={{ color }}>
                  {progressLabel}
                </span>
                <span className="text-[#b9b9b9]">{progressValue}</span>
              </div>
              <div className="h-[6px] w-full rounded-[500px] bg-[linear-gradient(90deg,rgba(255,255,255,0.15),rgba(255,255,255,0.03))]">
                <div
                  className="h-full rounded-[500px]"
                  style={{
                    width: progressFill,
                    backgroundColor: color,
                    boxShadow: `0 0 20px ${color}38`,
                  }}
                />
              </div>
            </div>
          </section>

          <section className="space-y-2">
            <div className="space-y-1">
              <p className="text-[12px] uppercase leading-normal" style={{ color }}>
                Visão Geral
              </p>
              <div className="h-px w-full" style={{ backgroundColor: color }} />
            </div>
            <p className="text-[12px] leading-normal text-[#b9b9b9]">{overview}</p>
          </section>

          <section className="space-y-2">
            <div className="space-y-1">
              <p className="text-[12px] uppercase leading-normal" style={{ color }}>
                Competências
              </p>
              <div className="h-px w-full" style={{ backgroundColor: color }} />
            </div>
            <ul className="list-disc pl-[18px] text-[12px] leading-normal text-[#b9b9b9]">
              {competencies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {project ? (
            <section className="space-y-4">
              <div className="space-y-1">
                <p className="text-[12px] uppercase leading-normal" style={{ color }}>
                  Projetos em destaque
                </p>
                <div className="h-px w-full" style={{ backgroundColor: color }} />
              </div>

              <div className="flex items-start gap-2">
                <div
                  className="relative h-[108px] w-[108px] shrink-0 overflow-hidden rounded-[10px] border"
                  style={{ borderColor: color }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={
                      project.imageContain
                        ? `object-contain p-2 ${project.imageClassName ?? ""}`
                        : `object-cover ${project.imageClassName ?? ""}`
                    }
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-[family:var(--font-display)] text-[12px] uppercase leading-none text-white">
                    {project.title}
                  </p>
                  <p className="mt-2 text-[10px] leading-[1.24] text-[#b9b9b9]">
                    {project.description}
                  </p>
                </div>
              </div>

              {project.hideButton ? null : project.buttonHref ? (
                <a
                  href={project.buttonHref}
                  className="flex h-10 w-full items-center justify-center gap-[10px] rounded-[12px] border border-[#224222] text-[15px] font-bold text-white transition hover:brightness-110"
                  style={{ backgroundColor: panelBackground }}
                >
                  VER PROJETO
                  <span aria-hidden="true">-&gt;</span>
                </a>
              ) : (
                <button
                  type="button"
                  className="flex h-10 w-full items-center justify-center gap-[10px] rounded-[12px] border border-[#224222] text-[15px] font-bold text-white transition hover:brightness-110"
                  style={{ backgroundColor: panelBackground }}
                >
                  VER PROJETO
                  <span aria-hidden="true">-&gt;</span>
                </button>
              )}
            </section>
          ) : null}
        </div>
      </div>
    </motion.aside>
  );
}
