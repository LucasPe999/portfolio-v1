"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";

const questsBackground = "/quests-background.png";
const questsIcon = "/icons/map.svg";
const arrowRight =
  "https://www.figma.com/api/mcp/asset/b84950e5-dfb8-4dc2-a693-76494b7e71e3";
const activeFolderPath =
  "M24 1H126.605C132.087 1.00009 137.389 2.9584 141.555 6.52148L182.006 41.1191C186.534 44.9921 192.297 47.1201 198.256 47.1201H1433.3C1446.01 47.1201 1456.3 57.4178 1456.3 70.1201V765.654C1456.3 778.357 1446.01 788.654 1433.3 788.654H24C11.2975 788.654 1.00013 778.357 1 765.654V24C1 11.2975 11.2975 1 24 1Z";

type QuestTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  year: string;
  client: string;
  duration: string;
  preview: string;
  context: string;
  intro: string[];
  scale: string[];
  platformUrl?: string;
};

const questTabs: QuestTab[] = [
  {
    id: "furion",
    label: "FURION",
    title: "THE HUNT OF FURION",
    description:
      "Plataforma de inteligência artificial focada em automação e criação de conteúdos para marketing digital, oferecendo ferramentas para geração de textos, roteiros, anúncios e materiais estratégicos, com o objetivo de acelerar processos criativos e de produção.",
    year: "2025",
    client: "BILHON",
    duration: "6 MESES",
    preview: "https://www.figma.com/api/mcp/asset/0e802fba-679f-4bb9-87dc-ef23cc9b8d80",
    context:
      "Apesar do potencial tecnológico, a plataforma enfrentava desafios relacionados à experiência do usuário, principalmente devido à complexidade das funcionalidades e à necessidade de atender diferentes perfis de uso, do iniciante ao avançado. O projeto foi estruturado para reorganizar a experiência, reduzir fricções e transformar o produto em uma ferramenta mais clara, escalável e orientada à ação.",
    intro: [
      "Foram mapeadas quais telas seriam desenvolvidas. Com isso, ataquei primeiramente os fluxos de criação de experimentos e organização de projetos; posteriormente, foquei em alinhar todos os componentes para que a escalabilidade fosse facilitada.",
      "Após um alinhamento visual, chegamos ao modelo final de estética e iniciei o desenvolvimento do board, que seria a parte mais complexa.",
    ],
    scale: [
      "Versões dark e light.",
      "Responsividade.",
      "Versão mobile.",
      "Design system robusto e organizado.",
    ],
    platformUrl: "https://app.furion.ai/auth/login",
  },
  {
    id: "kolto",
    label: "KOLTO",
    title: "KOLTO EXPERIENCE",
    description:
      "Projeto com foco em clareza operacional, organização visual e construção de fluxos mais objetivos para uso diário da plataforma.",
    year: "2024",
    client: "KOLTO",
    duration: "4 MESES",
    preview: "https://www.figma.com/api/mcp/asset/0e802fba-679f-4bb9-87dc-ef23cc9b8d80",
    context:
      "A necessidade principal era simplificar o uso e tornar a plataforma mais legível para diferentes perfis, reduzindo o excesso visual e aumentando a confiança durante a navegação.",
    intro: [
      "O trabalho começou pela reestruturação dos fluxos principais e pelo redesenho das hierarquias visuais de telas mais críticas.",
      "A partir disso, o produto ganhou consistência e uma base mais preparada para evolução.",
    ],
    scale: [
      "Sistema visual mais consistente.",
      "Melhoria de navegacao.",
      "Padronizacao de componentes.",
      "Maior escalabilidade para novas features.",
    ],
  },
  {
    id: "clickmax",
    label: "CLICKMAX",
    title: "CLICKMAX GROWTH HUB",
    description:
      "Ecossistema visual para criação de landing pages com foco em conversão, estratégia comercial e organização modular.",
    year: "2025",
    client: "CLICKMAX",
    duration: "5 MESES",
    preview: "https://www.figma.com/api/mcp/asset/0e802fba-679f-4bb9-87dc-ef23cc9b8d80",
    context:
      "O desafio central era traduzir uma oferta comercial ampla em uma experiência objetiva, premium e orientada a resultado, sem perder flexibilidade.",
    intro: [
      "O processo iniciou pela definição de estrutura modular, combinando argumentação comercial com clareza visual.",
      "Em seguida, os fluxos foram refinados para reduzir atrito e aumentar foco nas ações principais.",
    ],
    scale: [
      "Escalabilidade de módulos.",
      "Aprimoramento visual do funil.",
      "Padrões reutilizáveis.",
      "Maior consistencia entre paginas.",
    ],
  },
  {
    id: "ecom",
    label: "E-COM",
    title: "E-COM MARKET SYSTEM",
    description:
      "Projeto estruturado para valorizar a marca da empresa no ambiente de marketplace com uma experiência mais clara e intuitiva.",
    year: "2024",
    client: "PRIVATE",
    duration: "3 MESES",
    preview: "https://www.figma.com/api/mcp/asset/0e802fba-679f-4bb9-87dc-ef23cc9b8d80",
    context:
      "Foi necessário reorganizar a forma como o usuário percebia produtos, informações e a própria proposta de valor da marca dentro de um ecossistema competitivo.",
    intro: [
      "A primeira etapa foi entender os pontos de fricção e priorizar quais blocos de conteúdo realmente ajudavam na tomada de decisão.",
      "Com isso, a experiência foi redesenhada para ficar mais direta e confiável.",
    ],
    scale: [
      "Fluxos mais simples.",
      "Apresentacao comercial fortalecida.",
      "Consistência entre telas.",
      "Melhor leitura de informação.",
    ],
  },
  {
    id: "board",
    label: "BOARD",
    title: "BOARD CONTROL ROOM",
    description:
      "Painel de operação pensado para concentrar informações importantes com leitura rápida, densidade equilibrada e atmosfera premium.",
    year: "2025",
    client: "STEALTH",
    duration: "6 MESES",
    preview: "https://www.figma.com/api/mcp/asset/0e802fba-679f-4bb9-87dc-ef23cc9b8d80",
    context:
      "O maior desafio foi equilibrar complexidade informacional com uma interface clara, preservando foco e contexto mesmo com alta densidade de dados.",
    intro: [
      "A base foi desenhada com uma grade robusta e componentes previsíveis para acomodar estados e variações futuras.",
      "A interação foi refinada para dar sensação de controle e precisão.",
    ],
    scale: [
      "Arquitetura de informação mais forte.",
      "Estados visuais consistentes.",
      "Padrões para expansão futura.",
      "Melhora da experiência de monitoramento.",
    ],
  },
  {
    id: "labs",
    label: "LABS",
    title: "LABS PROTOTYPE VAULT",
    description:
      "Coleção de explorações e protótipos criada para validar ideias, interações e direções de produto antes do desenvolvimento final.",
    year: "2025",
    client: "INTERNAL",
    duration: "CONTINUO",
    preview: "https://www.figma.com/api/mcp/asset/0e802fba-679f-4bb9-87dc-ef23cc9b8d80",
    context:
      "Esse conjunto de experimentos serviu para acelerar validações e transformar conceitos abstratos em propostas concretas e navegáveis.",
    intro: [
      "Os protótipos nasceram de perguntas de produto e foram organizados em fluxos claros para facilitar feedback rápido.",
      "A cada iteração, a linguagem visual foi ficando mais madura e coerente com o ecossistema.",
    ],
    scale: [
      "Validação mais rápida.",
      "Menor risco antes do build.",
      "Direção visual mais segura.",
      "Apoio melhor ao time de produto.",
    ],
  },
];

const introBullets = [
  "Estruturação de um sistema base para evolução futura.",
  "Melhoria da navegação.",
  "Simplificação de fluxos críticos.",
  "Inclusão de indicadores de contexto e estados ativos.",
];

function InfoDivider({ title }: { title: string }) {
  return (
    <div className="space-y-1">
      <p className="text-[11px] uppercase tracking-[0.04em] text-[var(--accent-soft)]">
        {title}
      </p>
      <div className="h-px w-full bg-[rgba(191,129,255,0.52)]" />
    </div>
  );
}

function MobileQuestCard({
  quest,
  currentIndex,
  onOpenPreview,
}: {
  quest: QuestTab;
  currentIndex: number;
  onOpenPreview: (quest: QuestTab) => void;
}) {
  return (
    <div className="lg:hidden">
      <div className="overflow-hidden rounded-[28px] border border-[#4d2f7a] bg-[linear-gradient(180deg,rgba(17,8,34,0.96),rgba(6,3,16,0.98))] shadow-[0_24px_60px_rgba(0,0,0,0.34),0_0_24px_rgba(191,129,255,0.12)]">
        <button
          type="button"
          onClick={() => onOpenPreview(quest)}
          className="group relative block h-[220px] w-full overflow-hidden border-b border-[#4d2f7a] text-left"
        >
          <Image
            src={quest.preview}
            alt={`Preview do projeto ${quest.label}`}
            fill
            priority
            className="object-cover object-center transition duration-300 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.78))]" />
          <div className="absolute right-4 top-4 rounded-full border border-white/12 bg-black/35 px-3 py-1 text-[10px] tracking-[0.16em] text-white/76 backdrop-blur-md">
            AMPLIAR
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-[11px] tracking-[0.18em] text-[var(--accent-soft)]">
              QUEST {String(currentIndex + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 max-w-[14rem] font-[family:var(--font-display)] text-[31px] uppercase leading-[0.92] text-[var(--accent-soft)]">
              {quest.title}
            </h3>
          </div>
        </button>

        <div className="space-y-5 p-5">
          <p className="text-[14px] leading-6 text-white/74">{quest.description}</p>

          {quest.platformUrl ? (
            <a
              href={quest.platformUrl}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex min-h-12 w-full items-center justify-center rounded-[12px] border border-[#4d2f7a] bg-[rgba(19,10,34,0.9)] px-6 text-[13px] font-bold uppercase leading-none tracking-[0.02em] text-[#d6b8ff] transition hover:border-[var(--accent-soft)] hover:text-[#f3e8ff] hover:shadow-[0_0_18px_rgba(191,129,255,0.24)]"
            >
              <span className="block text-center">Acessar plataforma</span>
              <Image
                src={arrowRight}
                alt=""
                width={16}
                height={16}
                className="absolute right-5 h-4 w-4"
              />
            </a>
          ) : (
            <button
              type="button"
              className="relative inline-flex min-h-12 w-full items-center justify-center rounded-[12px] border border-[#4d2f7a] bg-[rgba(19,10,34,0.9)] px-6 text-[13px] font-bold uppercase leading-none tracking-[0.02em] text-[#d6b8ff] transition hover:border-[var(--accent-soft)] hover:text-[#f3e8ff] hover:shadow-[0_0_18px_rgba(191,129,255,0.24)]"
            >
              <span className="block text-center">Acessar plataforma</span>
              <Image
                src={arrowRight}
                alt=""
                width={16}
                height={16}
                className="absolute right-5 h-4 w-4"
              />
            </button>
          )}

          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-[18px] border border-[#4d2f7a] bg-[rgba(19,10,34,0.48)] p-3">
              <p className="text-[10px] tracking-[0.14em] text-[var(--accent-soft)]">ANO</p>
              <p className="mt-2 text-[14px] font-semibold text-white">{quest.year}</p>
            </div>
            <div className="rounded-[18px] border border-[#4d2f7a] bg-[rgba(19,10,34,0.48)] p-3">
              <p className="text-[10px] tracking-[0.14em] text-[var(--accent-soft)]">CLIENTE</p>
              <p className="mt-2 text-[14px] font-semibold text-white">{quest.client}</p>
            </div>
            <div className="rounded-[18px] border border-[#4d2f7a] bg-[rgba(19,10,34,0.48)] p-3">
              <p className="text-[10px] tracking-[0.14em] text-[var(--accent-soft)]">TEMPO</p>
              <p className="mt-2 text-[14px] font-semibold text-white">{quest.duration}</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] tracking-[0.12em]">
              <span className="text-[var(--accent-soft)]">COMPLEXIDADE</span>
              <span className="text-white/76">MUITO ALTA</span>
            </div>
            <div className="h-[6px] rounded-full bg-white/10">
              <div className="h-full w-full rounded-full bg-[var(--accent-soft)] shadow-[0_0_18px_rgba(191,129,255,0.5)]" />
            </div>
          </div>

          <div className="space-y-3 rounded-[22px] border border-[#4d2f7a] bg-[rgba(19,10,34,0.34)] p-4">
            <InfoDivider title="CONTEXTO" />
            <p className="text-[14px] leading-6 text-white/72">{quest.context}</p>
          </div>

          <div className="space-y-3 rounded-[22px] border border-[#4d2f7a] bg-[rgba(19,10,34,0.34)] p-4">
            <p className="font-[family:var(--font-display)] text-[17px] text-[var(--accent-soft)]">
              Prólogo
            </p>
            <div className="space-y-3 text-[14px] leading-6 text-white/72">
              {quest.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-3 rounded-[22px] border border-[#4d2f7a] bg-[rgba(19,10,34,0.34)] p-4">
            <p className="font-[family:var(--font-display)] text-[17px] text-[var(--accent-soft)]">
              Escalabilidade
            </p>
            <ul className="space-y-2 text-[14px] leading-6 text-white/72">
              {quest.scale.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-soft)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

function ActiveQuestFolder({
  quest,
  onOpenPreview,
}: {
  quest: QuestTab;
  onOpenPreview: (quest: QuestTab) => void;
}) {
  return (
    <div className="relative aspect-[1458/790] w-full">
      <svg
        viewBox="0 0 1458 790"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="active-folder-fill" x1="0" y1="0" x2="544.28" y2="344.35" gradientUnits="userSpaceOnUse">
            <stop stopColor="rgba(17,8,34,0.92)" />
            <stop offset="1" stopColor="rgba(49,25,78,0.64)" />
          </linearGradient>
          <radialGradient
            id="active-folder-stroke"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(315 246.999) rotate(19.6629) scale(1276.43 1276.43)"
          >
            <stop offset="0.0513232" stopColor="#4d2f7a" />
            <stop offset="0.477282" stopColor="#bf81ff" />
            <stop offset="1" stopColor="#4d2f7a" />
          </radialGradient>
        </defs>
        <path d={activeFolderPath} fill="url(#active-folder-fill)" stroke="url(#active-folder-stroke)" strokeWidth="2" />
      </svg>

      <div className="pointer-events-none absolute left-[-1%] top-[1%] z-10 flex h-[6.6%] w-[13.2%] items-center justify-center">
        <Image
          src="/icons/furion-logo.svg"
          alt="FURION"
          width={121}
          height={20}
          className="h-auto w-[74%] max-w-[121px] object-contain"
        />
      </div>

      <div className="absolute left-[4.87%] right-[2.61%] top-[12.15%] bottom-[4.3%] flex gap-[1.1%]">
        <button
          type="button"
          onClick={() => onOpenPreview(quest)}
          className="group relative w-[31.13%] overflow-hidden rounded-[12px] text-left"
        >
          <Image
            src={quest.preview}
            alt={`Preview do projeto ${quest.label}`}
            fill
            priority
            className="object-cover object-center transition duration-300 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.18))]" />
          <div className="absolute right-4 top-4 rounded-full border border-white/12 bg-black/35 px-3 py-1 text-[10px] tracking-[0.16em] text-white/80 backdrop-blur-md">
            AMPLIAR
          </div>
        </button>

        <div className="flex-1 rounded-[12px] border border-[#4d2f7a] bg-[rgba(15,7,29,0.9)] px-[2.95%] py-[3.8%]">
          <Card className="border-none bg-transparent">
            <CardHeader className="gap-[4.6%] p-0">
              <div className="flex items-start justify-between gap-6">
                <div className="max-w-[68%]">
                  <CardTitle className="font-[family:var(--font-display)] text-[clamp(22px,2.35vw,34px)] uppercase leading-none tracking-[0.01em] text-[var(--accent-soft)]">
                    {quest.title}
                  </CardTitle>
                  <CardDescription className="mt-[2.4%] text-[clamp(10px,0.8vw,12px)] leading-[1.24] text-[#b9b9b9]">
                    {quest.description}
                  </CardDescription>
                </div>

                {quest.platformUrl ? (
                  <a
                    href={quest.platformUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative inline-flex h-10 shrink-0 items-center justify-center rounded-[12px] border border-[#4d2f7a] bg-[rgba(19,10,34,0.9)] px-6 text-[13px] font-bold uppercase leading-none tracking-[0.02em] text-[#d6b8ff] transition hover:border-[var(--accent-soft)] hover:text-[#f3e8ff] hover:shadow-[0_0_18px_rgba(191,129,255,0.24)]"
                  >
                    <span className="block text-center">Acessar Plataforma</span>
                    <Image
                      src={arrowRight}
                      alt=""
                      width={16}
                      height={16}
                      className="absolute right-5 h-4 w-4"
                    />
                  </a>
                ) : (
                  <button
                    type="button"
                    className="relative inline-flex h-10 shrink-0 items-center justify-center rounded-[12px] border border-[#4d2f7a] bg-[rgba(19,10,34,0.9)] px-6 text-[13px] font-bold uppercase leading-none tracking-[0.02em] text-[#d6b8ff] transition hover:border-[var(--accent-soft)] hover:text-[#f3e8ff] hover:shadow-[0_0_18px_rgba(191,129,255,0.24)]"
                  >
                    <span className="block text-center">Acessar Plataforma</span>
                    <Image
                      src={arrowRight}
                      alt=""
                      width={16}
                      height={16}
                      className="absolute right-5 h-4 w-4"
                    />
                  </button>
                )}
              </div>
            </CardHeader>

            <CardContent className="mt-[4.2%] flex flex-col gap-[4.8%] p-0">
              <section className="grid gap-[3.8%] lg:grid-cols-[210px_minmax(0,1fr)]">
                <div className="space-y-7">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[12px] leading-none">
                        <span className="text-[var(--accent-soft)]">COMPLEXIDADE</span>
                        <span className="text-[#b9b9b9]">MUITO ALTA</span>
                      </div>
                      <div className="h-[6px] w-full rounded-full bg-[rgba(191,129,255,0.16)]">
                        <div className="h-full w-full rounded-full bg-[var(--accent-soft)] shadow-[0_0_18px_rgba(191,129,255,0.52)]" />
                      </div>
                    </div>

                    <dl className="space-y-1 text-[12px] leading-[1.24]">
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-[var(--accent-soft)]">ANO</dt>
                        <dd className="text-[#b9b9b9]">{quest.year}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-[var(--accent-soft)]">CLIENTE</dt>
                        <dd className="text-[#b9b9b9]">{quest.client}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-[var(--accent-soft)]">DESENVOLVIMENTO</dt>
                        <dd className="text-[#b9b9b9]">{quest.duration}</dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="space-y-4">
                  <InfoDivider title="CONTEXTO" />
                  <p className="text-[12px] leading-[1.24] text-[#b9b9b9]">
                    {quest.context}
                  </p>
                </div>
              </section>

              <section className="mt-2 space-y-3">
                <h3 className="font-[family:var(--font-display)] text-[16px] text-[var(--accent-soft)]">
                  Prólogo - Início do desenvolvimento
                </h3>
                <div className="space-y-4 text-[12px] leading-[1.24] text-[#b9b9b9]">
                  {quest.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <ul className="list-disc space-y-0.5 pl-4">
                    {introBullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="mt-3 space-y-3">
                <h3 className="font-[family:var(--font-display)] text-[16px] text-[var(--accent-soft)]">
                  Boss - Escalabilidade do projeto
                </h3>
                <div className="space-y-4 text-[12px] leading-[1.24] text-[#b9b9b9]">
                  <p>
                    Após validar todos os pontos necessários, foi realizada a escalabilidade
                    do projeto, focando em desenvolver todas as telas necessárias, sempre
                    focando em consistência visual e boas práticas de design, além de focar
                    muito em entregar para o time de desenvolvimento um projeto organizado.
                  </p>
                  <ul className="list-disc space-y-0.5 pl-4">
                    {quest.scale.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function QuestsSection() {
  const [activeQuestId, setActiveQuestId] = useState(questTabs[0].id);
  const [previewQuest, setPreviewQuest] = useState<QuestTab | null>(null);
  const activeQuestIndex = questTabs.findIndex((quest) => quest.id === activeQuestId);
  const activeQuest = questTabs[activeQuestIndex] ?? questTabs[0];

  return (
    <section
      id="quests"
      className="relative overflow-hidden scroll-mt-24"
      style={{
        ["--accent-soft" as string]: "#bf81ff",
        backgroundColor: "#05030a",
        backgroundImage: `url("${questsBackground}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(191,129,255,0.18),transparent_36%),linear-gradient(180deg,rgba(4,2,10,0.42),rgba(8,4,18,0.52)_48%,rgba(2,1,7,0.82))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(180,124,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(180,124,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,rgba(203,149,255,0)_0%,rgba(206,158,255,0.08)_38%,rgba(206,158,255,0.2)_100%)] blur-2xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-[1920px] flex-col items-center px-4 pb-14 pt-8 sm:px-6 lg:px-[94px] lg:pb-20">
        <div className="flex items-center gap-4 rounded-[12px] px-4 py-4">
          <Image src={questsIcon} alt="" width={32} height={32} className="h-8 w-8" />
          <h2 className="font-[family:var(--font-display)] text-[32px] uppercase tracking-[0.06em] text-[var(--accent-soft)]">
            Quests
          </h2>
          <Image src={questsIcon} alt="" width={32} height={32} className="h-8 w-8 scale-x-[-1]" />
        </div>

        <article className="relative mt-8 w-full max-w-[1458px]">
          <MobileQuestCard
            quest={activeQuest}
            currentIndex={activeQuestIndex}
            onOpenPreview={setPreviewQuest}
          />

          <Tabs
            defaultValue={questTabs[0].id}
            value={activeQuestId}
            onValueChange={setActiveQuestId}
            className="hidden w-full lg:block"
          >
            {questTabs.map((quest) => (
              <TabsContent key={quest.id} value={quest.id}>
                <ActiveQuestFolder quest={quest} onOpenPreview={setPreviewQuest} />
              </TabsContent>
            ))}

          </Tabs>
        </article>
      </div>

      {previewQuest ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(0,0,0,0.84)] p-4 backdrop-blur-md sm:p-6">
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Fechar imagem ampliada"
            onClick={() => setPreviewQuest(null)}
          />
          <div className="relative z-[1] w-full max-w-6xl">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] tracking-[0.18em] text-[var(--accent-soft)]">
                  PREVIEW EXPANDIDO
                </p>
                <p className="mt-1 font-[family:var(--font-display)] text-[22px] uppercase text-white">
                  {previewQuest.title}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPreviewQuest(null)}
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-[#4d2f7a] bg-[rgba(19,10,34,0.82)] px-4 text-[11px] uppercase tracking-[0.14em] text-white/82 transition hover:border-[var(--accent-soft)] hover:text-white"
              >
                Fechar
              </button>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-[#4d2f7a] bg-[rgba(15,7,29,0.92)] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <Image
                src={previewQuest.preview}
                alt={`Preview ampliado do projeto ${previewQuest.label}`}
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
