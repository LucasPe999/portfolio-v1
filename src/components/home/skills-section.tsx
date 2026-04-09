import Image from "next/image";

const sectionBackground =
  "https://www.figma.com/api/mcp/asset/3b45d175-dfda-4cd0-a2db-e7ef5b12b6bf";

const swordIcon = "/icons/sword.svg";

const toolIcons = [
  "https://www.figma.com/api/mcp/asset/01828729-40a3-45d9-87b7-cba85be96926",
  "https://www.figma.com/api/mcp/asset/2413195e-d2ac-407e-b7e9-6c83c3188c6f",
  "https://www.figma.com/api/mcp/asset/9126c69d-0e11-4821-b5fd-8576a9614c3b",
  "https://www.figma.com/api/mcp/asset/2b75206c-93ed-4be9-9a80-b8a6b542849a",
  "https://www.figma.com/api/mcp/asset/b3761b72-60df-4bd8-b160-7b3e5481bc7d",
  "https://www.figma.com/api/mcp/asset/57a79b5a-fc78-471b-9464-d5d4c706958b",
];

const radarAngles = [-90, -30, 30, 90, 150, 210];
const radarValues = [1, 0.82, 0.98, 0.84, 0.62, 0.7];

const skills = [
  {
    title: "FIGMA",
    description: "Interfaces escaláveis, protótipos inteligentes e handoff preciso.",
    icon: toolIcons[0],
  },
  {
    title: "FRAMER",
    description: "Interfaces publicáveis, animações fluidas e experiências reais.",
    icon: toolIcons[1],
  },
  {
    title: "ADOBE CREATIVE SUITE",
    description: "Criação visual refinada, identidade e produção gráfica profissional.",
    icon: toolIcons[2],
  },
  {
    title: "CODEX",
    description: "Transformação de design em código com auxílio de inteligência artificial.",
    icon: toolIcons[3],
  },
  {
    title: "VS CODE",
    description: "Estruturação de interfaces, lógica e integração com código real.",
    icon: toolIcons[4],
  },
  {
    title: "SPLINE",
    description: "Interfaces 3D interativas, animações vivas e experiências imersivas.",
    icon: toolIcons[5],
  },
];

const toolPositions = [
  "left-[51%] top-[38px]",
  "left-[86.5%] top-[34.5%]",
  "left-[86.5%] top-[76.5%]",
  "left-[50%] top-[100.5%]",
  "left-[13%] top-[80.5%]",
  "left-[12%] top-[35.5%]",
];

function RadarChart() {
  const center = 134;
  const radius = 98;
  const polygon = radarAngles
    .map((angle, index) => {
      const rad = (angle * Math.PI) / 180;
      const r = radius * radarValues[index];
      const x = center + Math.cos(rad) * r;
      const y = center + Math.sin(rad) * r;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[326px]">
      <svg viewBox="0 0 286 262" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <g transform="translate(9 15)">
          {[20, 40, 60, 80, 100].map((r) => (
            <polygon
              key={r}
              points={radarAngles
                .map((angle) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = center + Math.cos(rad) * r;
                  const y = center + Math.sin(rad) * r;
                  return `${x},${y}`;
                })
                .join(" ")}
              fill="none"
              stroke={r === 100 ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0.16)"}
              strokeWidth={r === 100 ? 1.2 : 0.7}
            />
          ))}

          {radarAngles.map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x = center + Math.cos(rad) * 100;
            const y = center + Math.sin(rad) * 100;
            return (
              <line
                key={angle}
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="0.7"
              />
            );
          })}

          <polygon
            points={polygon}
            fill="rgba(112,255,116,0.62)"
            stroke="rgba(167,255,167,0.42)"
            strokeWidth="1"
          />
        </g>
      </svg>

      {toolPositions.map((position, index) => (
        <div key={position} className={`absolute ${position} -translate-x-1/2 -translate-y-1/2`}>
          <Image
            src={toolIcons[index]}
            alt=""
            width={index === 5 ? 36 : 24}
            height={index === 5 ? 36 : 24}
            className={`object-contain ${index === 5 ? "h-9 w-9" : "h-6 w-6"}`}
          />
        </div>
      ))}
    </div>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative min-h-[calc(100vh-80px)] overflow-hidden scroll-mt-24"
      style={{
        backgroundColor: "#000",
        backgroundImage: `url("${sectionBackground}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "84% auto",
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.46),rgba(0,0,0,0.18)_36%,rgba(0,0,0,0.52))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(107,217,107,0.06),transparent_52%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(107,217,107,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(107,217,107,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      <div className="absolute inset-x-0 top-0 z-[1] h-px bg-black" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-[1920px] flex-col items-center justify-start px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-8 xl:px-[120px]">
        <div className="flex items-center gap-4 rounded-[12px] px-4 py-4">
          <Image src={swordIcon} alt="" width={32} height={32} className="h-8 w-8 object-contain" />
          <h2 className="font-[family:var(--font-display)] text-[32px] uppercase tracking-[0.08em] text-[var(--accent-soft)]">
            Skills
          </h2>
          <Image
            src={swordIcon}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 scale-x-[-1] object-contain"
          />
        </div>

        <div className="mt-8 grid w-full gap-5 md:gap-6 lg:grid-cols-2 lg:items-start xl:grid-cols-[minmax(240px,0.9fr)_minmax(320px,1fr)_minmax(360px,1.2fr)] xl:gap-8 xl:px-10 xl:pt-8">
          <div className="relative flex h-[280px] items-center justify-center sm:h-[340px] lg:col-span-2 xl:col-span-1 xl:h-[440px]">
            <div className="relative h-[250px] w-[160px] overflow-hidden rounded-[64px] sm:h-[320px] sm:w-[200px] sm:rounded-[84px] xl:h-[380px] xl:w-[220px] xl:rounded-[88px]">
              <Image
                src="/gifs/gif-character.gif"
                alt="Personagem animado"
                fill
                unoptimized
                className="object-contain mix-blend-lighten"
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[12px] border border-[#224222] bg-[rgba(0,18,0,0.33)] px-3 pb-5 pt-4 sm:px-4 sm:pb-6 lg:min-h-[435px]">
            <p className="relative text-center font-[family:var(--font-body)] text-[21.18px] text-[var(--accent-soft)]">
              FERRAMENTAS
            </p>
            <div className="relative mt-4 flex justify-center">
              <RadarChart />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[12px] border border-[#224222] bg-[rgba(0,18,0,0.33)] px-4 pb-5 pt-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] backdrop-blur-[2px] sm:px-6 sm:pb-6 xl:px-8">
            <p className="relative text-center font-[family:var(--font-body)] text-[21.18px] text-[var(--accent-soft)]">
              HABILIDADES
            </p>
            <div className="relative mt-3 space-y-3">
              {skills.map((skill) => (
                <div key={skill.title} className="flex items-start gap-4 sm:gap-6">
                  <Image
                    src={skill.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 shrink-0 object-contain"
                  />
                  <div className="min-w-0 pb-1">
                    <p className="font-[family:var(--font-body)] text-[15px] font-bold leading-none text-[var(--accent-soft)] sm:text-[16px]">
                      {skill.title}
                    </p>
                    <p className="mt-[7px] max-w-[372px] text-[12px] leading-normal text-[#b9b9b9]">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
