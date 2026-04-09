"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { SkillConnection } from "@/components/map/skill-connection";
import { SkillNode } from "@/components/map/skill-node";
import { SkillPanel } from "@/components/map/skill-panel";

const mapBackground = "/hero-map.png";

type HeroNode = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  glow: string;
  positionClass: string;
  panel: {
    eyebrow: string;
    summary: string;
    overview: string;
    panelBackground?: string;
    progressLabel: string;
    progressValue: string;
    progressFill: string;
    competencies: string[];
    project?: {
      title: string;
      description: string;
      image: string;
      imageClassName?: string;
      hideButton?: boolean;
      buttonHref?: string;
    };
  };
};

const heroNodes: HeroNode[] = [
  {
    id: "ui-design",
    title: "UI DESIGN",
    subtitle: "Interfaces - Visual - Detalhes",
    icon: "/icons/ui-design.svg",
    color: "#6bd96b",
    glow: "rgba(137,255,137,0.55)",
    positionClass: "left-[700px] top-[365px]",
    panel: {
      eyebrow: "HABILIDADE",
      summary: "Interfaces que comunicam, conectam e convertem",
      overview:
        "Foco principal na criação de interfaces digitais intuitivas, visualmente impactantes e alinhadas aos objetivos do cliente. Cada detalhe é pensado para melhorar a experiência do usuário.",
      panelBackground: "rgba(0, 18, 0, 0.9)",
      progressLabel: "AVANÇADO",
      progressValue: "XP 4.750/6.000",
      progressFill: "78%",
      competencies: [
        "Design de interfaces",
        "Hierarquia visual",
        "Design responsivo",
        "Microinteracoes",
      ],
      project: {
        title: "FURION",
        description:
          "Ferramenta com inteligência artificial focada em marketing digital de alta performance, projetada para automatizar e otimizar a criação de anúncios online, vendas e estratégias de conteúdo.",
        image: "https://www.figma.com/api/mcp/asset/0c29fd76-da06-4b9e-adde-a2dee8688dee",
        buttonHref: "#quests",
      },
    },
  },
  {
    id: "ux-thinking",
    title: "UX THINKING",
    subtitle: "Pesquisa - Fluxos - Jornadas",
    icon: "/icons/ux-thinking.svg",
    color: "#e2d118",
    glow: "rgba(226,209,24,0.5)",
    positionClass: "left-[732px] top-[618px]",
    panel: {
      eyebrow: "HABILIDADE",
      summary: "Pesquisas, dados e análises para entender usuários.",
      overview:
        "Realização de projetos utilizando testes de iteração e explorações profundas para entender quais opções são necessárias para criar soluções que realmente fazem a diferença.",
      panelBackground: "rgba(21, 19, 0, 0.8)",
      progressLabel: "AVANÇADO",
      progressValue: "XP 3.882/6.000",
      progressFill: "65%",
      competencies: [
        "Mapeamento de jornadas",
        "Testes de usabilidade",
        "Design centrado no usuario",
        "Testes de iteracao",
      ],
      project: {
        title: "KOLTO",
        description:
          "Plataforma de sorteios online com bilhetes instantâneos, raspadinhas e ferramentas de análise para cada sorteio.",
        image: "https://www.figma.com/api/mcp/asset/bf9edb8e-fe8c-4e7d-a735-a39f0c07aa22",
        imageClassName: "scale-[1.7]",
        hideButton: true,
      },
    },
  },
  {
    id: "design-system",
    title: "DESIGN SYSTEM",
    subtitle: "Escalabilidade - Consistência",
    icon: "/icons/design-system.svg",
    color: "#9725c4",
    glow: "rgba(151,37,196,0.5)",
    positionClass: "left-[896px] top-[265px]",
    panel: {
      eyebrow: "HABILIDADE",
      summary: "Capacidade de escalar projetos com consistência",
      overview:
        "Crio sistemas de design que padronizam componentes, aceleram entregas e garantem consistência visual e funcional entre times e produtos.",
      panelBackground: "#0b000f",
      progressLabel: "AVANÇADO",
      progressValue: "XP 5.587/6.000",
      progressFill: "93%",
      competencies: [
        "Tokens e variáveis",
        "Componentização",
        "Documentação",
        "Escalabilidade visual",
      ],
    },
  },
  {
    id: "produto",
    title: "PRODUTO",
    subtitle: "Estratégia - Impacto",
    icon: "/icons/produto.svg",
    color: "#d9901b",
    glow: "rgba(217,144,27,0.54)",
    positionClass: "left-[1178px] top-[198px]",
    panel: {
      eyebrow: "HABILIDADE",
      summary: "Estratégias sob medida para gerar impacto",
      overview:
        "Cada projeto é pensado para transformar ideias em produtos digitais valiosos, aliando design, negócios e tecnologia em cada decisão.",
      panelBackground: "#0f0900",
      progressLabel: "AVANÇADO",
      progressValue: "XP 5.787/6.000",
      progressFill: "96%",
      competencies: [
        "Descoberta de produto",
        "Métricas",
        "Roadmap de features",
        "Priorização",
      ],
      project: {
        title: "CLICKMAX",
        description:
          "Ferramenta completa para criar páginas, funis, proteger links, gerenciar leads e enviar mensagens personalizadas.",
        image: "https://www.figma.com/api/mcp/asset/0c29fd76-da06-4b9e-adde-a2dee8688dee",
        buttonHref: "#quests-clickmax",
      },
    },
  },
  {
    id: "prototipagem",
    title: "PROTOTIPAGEM",
    subtitle: "Ideias - Validação",
    icon: "/icons/prototipagem.svg",
    color: "#0f9aba",
    glow: "rgba(15,154,186,0.5)",
    positionClass: "left-[1454px] top-[482px]",
    panel: {
      eyebrow: "HABILIDADE",
      summary: "Conceitos transformados em protótipos",
      overview:
        "Transformo ideias em protótipos interativos para validar fluxos, testar conceitos e comunicar soluções com clareza antes do desenvolvimento final.",
      panelBackground: "#001115",
      progressLabel: "AVANÇADO",
      progressValue: "XP 4.921/6.000",
      progressFill: "82%",
      competencies: [
        "Wireframes interativos",
        "Microinteracoes",
        "Navegação fluida",
        "Validação rápida",
      ],
    },
  },
  {
    id: "ai-design",
    title: "AI DESIGN",
    subtitle: "Estrutura - Prompts - Código",
    icon: "/icons/ai-design.svg",
    color: "#61e1fe",
    glow: "rgba(97,225,254,0.52)",
    positionClass: "left-[1106px] top-[680px]",
    panel: {
      eyebrow: "HABILIDADE",
      summary: "IA para criação de design-to-code",
      overview:
        "Uso de inteligência artificial para acelerar o fluxo de design-to-code, por meio do MCP do Figma, gerando interfaces, componentes e iterações em segundos com qualidade.",
      panelBackground: "#001317",
      progressLabel: "AVANÇADO",
      progressValue: "XP 3.741/6.000",
      progressFill: "62%",
      competencies: [
        "Prompt engineering",
        "Figma MCP",
        "VS Code",
        "Automação de UI",
      ],
    },
  },
];

const heroConnections = [
  { className: "left-[816px] top-[396px] w-[226px] rotate-[-11deg]", color: "rgba(107,217,107,0.38)" },
  { className: "left-[1018px] top-[270px] w-[180px] rotate-[-26deg]", color: "rgba(151,37,196,0.38)" },
  { className: "left-[908px] top-[570px] w-[130px] rotate-[63deg]", color: "rgba(226,209,24,0.34)" },
  { className: "left-[1106px] top-[612px] w-[124px]", color: "rgba(97,225,254,0.32)" },
  { className: "left-[1262px] top-[302px] w-[150px] rotate-[116deg]", color: "rgba(217,144,27,0.34)" },
  { className: "left-[1480px] top-[412px] w-[94px] rotate-[90deg]", color: "rgba(15,154,186,0.34)" },
];

export function MapPreview() {
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const activeNode = heroNodes.find((node) => node.id === activeNodeId) ?? null;

  return (
    <section id="mapa" className="relative overflow-hidden border-b border-[#2b2b2b]">
      <div className="pointer-events-none absolute inset-0 bg-black" />

      <div className="relative mx-auto hidden h-[calc(100vh-80px)] min-h-[880px] w-full max-w-[1920px] overflow-hidden lg:block">
        <div className="absolute left-[240px] top-12 z-20 flex w-[401px] flex-col gap-6">
          <div className="relative -top-2 inline-flex h-10 w-fit items-center justify-center gap-[10px] rounded-[12px] border border-[#224222] bg-[rgba(0,18,0,0.88)] px-6 py-[10px] backdrop-blur-[2px]">
            <Image src="/icons/gamepad.svg" alt="Gamepad" width={16} height={16} />
            <span className="text-[15px] text-[var(--accent-soft)]">BEM VINDO AO MEU MUNDO</span>
            <Image src="/icons/arrow.svg" alt="" width={16} height={16} />
          </div>

          <div className="font-[family:var(--font-display)] text-[40px] font-bold uppercase leading-[1.15] text-white">
            <p>DESIGN QUE</p>
            <p>CONECTA.</p>
            <p>
              <span className="text-[var(--accent-soft)]">EXPERIÊNCIAS</span> QUE
            </p>
            <p>TRANSFORMAM</p>
          </div>

          <p className="text-[16px] leading-normal text-[#b9b9b9]">
            Explore meu mapa de habilidades, conheça meus projetos e descubra como
            transformo ideias em produtos digitais de alto impacto
          </p>

          <a
            href="#quests"
            className="inline-flex h-10 w-fit items-center justify-center gap-[10px] rounded-[12px] border border-[#224222] bg-[rgba(0,18,0,0.88)] px-6 py-[10px] text-[15px] font-bold text-[var(--accent-soft)] backdrop-blur-[2px] transition hover:shadow-[0_0_24px_rgba(107,217,107,0.18)]"
          >
            VER PROJETOS
            <Image src="/icons/arrow.svg" alt="" width={16} height={16} />
          </a>
        </div>

        <div className="absolute left-[240px] top-[520px] z-20 w-[272px] rounded-[12px] border border-[#224222] bg-[rgba(0,18,0,0.33)] p-6 backdrop-blur-[2px]">
          <div className="space-y-2">
            <p className="text-[16px] font-bold text-[var(--accent-soft)]">MISSÃO ATUAL</p>
            <div className="text-[16px] leading-normal text-[#b9b9b9]">
              <p>Construir produtos digitais que</p>
              <p>geram valor para pessoas</p>
              <p>e negócios</p>
            </div>
          </div>

          <div className="mt-6 w-[224px] space-y-2">
            <div className="flex items-center justify-between text-[16px] font-bold uppercase">
              <span className="text-[var(--accent-soft)]">PROGRESSO</span>
              <span className="text-white">75%</span>
            </div>
            <div className="flex w-[192px] items-center">
              <div className="h-[6px] w-[129px] rounded-[500px] bg-[var(--accent-soft)] shadow-[0_0_18px_rgba(107,217,107,0.42)]" />
              <div className="h-[6px] flex-1 rounded-[500px] bg-[linear-gradient(90deg,rgba(255,255,255,0.15),rgba(255,255,255,0.03))]" />
            </div>
          </div>
        </div>

        <div className="absolute left-[818px] top-8 z-20 flex items-center gap-4 rounded-[12px] border border-[#224222] bg-[rgba(0,18,0,0.33)] p-4 backdrop-blur-[2px]">
          <Image src="/icons/pin.svg" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
          <div className="text-[16px]">
            <p className="font-bold text-[var(--accent-soft)]">SELECIONE UM DISTRITO</p>
            <p className="text-[#b9b9b9]">PARA EXPLORAR</p>
          </div>
        </div>

        <div className="absolute left-[1430px] top-8 z-20 w-[240px] rounded-[12px] border border-[#224222] bg-[rgba(0,18,0,0.33)] p-6 backdrop-blur-[10px]">
          <div className="flex items-start gap-4">
            <div className="relative flex h-[52px] w-[52px] items-center justify-center">
  <div
    className="absolute inset-0 rounded-full"
    style={{
      background: "conic-gradient(#6bd96b 0 82%, rgba(107,217,107,0.16) 82% 100%)",
    }}
  />
  <div className="absolute inset-[6px] rounded-full bg-[rgba(0,18,0,0.96)]" />
  <span className="relative z-[1] font-[family:var(--font-display)] text-[22px] font-bold text-[var(--accent-soft)]">
    19
  </span>
</div>
            <div className="space-y-[2px] text-[12px]">
              <p className="font-bold text-[var(--accent-soft)]">MEU NÍVEL</p>
              <p className="text-[#b9b9b9]">UI/UX DESIGNER PLENO</p>
              <p className="text-[#b9b9b9]">XP 4.750/6.000</p>
            </div>
          </div>

          <div className="mt-6 w-[224px] space-y-2">
            <p className="text-[12px] font-bold uppercase text-[var(--accent-soft)]">
              CONQUISTA DISPONÍVEL
            </p>
            <div className="flex items-center gap-2">
              <Image src="/icons/medal.svg" alt="" width={24} height={24} className="h-6 w-6 object-contain" />
              <p className="text-[12px] font-bold capitalize text-white">+1 projeto pessoal</p>
            </div>
          </div>
        </div>

        <motion.div
          animate={{
            filter: activeNode ? "blur(4px) brightness(0.42)" : "blur(0px) brightness(1)",
            opacity: activeNode ? 0.66 : 0.95,
            scale: activeNode ? 0.985 : 1,
          }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[230px] top-[0px] z-0 h-[1008px] w-[1447px] overflow-hidden"
        >
          <div className="absolute left-[-200px] top-0 h-[960px] w-[1660px]">
            <Image
              src={mapBackground}
              alt="Mapa ilustrado do portfolio"
              width={1820}
              height={1180}
              priority
              className="h-full w-full max-w-none object-cover object-left"
            />
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-30 z-[10] w-[600px] bg-[linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.82)_42%,rgba(0,0,0,0)_100%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-30 z-[10] w-[900px] bg-[linear-gradient(270deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.78)_40%,rgba(0,0,0,0)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[10] h-[200px] bg-[linear-gradient(0deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.82)_42%,rgba(0,0,0,0)_100%)]" />

        {heroConnections.map((connection) => (
          <SkillConnection
            key={connection.className}
            className={connection.className}
            color={connection.color}
          />
        ))}

        {heroNodes.map((node) => (
          <SkillNode
            key={node.id}
            title={node.title}
            subtitle={node.subtitle}
            icon={node.icon}
            color={node.color}
            glow={node.glow}
            positionClass={node.positionClass}
            isActive={activeNode?.id === node.id}
            onClick={() => setActiveNodeId(node.id)}
          />
        ))}

        <div className="absolute left-[728px] top-[880px] z-20 flex items-center gap-4 rounded-[12px] p-4 text-[16px] text-[#b9b9b9]">
          <Image src="/icons/scroll.svg" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
          <span>Scroll para descobrir mais</span>
        </div>

        <AnimatePresence>
          {activeNode ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20"
            >
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.12)]" onClick={() => setActiveNodeId(null)} />
              <div className="absolute right-[228px] top-[78px] z-30 w-[360px]">
                <SkillPanel
                  title={activeNode.title}
                  eyebrow={activeNode.panel.eyebrow}
                  summary={activeNode.panel.summary}
                  overview={activeNode.panel.overview}
                  color={activeNode.color}
                  panelBackground={activeNode.panel.panelBackground}
                  progressLabel={activeNode.panel.progressLabel}
                  progressValue={activeNode.panel.progressValue}
                  progressFill={activeNode.panel.progressFill}
                  icon={activeNode.icon}
                  competencies={activeNode.panel.competencies}
                  project={activeNode.panel.project}
                  onClose={() => setActiveNodeId(null)}
                />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="relative mx-auto flex max-w-[1920px] flex-col gap-5 px-4 py-4 sm:px-6 lg:hidden">
        <div className="relative overflow-hidden rounded-[30px] border border-[#163216] bg-[linear-gradient(180deg,rgba(2,14,5,0.92),rgba(0,0,0,0.98))] px-5 pb-6 pt-6 shadow-[0_24px_60px_rgba(0,0,0,0.34),0_0_28px_rgba(107,217,107,0.08)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0">
              <Image
                src={mapBackground}
                alt="Mapa ilustrado do portfolio"
                fill
                priority
                className="scale-[1.18] object-cover object-[68%_center] opacity-90"
              />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_42%,rgba(107,217,107,0.16),transparent_28%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.72)_40%,rgba(0,0,0,0.18)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.32)_0%,rgba(0,0,0,0.18)_32%,rgba(0,0,0,0.82)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(107,217,107,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(107,217,107,0.025)_1px,transparent_1px)] bg-[size:34px_34px] opacity-40" />
          </div>

          <div className="relative z-10 max-w-[19rem] space-y-5">
            <div className="inline-flex h-10 items-center gap-[10px] rounded-[12px] border border-[#224222] bg-[rgba(0,18,0,0.72)] px-5 py-[10px] backdrop-blur-[4px]">
              <Image src="/icons/gamepad.svg" alt="" width={16} height={16} />
              <span className="text-[12px] tracking-[0.18em] text-[var(--accent-soft)]">
                BEM VINDO AO MEU MUNDO
              </span>
              <Image src="/icons/arrow.svg" alt="" width={16} height={16} />
            </div>

            <div>
              <h1 className="max-w-[16rem] font-[family:var(--font-display)] text-[2.45rem] font-bold uppercase leading-[0.9] text-white [text-shadow:0_10px_32px_rgba(0,0,0,0.55)]">
                Design que conecta.
                <span className="block text-[var(--accent-soft)]">Experiências</span>
                que transformam
              </h1>
              <p className="mt-4 max-w-[18rem] text-[15px] leading-6 text-white/74">
                Explore meu mapa de habilidades, conheça meus projetos e descubra como
                transformo ideias em produtos digitais de alto impacto.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#quests"
                className="hud-label inline-flex min-h-11 items-center rounded-2xl border border-white/12 bg-white/[0.04] px-5 text-[11px] text-white/76 backdrop-blur-[4px] transition hover:border-white/20 hover:text-white"
              >
                Ver projetos
              </a>
            </div>
          </div>

          <div className="relative z-10 mt-12 flex items-end justify-between gap-4">
            <div className="max-w-[10.5rem] rounded-[18px] border border-[#224222] bg-[rgba(0,18,0,0.48)] px-4 py-3 backdrop-blur-[5px]">
              <p className="text-[11px] font-bold tracking-[0.16em] text-[var(--accent-soft)]">
                MISSÃO ATUAL
              </p>
              <p className="mt-2 text-[12px] leading-5 text-white/66">
                Criar produtos digitais com clareza, impacto e atmosfera premium.
              </p>
            </div>

            <div className="rounded-[18px] border border-[#224222] bg-[rgba(0,18,0,0.56)] px-4 py-3 backdrop-blur-[5px]">
              <p className="text-[10px] tracking-[0.18em] text-[var(--accent-soft)]">
                MAPA ONLINE
              </p>
              <div className="mt-2 flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[var(--accent-soft)] shadow-[0_0_16px_rgba(107,217,107,0.75)]" />
                <span className="text-[12px] text-white/76">6 distritos ativos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-[22px] border border-[#224222] bg-[rgba(0,18,0,0.38)] p-4 backdrop-blur-[4px]">
            <p className="text-[11px] tracking-[0.16em] text-[var(--accent-soft)]">PROGRESSO</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-[family:var(--font-display)] text-[22px] text-white">75%</span>
              <span className="text-[12px] text-white/58">missão principal</span>
            </div>
            <div className="mt-3 h-[6px] rounded-full bg-white/10">
              <div className="h-full w-[75%] rounded-full bg-[var(--accent-soft)] shadow-[0_0_18px_rgba(107,217,107,0.45)]" />
            </div>
          </div>

          <div className="rounded-[22px] border border-[#224222] bg-[rgba(0,18,0,0.38)] p-4 backdrop-blur-[4px]">
            <p className="text-[11px] tracking-[0.16em] text-[var(--accent-soft)]">NÍVEL ATUAL</p>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[rgba(107,217,107,0.08)] font-[family:var(--font-display)] text-[18px] text-[var(--accent-soft)]">
                7
              </div>
              <div>
                <p className="text-[13px] font-semibold text-white">UI/UX Designer Pleno</p>
                <p className="text-[12px] text-white/58">XP 4.750/6.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
