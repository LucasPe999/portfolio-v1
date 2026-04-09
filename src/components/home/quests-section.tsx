"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const questsBackground = "/quests-background.png";
const questsIcon = "/icons/map.svg";
const arrowRight =
  "https://www.figma.com/api/mcp/asset/b84950e5-dfb8-4dc2-a693-76494b7e71e3";
const clickmaxPreviewImage =
  "https://www.figma.com/api/mcp/asset/0cd7f8fc-71af-4dae-ad01-05aa6d579ff8";

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
    platformUrl: "https://clickmax.io/",
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

export function QuestsSection() {
  const [activeQuestId, setActiveQuestId] = useState(questTabs[0].id);
  const [activeProjectTab, setActiveProjectTab] = useState("overview");
  const [previewQuest, setPreviewQuest] = useState<QuestTab | null>(null);
  const activeQuestIndex = questTabs.findIndex((quest) => quest.id === activeQuestId);
  const activeQuest = questTabs[activeQuestIndex] ?? questTabs[0];
  const furionQuest = questTabs[0];
  const clickmaxQuest = questTabs.find((quest) => quest.id === "clickmax") ?? questTabs[0];

  useEffect(() => {
    const syncQuestFromHash = () => {
      if (window.location.hash === "#quests-clickmax") {
        setActiveQuestId("clickmax");
        setActiveProjectTab("analytics");
      } else if (window.location.hash === "#quests" || window.location.hash === "#quests-furion") {
        setActiveQuestId("furion");
        setActiveProjectTab("overview");
      }
    };

    syncQuestFromHash();
    window.addEventListener("hashchange", syncQuestFromHash);

    return () => window.removeEventListener("hashchange", syncQuestFromHash);
  }, []);

  useEffect(() => {
    if (activeProjectTab === "overview") {
      setActiveQuestId("furion");
    } else if (activeProjectTab === "analytics") {
      setActiveQuestId("clickmax");
    }
  }, [activeProjectTab]);

  return (
    <>
      <div id="quests-clickmax" className="relative -top-16" aria-hidden="true" />
      <section
        id="quests"
        className="relative overflow-hidden scroll-mt-16"
        style={{
          ["--accent-soft" as string]: "#ffffff",
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

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-[1920px] flex-col items-center px-4 pb-14 pt-0 sm:px-6 lg:px-[94px] lg:pb-20">
        <div className="flex items-center gap-4 rounded-[12px] px-4 py-4 mt-6">
          <Image src={questsIcon} alt="" width={32} height={32} className="h-8 w-8" />
          <h2 className="font-[family:var(--font-display)] text-[32px] uppercase tracking-[0.06em] text-[var(--accent-soft)]">
            Quests
          </h2>
          <Image src={questsIcon} alt="" width={32} height={32} className="h-8 w-8 scale-x-[-1]" />
        </div>

        <article className="relative mt-6 w-full max-w-[1458px]">
          <div className="lg:hidden">
            <Tabs
              defaultValue="overview"
              value={activeProjectTab}
              onValueChange={setActiveProjectTab}
              className="w-full"
            >
              <TabsList className="mb-4 inline-flex rounded-[14px] border border-white/10 bg-white/8 p-1 shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-md">
                <TabsTrigger
                  value="overview"
                  className="rounded-[10px] px-4 py-2 text-[14px] text-white/68 transition data-[state=active]:bg-white data-[state=active]:text-black"
                >
                  Furion
                </TabsTrigger>
                <TabsTrigger
                  value="analytics"
                  className="rounded-[10px] px-4 py-2 text-[14px] text-white/68 transition data-[state=active]:bg-white data-[state=active]:text-black"
                >
                  Clickmax
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <MobileQuestCard
                  quest={furionQuest}
                  currentIndex={0}
                  onOpenPreview={setPreviewQuest}
                />
              </TabsContent>

              <TabsContent value="analytics">
                <MobileQuestCard
                  quest={clickmaxQuest}
                  currentIndex={2}
                  onOpenPreview={setPreviewQuest}
                />
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-14 hidden lg:block">
            <Tabs
              defaultValue="overview"
              value={activeProjectTab}
              onValueChange={setActiveProjectTab}
              className="mx-auto w-full max-w-[1458px]"
            >
              <TabsList className="inline-flex rounded-[14px] border border-white/10 bg-white/8 p-1 shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-md">
                <TabsTrigger
                  value="overview"
                  className="rounded-[10px] px-4 py-2 text-[15px] text-white/68 transition data-[state=active]:bg-white data-[state=active]:text-black"
                >
                  Furion
                </TabsTrigger>
                <TabsTrigger
                  value="analytics"
                  className="rounded-[10px] px-4 py-2 text-[15px] text-white/68 transition data-[state=active]:bg-white data-[state=active]:text-black"
                >
                  Clickmax
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-4">
                <Card className="rounded-[18px] border border-white/12 bg-white/6 text-white shadow-none backdrop-blur-md">
                  <CardContent className="grid gap-6 p-6 lg:grid-cols-[430px_minmax(0,1fr)]">
                    <button
                      type="button"
                      onClick={() => setPreviewQuest(furionQuest)}
                      className="group relative min-h-[540px] overflow-hidden rounded-[16px] border border-white/10 text-left"
                    >
                      <Image
                        src={furionQuest.preview}
                        alt={`Preview do projeto ${furionQuest.label}`}
                        fill
                        priority
                        className="object-cover object-center transition duration-300 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.2))]" />
                      <div className="absolute right-4 top-4 rounded-full border border-white/12 bg-black/35 px-3 py-1 text-[10px] tracking-[0.16em] text-white/80 backdrop-blur-md">
                        AMPLIAR
                      </div>
                    </button>

                    <div className="rounded-[16px] border border-white/10 bg-[rgba(15,7,29,0.72)] p-6">
                      <CardHeader className="gap-4 p-0">
                        <div className="flex items-start justify-between gap-6">
                          <div className="max-w-[68%]">
                            <CardTitle className="font-[family:var(--font-display)] text-[clamp(22px,2.35vw,34px)] uppercase leading-none tracking-[0.01em] text-white">
                              {furionQuest.title}
                            </CardTitle>
                            <CardDescription className="mt-2 text-[clamp(10px,0.8vw,12px)] leading-[1.35] text-white/72">
                              {furionQuest.description}
                            </CardDescription>
                          </div>

                          {furionQuest.platformUrl ? (
                            <a
                              href={furionQuest.platformUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="relative inline-flex h-10 shrink-0 items-center justify-center rounded-[12px] border border-white/14 bg-white/[0.04] px-6 text-[13px] font-bold uppercase leading-none tracking-[0.02em] text-white transition hover:border-white/30 hover:bg-white/[0.07]"
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
                          ) : null}
                        </div>
                      </CardHeader>

                      <CardContent className="mt-6 flex flex-col gap-6 p-0">
                        <section className="grid gap-6 lg:grid-cols-[210px_minmax(0,1fr)]">
                          <div className="space-y-6">
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-[12px] leading-none">
                                <span className="text-white">COMPLEXIDADE</span>
                                <span className="text-white/72">MUITO ALTA</span>
                              </div>
                              <div className="h-[6px] w-full rounded-full bg-white/10">
                                <div className="h-full w-full rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.28)]" />
                              </div>
                            </div>

                            <dl className="space-y-1 text-[12px] leading-[1.24]">
                              <div className="flex items-center justify-between gap-4">
                                <dt className="text-white">ANO</dt>
                                <dd className="text-white/72">{furionQuest.year}</dd>
                              </div>
                              <div className="flex items-center justify-between gap-4">
                                <dt className="text-white">CLIENTE</dt>
                                <dd className="text-white/72">{furionQuest.client}</dd>
                              </div>
                              <div className="flex items-center justify-between gap-4">
                                <dt className="text-white">DESENVOLVIMENTO</dt>
                                <dd className="text-white/72">{furionQuest.duration}</dd>
                              </div>
                            </dl>
                          </div>

                          <div className="space-y-4">
                            <InfoDivider title="CONTEXTO" />
                            <p className="text-[12px] leading-[1.35] text-white/72">
                              {furionQuest.context}
                            </p>
                          </div>
                        </section>

                        <section className="space-y-3">
                          <h3 className="font-[family:var(--font-display)] text-[16px] text-white">
                            Prólogo - Início do desenvolvimento
                          </h3>
                          <div className="space-y-4 text-[12px] leading-[1.35] text-white/72">
                            {furionQuest.intro.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                            <ul className="list-disc space-y-0.5 pl-4">
                              {introBullets.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </section>

                        <section className="space-y-3">
                          <h3 className="font-[family:var(--font-display)] text-[16px] text-white">
                            Boss - Escalabilidade do projeto
                          </h3>
                          <div className="space-y-4 text-[12px] leading-[1.35] text-white/72">
                            <p>
                              Após validar todos os pontos necessários, foi realizada a
                              escalabilidade do projeto, focando em desenvolver todas as
                              telas necessárias, sempre focando em consistência visual e
                              boas práticas de design, além de focar muito em entregar para
                              o time de desenvolvimento um projeto organizado.
                            </p>
                            <ul className="list-disc space-y-0.5 pl-4">
                              {furionQuest.scale.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </section>
                      </CardContent>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="mt-4">
                <Card className="overflow-hidden rounded-[18px] border border-white/12 bg-white/6 text-white shadow-none backdrop-blur-md">
                  <CardContent className="grid min-h-[686px] gap-6 p-6 lg:grid-cols-[430px_minmax(0,1fr)]">
                    <div className="relative min-h-[540px] overflow-hidden rounded-[16px] border border-white/10">
                      <Image
                        src={clickmaxPreviewImage}
                        alt="Preview do projeto Clickmax"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="h-full rounded-[16px] border border-white/10 bg-[rgba(15,7,29,0.72)] p-6">
                      <CardHeader className="gap-4 p-0">
                        <div className="flex items-start justify-between gap-6">
                          <div className="max-w-[68%]">
                            <CardTitle className="font-[family:var(--font-display)] text-[clamp(22px,2.35vw,34px)] uppercase leading-none tracking-[0.01em] text-white">
                              CLICKMAX EQUALIZATION
                            </CardTitle>
                            <CardDescription className="mt-2 text-[clamp(10px,0.8vw,12px)] leading-[1.35] text-white/72">
                              Plataforma voltada para gestão e otimização de marketing digital,
                              centralizando anúncios, produtos e métricas em um único ambiente. O
                              produto foi pensado para facilitar a operação de campanhas, oferecendo
                              controle, leitura clara de dados e eficiência na tomada de decisão.
                            </CardDescription>
                          </div>
                          <a
                            href="https://clickmax.io/"
                            target="_blank"
                            rel="noreferrer"
                            className="relative inline-flex h-10 shrink-0 items-center justify-center rounded-[12px] border border-white/14 bg-white/[0.04] px-6 text-[13px] font-bold uppercase leading-none tracking-[0.02em] text-white transition hover:border-white/30 hover:bg-white/[0.07]"
                          >
                            <span className="block text-center">ACESSAR PLATAFORMA</span>
                            <Image
                              src={arrowRight}
                              alt=""
                              width={16}
                              height={16}
                              className="absolute right-5 h-4 w-4"
                            />
                          </a>
                        </div>
                      </CardHeader>

                      <CardContent className="mt-4 flex flex-col gap-6 p-0">
                        <section className="grid gap-6 lg:grid-cols-[210px_minmax(0,1fr)]">
                          <div className="w-[210px] shrink-0 space-y-7">
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-[12px]">
                                <span className="text-white">COMPLEXIDADE</span>
                                <span className="text-white/72">MUITO ALTA</span>
                              </div>
                              <div className="h-[6px] w-[210px] rounded-[500px] bg-white shadow-[0_0_18px_rgba(255,255,255,0.28)]" />
                            </div>

                            <dl className="space-y-1 text-[12px]">
                              <div className="flex items-center justify-between">
                                <dt className="text-white">ANO</dt>
                                <dd className="text-white/72">2025</dd>
                              </div>
                              <div className="flex items-center justify-between">
                                <dt className="text-white">CLIENTE</dt>
                                <dd className="text-white/72">BILHON</dd>
                              </div>
                              <div className="flex items-center justify-between">
                                <dt className="text-white">DESENVOLVIMENTO</dt>
                                <dd className="text-white/72">3 MESES</dd>
                              </div>
                            </dl>
                          </div>

                          <div className="min-w-0 flex-1 space-y-2">
                            <div className="space-y-1">
                              <p className="text-[12px] text-white">CONTEXTO</p>
                              <div className="h-px w-full bg-white/28" />
                            </div>
                            <p className="text-[12px] leading-[1.35] text-white/72">
                              A proposta do projeto era finalizar as features que estavam
                              faltando em 3 meses para que a plataforma estivesse pronta para
                              ser lançada, Atuei com foco nas áreas de Funnel Builder, Workflow
                              Builder, Área de Membros, Marketplace e Checkout diretamente com o
                              time de designers do cliente, servindo como um momento de desafio e
                              aprendizado diário para que todo o conteúdo proposto fosse entregue.
                            </p>
                          </div>
                        </section>

                        <section className="space-y-4">
                          <h3 className="font-[family:var(--font-display)] text-[16px] text-white">
                            Prólogo - Ambientação
                          </h3>
                          <div className="space-y-4 text-[12px] leading-[1.24] text-white/72">
                            <p>
                              Por ser um projeto rápido, foi necessário me ambientar rapidamente
                              ao processo de desenvolvimento do cliente, além do entendimento
                              completo da regra de negócio.
                            </p>
                            <p>
                              Foi necessário atuar em mais de um projeto ao mesmo tempo para que
                              o time de desenvolvedores pudesse iniciar o processo de produção no
                              código, para isso foi definido weeklies para alinhamento das
                              demandas e atualizações diárias do que era feito.
                            </p>
                            <p>
                              Sendo assim, foquei em algumas frentes para que houvesse uma boa
                              evolução e que ninguém ficasse travado.
                            </p>
                            <ul className="list-disc space-y-0.5 pl-4">
                              <li>Estudo aplicado na regra de negócio dos projetos e benchmarking de propostas similares.</li>
                              <li>Exploração diária junto ao time do cliente para melhor alinhamento.</li>
                              <li>Apresentação de propostas de fluxos para que nada passasse sem aprovação.</li>
                              <li>Clareza nos fluxos para o time de desenvolvimento.</li>
                            </ul>
                          </div>
                        </section>

                        <section className="space-y-4">
                          <h3 className="font-[family:var(--font-display)] text-[16px] text-white">
                            Boss - Entregas e novas features
                          </h3>
                          <div className="space-y-4 text-[12px] leading-[1.24] text-white/72">
                            <p>
                              O desenvolvimento foi totalmente focado em um roadmap criado, sendo
                              assim, todas as entregas procuravam seguir o caminho proposto para
                              que o time de desenvolvimento seguisse o plano inicialmente
                              planejado, juntamente com isso, foram criadas novas features que
                              eram atacadas simultaneamente.
                            </p>
                            <p>
                              O modelo de trabalho foi o de atacar as frentes planejadas no
                              roadmap para o desenvolvimento e criar as novas features para
                              apresentação junto ao cliente.
                            </p>
                            <p>
                              No final, foram entregues todas as tarefas escopadas no início,
                              além das novas features que foram aparecendo durante o processo.
                            </p>
                            <ul className="list-disc space-y-0.5 pl-4">
                              <li>Fluxo completo do Funnel builder.</li>
                              <li>Fluxo completo e configurações do Workflow builder.</li>
                              <li>Área de membros com a opção de personalização e modelo de visualização finalizada.</li>
                              <li>Marketplace e features de checkout completas.</li>
                            </ul>
                          </div>
                        </section>
                      </CardContent>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

            </Tabs>
          </div>
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
    </>
  );
}
