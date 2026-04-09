"use client";

import Image from "next/image";
import { type ReactNode } from "react";

const backgroundTexture =
  "https://www.figma.com/api/mcp/asset/45bc4156-32fd-4950-acb1-d5e1ac4595be";
const sectionIcon = "/icons/clock.svg";
const characterImage = "/images/tv2.png";

type Badge = {
  kind: string;
  title: string;
  institution: string;
  period: string;
};

type TimelineEntry = {
  period: string;
  role: string;
  company: string;
  highlights: string[];
};

const characterSummary = [
  { label: "Classe", value: "UI/UX Designer" },
  { label: "Especialização", value: "Visual Strategy & Experience Design" },
  { label: "Nível", value: "13 anos de experiência" },
];

const originStory = [
  "Jornada iniciada em 2013, dominando as artes do design gráfico, enfrentando desafios envolvendo identidade visual, comunicação e campanhas para diferentes tipos de clientes.",
  "Durante os primeiros anos, desenvolvi domínio sobre composição visual, hierarquia e clareza na comunicação, criando uma base sólida que mais tarde se tornou uma vantagem competitiva.",
  "Com o avanço da tecnologia e o surgimento de novos desafios, evoluí minha build para o universo do UI/UX, passando a atuar diretamente no desenvolvimento de plataformas digitais, interfaces e fluxos de navegação.",
];

const badges: Badge[] = [
  {
    kind: "Curso superior",
    title: "Publicidade e Propaganda",
    institution: "UNIVAS",
    period: "2012 - 2015",
  },
  {
    kind: "Formação complementar",
    title: "UI/UX Designer",
    institution: "ALURA",
    period: "2023 - 2024",
  },
  {
    kind: "Formação complementar",
    title: "Gestão de Pessoas",
    institution: "ALURA",
    period: "2023",
  },
  {
    kind: "Formação complementar",
    title: "Design Thinking",
    institution: "ALURA",
    period: "2024",
  },
  {
    kind: "Formação complementar",
    title: "Landing Pages",
    institution: "ALURA",
    period: "2024",
  },
  {
    kind: "Formação complementar",
    title: "UI/UX Designer",
    institution: "UX Unicórnio",
    period: "2025 - 2026",
  },
];

const timeline: TimelineEntry[] = [
  {
    period: "2013 - 2018",
    role: "Designer Gráfico",
    company: "Entre Consultoria",
    highlights: [
      "Atendimento e desenvolvimento de projetos para clientes da região.",
      "Criação de identidades visuais, campanhas e materiais gráficos.",
      "Atuação estratégica em branding e comunicação institucional.",
      "Gestão simultânea de múltiplos projetos, garantindo prazos e consistência visual.",
    ],
  },
  {
    period: "2019 - 2023",
    role: "Analista de Marketing",
    company: "Rede Dom Pedro",
    highlights: [
      "Gestão da comunicação interna e externa em mais de 80 unidades da rede.",
      "Criação de materiais impressos, digitais e consistência visual.",
      "Planejamento e execução de campanhas e ações promocionais nacionais.",
      "Divulgação e fortalecimento de iniciativas de fidelização.",
    ],
  },
  {
    period: "2023 - 2025",
    role: "UI/UX Designer",
    company: "Scoder Tech Studio",
    highlights: [
      "Desenvolvimento de fluxos no Figma para clientes.",
      "Prototipagens, validações e projetos responsivos em white label.",
      "Reuniões com clientes para acompanhamento de projetos.",
      "Desenvolvimento de design systems para escalabilidade.",
    ],
  },
  {
    period: "2025 - 2026",
    role: "UI/UX Designer Lead",
    company: "Scoder Tech Studio",
    highlights: [
      "Acompanhamento técnico da equipe e realização de weeklies e one-on-ones.",
      "Apoio estratégico nas decisões de design.",
      "Desenvolvimento de fluxos completos, design systems e prototipagens.",
      "Atuação em projetos de maior complexidade.",
    ],
  },
];

function SectionHeading() {
  return (
    <div className="flex items-center gap-4 rounded-[12px] px-4 py-4">
      <Image src={sectionIcon} alt="" width={32} height={32} className="h-8 w-8 object-contain" />
      <h2 className="font-[family:var(--font-display)] text-[32px] uppercase tracking-[0.08em] text-[var(--accent-soft)]">
        Background
      </h2>
      <Image
        src={sectionIcon}
        alt=""
        width={32}
        height={32}
        className="h-8 w-8 scale-x-[-1] object-contain"
      />
    </div>
  );
}

function PanelFrame({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-[18px] border border-[var(--panel-border)] bg-[rgba(0,18,0,0.3)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] backdrop-blur-[3px] ${className}`}
    >
      <h3 className="font-[family:var(--font-body)] text-[20px] uppercase text-[var(--accent-soft)]">
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function BackgroundSection() {
  return (
    <section
      id="background"
      className="relative overflow-hidden border-t border-[#111] scroll-mt-20"
      style={{
        backgroundColor: "#010302",
        backgroundImage: `url("${backgroundTexture}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(107,217,107,0.12),transparent_42%),linear-gradient(180deg,rgba(0,0,0,0.48),rgba(0,0,0,0.16)_32%,rgba(0,0,0,0.84))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(107,217,107,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(107,217,107,0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35" />

      <div className="relative mx-auto max-w-[1920px] px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-24 xl:px-[80px]">
        <div className="flex justify-center">
          <SectionHeading />
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2 xl:grid-cols-[minmax(0,470px)_minmax(0,320px)_minmax(360px,1fr)] xl:items-stretch">
          <PanelFrame title="Ficha do Personagem">
            <div className="space-y-6 text-[12px] text-[#b9b9b9]">
              <dl className="space-y-2">
                {characterSummary.map((item) => (
                  <div key={item.label} className="flex items-start justify-between gap-4">
                    <dt className="min-w-0 text-[var(--accent-soft)]">{item.label}</dt>
                    <dd className="max-w-[15rem] text-right sm:max-w-[18rem]">{item.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="space-y-3">
                <p className="text-[12px] uppercase tracking-[0.16em] text-[var(--accent-soft)]">
                  História de Origem
                </p>
                <div className="space-y-3 leading-6">
                  {originStory.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </PanelFrame>

          <PanelFrame title="Badges">
            <div className="space-y-4">
              {badges.map((badge) => (
                <div
                  key={`${badge.title}-${badge.period}`}
                  className="flex items-start justify-between gap-4 border-b border-white/6 pb-3 last:border-b-0 last:pb-0"
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.1em] text-[#9aa69d]">
                      {badge.kind}
                    </p>
                    <p className="mt-1 text-[12px] uppercase text-[var(--accent-soft)]">
                      {badge.title}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-[#9aa69d]">{badge.period}</p>
                    <p className="mt-1 text-[12px] uppercase text-[var(--accent-soft)]">
                      {badge.institution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </PanelFrame>

          <div className="relative min-h-[280px] overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_34%_28%,rgba(107,217,107,0.12),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.24))] shadow-[0_24px_60px_rgba(0,0,0,0.28)] lg:col-span-2 xl:col-span-1">
            <Image
              src={characterImage}
              alt="Ilustração de setup retrô representando a jornada profissional"
              fill
              priority
              className="object-contain object-[12%_center] sm:object-[8%_center] xl:object-[0%_center]"
            />
          </div>
        </div>

        <div className="mt-10 px-0 py-6 sm:py-8">
          <div className="relative hidden lg:block">
            <div className="absolute inset-x-[-8vw] top-[28px] h-px bg-[linear-gradient(90deg,rgba(107,217,107,0.72),rgba(24,174,255,0.92),rgba(255,132,0,0.82))]" />
            <div className="grid grid-cols-2 gap-6 xl:grid-cols-4 xl:gap-8">
              {timeline.map((entry) => (
                <article key={entry.period} className="relative text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center">
                    <span className="absolute top-[16px] h-6 w-6 rounded-full border-2 border-[#2ed9ff] bg-[rgba(0,8,18,0.95)] shadow-[0_0_18px_rgba(46,217,255,0.45)]" />
                  </div>
                  <p className="font-[family:var(--font-display)] text-[17px] text-white">{entry.period}</p>
                  <div className="mt-6 rounded-[18px] border border-white/6 bg-[rgba(0,0,0,0.18)] px-4 py-5 xl:px-5">
                    <p className="text-[16px] font-semibold text-white">{entry.role}</p>
                    <p className="mt-1 text-[12px] text-[#b9b9b9]">{entry.company}</p>
                    <ul className="mt-4 space-y-2 text-left text-[10px] leading-5 text-white/72">
                      {entry.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-soft)]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-4 lg:hidden">
            {timeline.map((entry) => (
              <article
                key={entry.period}
                className="rounded-[20px] border border-white/8 bg-[rgba(0,0,0,0.2)] p-5"
              >
                <div className="flex items-center gap-4">
                  <span className="h-4 w-4 rounded-full border-2 border-[#2ed9ff] bg-[rgba(0,8,18,0.95)] shadow-[0_0_14px_rgba(46,217,255,0.4)]" />
                  <p className="font-[family:var(--font-display)] text-[16px] text-white">
                    {entry.period}
                  </p>
                </div>
                <p className="mt-4 text-[16px] font-semibold text-white">{entry.role}</p>
                <p className="mt-1 text-[12px] text-[#b9b9b9]">{entry.company}</p>
                <ul className="mt-4 space-y-2 text-[12px] leading-6 text-white/72">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-soft)]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
