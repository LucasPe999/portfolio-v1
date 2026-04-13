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
const ecomPreviewImage = "/ecomtab2.png";

type QuestTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  year: string;
  client: string;
  duration: string;
  complexity: string;
  preview: string;
  context: string;
  introTitle: string;
  intro: string[];
  scaleTitle: string;
  scaleLead?: string;
  scale: string[];
  platformUrl?: string;
};

const questTabs: QuestTab[] = [
  {
    id: "furion",
    label: "FURION",
    title: "THE HUNT OF FURION",
    description:
      "Plataforma de inteligência artificial focada em automação e criação de conteúdos para marketing digital, oferecendo ferramentas para geração de textos, roteiros, anúncios e materiais estratégicos com velocidade e consistência.",
    year: "2023 - 2025",
    client: "BILHON",
    duration: "6 MESES",
    complexity: "MUITO ALTA",
    preview: "https://www.figma.com/api/mcp/asset/0e802fba-679f-4bb9-87dc-ef23cc9b8d80",
    context:
      "Apesar do forte potencial tecnológico, a plataforma enfrentava desafios de experiência do usuário por conta da complexidade das funcionalidades e da necessidade de atender perfis muito diferentes, do iniciante ao avançado. O projeto foi estruturado para reorganizar a experiência, reduzir fricções e transformar o produto em uma ferramenta mais clara, escalável e orientada à ação.",
    introTitle: "Prólogo - Início do desenvolvimento",
    intro: [
      "Foram mapeadas as principais telas e fluxos a serem desenvolvidos. A primeira frente foi a criação de experimentos e a organização de projetos, preparando uma base sólida para o restante da plataforma.",
      "Depois do alinhamento visual, a estética final foi consolidada e o desenvolvimento do board passou a ser a etapa central do projeto, exigindo mais profundidade estrutural.",
    ],
    scaleTitle: "Boss - Escalabilidade do projeto",
    scaleLead:
      "Após validar os pontos mais críticos, o projeto avançou para uma fase de expansão, sempre com foco em consistência visual, boas práticas e organização para o time de desenvolvimento.",
    scale: [
      "Versões dark e light bem estruturadas.",
      "Responsividade entre diferentes formatos.",
      "Versão mobile pensada desde a base.",
      "Design system robusto e organizado.",
    ],
    platformUrl: "https://app.furion.ai/auth/login",
  },
  {
    id: "clickmax",
    label: "CLICKMAX",
    title: "CLICKMAX EQUALIZATION",
    description:
      "Plataforma voltada para gestão e otimização de marketing digital, centralizando anúncios, produtos e métricas em um único ambiente. O produto foi pensado para facilitar a operação de campanhas com leitura clara de dados e eficiência na tomada de decisão.",
    year: "2025",
    client: "BILHON",
    duration: "3 MESES",
    complexity: "MUITO ALTA",
    preview: clickmaxPreviewImage,
    context:
      "A proposta do projeto era finalizar as features restantes em três meses para preparar o lançamento da plataforma. Atuei com foco em Funnel Builder, Workflow Builder, Área de Membros, Marketplace e Checkout, em parceria direta com o time de design do cliente.",
    introTitle: "Prólogo - Ambientação",
    intro: [
      "Por ser um projeto com prazo curto, foi necessário mergulhar rapidamente no processo do cliente e na regra de negócio, conciliando diferentes frentes ao mesmo tempo.",
      "Weeklies, alinhamentos frequentes e acompanhamento diário foram essenciais para garantir clareza entre design, escopo e produção.",
    ],
    scaleTitle: "Boss - Entregas e novas features",
    scaleLead:
      "O desenvolvimento seguiu um roadmap bem definido, enquanto novas features eram construídas em paralelo para validação e apresentação junto ao cliente.",
    scale: [
      "Fluxo completo do Funnel Builder.",
      "Fluxo completo e configurações do Workflow Builder.",
      "Área de membros com personalização e visualização final.",
      "Marketplace e features de checkout completas.",
    ],
    platformUrl: "https://clickmax.io/",
  },
  {
    id: "ecom",
    label: "ECOM",
    title: "THE ECOM ANOMALY",
    description:
      "Plataforma focada em simular e gerir a migração para o mercado livre de energia, contando com um simulador completo em tempo real e uma plataforma de gestão robusta para que agentes possam atender clientes e acompanhar seus negócios sem complexidade, tudo no modelo white label.",
    year: "2023 - 2025",
    client: "ECOM",
    duration: "ESCOPO ABERTO",
    complexity: "ALTA",
    preview: ecomPreviewImage,
    context:
      "O projeto nasceu com a proposta de ser um simulador de energia clean e rápido, permitindo que o cliente entendesse quanto poderia economizar a partir da própria conta de luz. Depois, evoluiu para contratação e, em seguida, para um modelo white label que permite a outras empresas terem seu próprio sistema de gestão de migração para o mercado livre de energia.",
    introTitle: "Prólogo - O simulador",
    intro: [
      "A ideia inicial era simples: um simulador que lesse a fatura da conta de luz do cliente e realizasse uma simulação em tempo real. O projeto nasceu com uma UI bastante clean e uma funcionalidade que rapidamente fez com que evoluíssemos a plataforma.",
      "O primeiro passo após isso foi o modelo white label, com todo um design system montado para que, em minutos, fosse possível criar uma interface totalmente nova para que outras empresas aderissem ao projeto.",
    ],
    scaleTitle: "Boss - A Plataforma de gestão",
    scaleLead:
      "Após a entrega do simulador, partimos para a segunda etapa: desenvolver a plataforma de gestão para que agentes realizassem o atendimento a clientes, finalizassem contratos e acompanhassem suas vendas de maneira fácil e rápida. A partir daí surgiram novos desdobramentos do ecossistema, todos mantendo a identidade central do simulador.",
    scale: [
      "Projeto todo preparado para ser white label.",
      "Plataforma de gestão criada e prototipada para testes de usabilidade.",
      "Sistema de variantes e tokens no Figma para alterar as white labels em minutos.",
      "Responsividade desde ultra wide até mobile.",
    ],
    platformUrl: "https://ecom-energia.economianafatura.com.br/jornada/dados/inicio",
  },
  {
    id: "ilotto",
    label: "ILOTTO",
    title: "ILOTTO EXPERIENCE",
    description:
      "Plataforma de sorteios online em modelo white label, com soluções web, mobile e painel de gestão integrados. O produto permite criação, personalização e operação completa de campanhas, oferecendo controle, escalabilidade e uma experiência consistente.",
    year: "2024 - 2025",
    client: "ILOTTO",
    duration: "ESCOPO ABERTO",
    complexity: "MUITO ALTA",
    preview: "/ilottoback.png",
    context:
      "Projeto criado do zero para o cliente, desde o desenvolvimento da regra de negócio e análise de viabilidade legal até a plataforma de gestão, responsividade e criação contínua de novas features.",
    introTitle: "Prólogo - O início da jornada",
    intro: [
      "O grande desafio foi definir o caminho do produto enquanto a própria empresa estava sendo estruturada. Muitas decisões ainda estavam em aberto e exigiam construção conjunta.",
      "A plataforma de gestão veio primeiro, para que o time de desenvolvimento pudesse aplicar a lógica principal antes da entrada do site. Depois disso, as interfaces web e mobile foram desenhadas com foco em agilidade e clareza.",
    ],
    scaleTitle: "Boss - Desafio multicolorido",
    scaleLead:
      "Depois da validação inicial, o produto evoluiu com novas features, como raspadinhas, feed de ganhadores, premiações instantâneas e a camada white label, exigindo um sistema visual mais flexível.",
    scale: [
      "Tokens de variantes de cores bem definidos.",
      "Adequação rápida das versões white label para apresentação.",
      "Novas features aplicadas com foco em responsividade.",
      "Escalabilidade visual para crescimento do produto.",
    ],
    platformUrl: "https://ilotto.com.br/",
  },
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
          ) : null}

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
              <span className="text-white/76">{quest.complexity}</span>
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
              {quest.introTitle}
            </p>
            <div className="space-y-3 text-[14px] leading-6 text-white/72">
              {quest.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-3 rounded-[22px] border border-[#4d2f7a] bg-[rgba(19,10,34,0.34)] p-4">
            <p className="font-[family:var(--font-display)] text-[17px] text-[var(--accent-soft)]">
              {quest.scaleTitle}
            </p>
            {quest.scaleLead ? (
              <p className="text-[14px] leading-6 text-white/72">{quest.scaleLead}</p>
            ) : null}
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

function DesktopQuestCard({
  quest,
  onOpenPreview,
}: {
  quest: QuestTab;
  onOpenPreview: (quest: QuestTab) => void;
}) {
  return (
    <Card className="overflow-hidden rounded-[18px] border border-white/12 bg-white/6 text-white shadow-none backdrop-blur-md">
      <CardContent className="grid min-h-[686px] gap-6 p-6 lg:grid-cols-[430px_minmax(0,1fr)]">
        <button
          type="button"
          onClick={() => onOpenPreview(quest)}
          className="group relative min-h-[540px] overflow-hidden rounded-[16px] border border-white/10 text-left"
        >
          <Image
            src={quest.preview}
            alt={`Preview do projeto ${quest.label}`}
            fill
            className="object-cover object-center transition duration-300 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.2))]" />
          <div className="absolute right-4 top-4 rounded-full border border-white/12 bg-black/35 px-3 py-1 text-[10px] tracking-[0.16em] text-white/80 backdrop-blur-md">
            AMPLIAR
          </div>
        </button>

        <div className="h-full rounded-[16px] border border-white/10 bg-[rgba(15,7,29,0.72)] p-6">
          <CardHeader className="gap-4 p-0">
            <div className="flex items-start justify-between gap-6">
              <div className="max-w-[68%]">
                <CardTitle className="font-[family:var(--font-display)] text-[clamp(22px,2.35vw,34px)] uppercase leading-none tracking-[0.01em] text-white">
                  {quest.title}
                </CardTitle>
                <CardDescription className="mt-2 text-[clamp(10px,0.8vw,12px)] leading-[1.35] text-white/72">
                  {quest.description}
                </CardDescription>
              </div>
              {quest.platformUrl ? (
                <a
                  href={quest.platformUrl}
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
              ) : null}
            </div>
          </CardHeader>

          <CardContent className="mt-4 flex flex-col gap-6 p-0">
            <section className="grid gap-6 lg:grid-cols-[210px_minmax(0,1fr)]">
              <div className="w-[210px] shrink-0 space-y-7">
                <div className="space-y-0">
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="text-white">COMPLEXIDADE</span>
                    <span className="text-white/72">{quest.complexity}</span>
                  </div>
                  <div className="h-[6px] w-[210px] rounded-[500px] bg-white shadow-[0_0_18px_rgba(255,255,255,0.28)]" />
                </div>

                <dl className="space-y-0 text-[12px]">
                  <div className="flex items-center justify-between">
                    <dt className="text-white">ANO</dt>
                    <dd className="text-white/72">{quest.year}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-white">CLIENTE</dt>
                    <dd className="text-white/72">{quest.client}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-white">DESENVOLVIMENTO</dt>
                    <dd className="text-white/72">{quest.duration}</dd>
                  </div>
                </dl>
              </div>

              <div className="min-w-0 flex-1 space-y-2">
                <div className="space-y-1">
                  <p className="text-[12px] text-white">CONTEXTO</p>
                  <div className="h-px w-full bg-white/28" />
                </div>
                <p className="text-[12px] leading-[1.35] text-white/72">{quest.context}</p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="font-[family:var(--font-display)] text-[16px] text-white">
                {quest.introTitle}
              </h3>
              <div className="space-y-4 text-[12px] leading-[1.24] text-white/72">
                {quest.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="font-[family:var(--font-display)] text-[16px] text-white">
                {quest.scaleTitle}
              </h3>
              <div className="space-y-4 text-[12px] leading-[1.24] text-white/72">
                {quest.scaleLead ? <p>{quest.scaleLead}</p> : null}
                <ul className="list-disc space-y-0.5 pl-4">
                  {quest.scale.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          </CardContent>
        </div>
      </CardContent>
    </Card>
  );
}

export function QuestsSection() {
  const [activeProjectTab, setActiveProjectTab] = useState("overview");
  const [previewQuest, setPreviewQuest] = useState<QuestTab | null>(null);

  const furionQuest = questTabs.find((quest) => quest.id === "furion") ?? questTabs[0];
  const clickmaxQuest = questTabs.find((quest) => quest.id === "clickmax") ?? questTabs[0];
  const ecomQuest = questTabs.find((quest) => quest.id === "ecom") ?? questTabs[0];
  const ilottoQuest = questTabs.find((quest) => quest.id === "ilotto") ?? questTabs[0];

  useEffect(() => {
    const syncQuestFromHash = () => {
      if (window.location.hash === "#quests-clickmax") {
        setActiveProjectTab("analytics");
      } else if (window.location.hash === "#quests-ecom") {
        setActiveProjectTab("ecom");
      } else if (window.location.hash === "#quests-ilotto") {
        setActiveProjectTab("operations");
      } else {
        setActiveProjectTab("overview");
      }
    };

    syncQuestFromHash();
    window.addEventListener("hashchange", syncQuestFromHash);

    return () => window.removeEventListener("hashchange", syncQuestFromHash);
  }, []);

  return (
    <>
      <div id="quests-clickmax" className="relative -top-16" aria-hidden="true" />
      <div id="quests-ecom" className="relative -top-16" aria-hidden="true" />
      <div id="quests-ilotto" className="relative -top-16" aria-hidden="true" />

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
          <div className="mt-6 flex items-center gap-4 rounded-[12px] px-4 py-4">
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
                  <TabsTrigger value="overview" className="rounded-[10px] px-4 py-2 text-[14px] text-white/68 transition data-[state=active]:bg-white data-[state=active]:text-black">Furion</TabsTrigger>
                  <TabsTrigger value="analytics" className="rounded-[10px] px-4 py-2 text-[14px] text-white/68 transition data-[state=active]:bg-white data-[state=active]:text-black">Clickmax</TabsTrigger>
                  <TabsTrigger value="ecom" className="rounded-[10px] px-4 py-2 text-[14px] text-white/68 transition data-[state=active]:bg-white data-[state=active]:text-black">Ecom</TabsTrigger>
                  <TabsTrigger value="operations" className="rounded-[10px] px-4 py-2 text-[14px] text-white/68 transition data-[state=active]:bg-white data-[state=active]:text-black">Ilotto</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <MobileQuestCard quest={furionQuest} currentIndex={0} onOpenPreview={setPreviewQuest} />
                </TabsContent>
                <TabsContent value="analytics">
                  <MobileQuestCard quest={clickmaxQuest} currentIndex={1} onOpenPreview={setPreviewQuest} />
                </TabsContent>
                <TabsContent value="ecom">
                  <MobileQuestCard quest={ecomQuest} currentIndex={2} onOpenPreview={setPreviewQuest} />
                </TabsContent>
                <TabsContent value="operations">
                  <MobileQuestCard quest={ilottoQuest} currentIndex={3} onOpenPreview={setPreviewQuest} />
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
                  <TabsTrigger value="overview" className="rounded-[10px] px-4 py-2 text-[15px] text-white/68 transition data-[state=active]:bg-white data-[state=active]:text-black">Furion</TabsTrigger>
                  <TabsTrigger value="analytics" className="rounded-[10px] px-4 py-2 text-[15px] text-white/68 transition data-[state=active]:bg-white data-[state=active]:text-black">Clickmax</TabsTrigger>
                  <TabsTrigger value="ecom" className="rounded-[10px] px-4 py-2 text-[15px] text-white/68 transition data-[state=active]:bg-white data-[state=active]:text-black">Ecom</TabsTrigger>
                  <TabsTrigger value="operations" className="rounded-[10px] px-4 py-2 text-[15px] text-white/68 transition data-[state=active]:bg-white data-[state=active]:text-black">Ilotto</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-4">
                  <DesktopQuestCard quest={furionQuest} onOpenPreview={setPreviewQuest} />
                </TabsContent>
                <TabsContent value="analytics" className="mt-4">
                  <DesktopQuestCard quest={clickmaxQuest} onOpenPreview={setPreviewQuest} />
                </TabsContent>
                <TabsContent value="ecom" className="mt-4">
                  <DesktopQuestCard quest={ecomQuest} onOpenPreview={setPreviewQuest} />
                </TabsContent>
                <TabsContent value="operations" className="mt-4">
                  <DesktopQuestCard quest={ilottoQuest} onOpenPreview={setPreviewQuest} />
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
