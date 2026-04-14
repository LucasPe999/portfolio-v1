"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const sectionIcon = "/icons/medal.svg";

type HighlightShot = {
  id: string;
  image: string;
  aspect: string;
};

type HighlightClient = {
  id: string;
  name: string;
  logo: string;
  shots: HighlightShot[];
};

function getResponsiveAspect(shot: HighlightShot) {
  switch (shot.aspect) {
    case "aspect-[9/16]":
      return "aspect-[3/4] sm:aspect-[9/16]";
    case "aspect-[4/5]":
      return "aspect-[4/5]";
    case "aspect-[16/10]":
      return "aspect-[4/3] sm:aspect-[16/10]";
    case "aspect-[16/9]":
    default:
      return "aspect-[4/3] sm:aspect-[16/9]";
  }
}

const furionShots: HighlightShot[] = [
  { id: "screen-01", image: "/highlights/furion/screen-01.png", aspect: "aspect-[4/5]" },
  { id: "screen-02", image: "/highlights/furion/screen-02.png", aspect: "aspect-[16/9]" },
  { id: "screen-03", image: "/highlights/furion/screen-03.png", aspect: "aspect-[16/9]" },
  { id: "screen-04", image: "/highlights/furion/screen-04.png", aspect: "aspect-[4/5]" },
  { id: "screen-05", image: "/highlights/furion/screen-05.png", aspect: "aspect-[16/9]" },
  { id: "screen-06", image: "/highlights/furion/screen-06.png", aspect: "aspect-[16/9]" },
  { id: "screen-07", image: "/highlights/furion/screen-07.png", aspect: "aspect-[16/9]" },
];

const joaoPauloShots: HighlightShot[] = [
  { id: "screen-01", image: "/highlights/joao-paulo/screen-01.png", aspect: "aspect-[16/9]" },
  { id: "screen-02", image: "/highlights/joao-paulo/screen-02.png", aspect: "aspect-[16/9]" },
  { id: "screen-03", image: "/highlights/joao-paulo/screen-03.png", aspect: "aspect-[16/9]" },
  { id: "screen-04", image: "/highlights/joao-paulo/screen-04.png", aspect: "aspect-[16/9]" },
  { id: "screen-05", image: "/highlights/joao-paulo/screen-05.png", aspect: "aspect-[16/9]" },
];

const ecomCarbonShots: HighlightShot[] = [
  { id: "screen-01", image: "/highlights/ecom-carbon/screen-01.png", aspect: "aspect-[16/10]" },
  { id: "screen-02", image: "/highlights/ecom-carbon/screen-02.png", aspect: "aspect-[16/10]" },
  { id: "screen-03", image: "/highlights/ecom-carbon/screen-03.png", aspect: "aspect-[16/10]" },
  { id: "screen-04", image: "/highlights/ecom-carbon/screen-04.png", aspect: "aspect-[16/10]" },
  { id: "screen-05", image: "/highlights/ecom-carbon/screen-05.png", aspect: "aspect-[16/10]" },
  { id: "screen-06", image: "/highlights/ecom-carbon/screen-06.png", aspect: "aspect-[16/10]" },
  { id: "screen-07", image: "/highlights/ecom-carbon/screen-07.png", aspect: "aspect-[16/10]" },
  { id: "screen-08", image: "/highlights/ecom-carbon/screen-08.png", aspect: "aspect-[16/10]" },
  { id: "screen-09", image: "/highlights/ecom-carbon/screen-09.png", aspect: "aspect-[16/10]" },
  { id: "screen-10", image: "/highlights/ecom-carbon/screen-10.png", aspect: "aspect-[16/10]" },
  { id: "screen-11", image: "/highlights/ecom-carbon/screen-11.png", aspect: "aspect-[16/10]" },
];

const ecomEnergiaShots: HighlightShot[] = [
  { id: "screen-01", image: "/highlights/ecom-energia/screen-01.png", aspect: "aspect-[9/16]" },
  { id: "screen-02", image: "/highlights/ecom-energia/screen-02.png", aspect: "aspect-[9/16]" },
  { id: "screen-03", image: "/highlights/ecom-energia/screen-03.png", aspect: "aspect-[16/9]" },
  { id: "screen-04", image: "/highlights/ecom-energia/screen-04.png", aspect: "aspect-[16/9]" },
  { id: "screen-05", image: "/highlights/ecom-energia/screen-05.png", aspect: "aspect-[16/9]" },
  { id: "screen-06", image: "/highlights/ecom-energia/screen-06.png", aspect: "aspect-[9/16]" },
  { id: "screen-07", image: "/highlights/ecom-energia/screen-07.png", aspect: "aspect-[9/16]" },
  { id: "screen-08", image: "/highlights/ecom-energia/screen-08.png", aspect: "aspect-[9/16]" },
  { id: "screen-09", image: "/highlights/ecom-energia/screen-09.png", aspect: "aspect-[9/16]" },
  { id: "screen-10", image: "/highlights/ecom-energia/screen-10.png", aspect: "aspect-[9/16]" },
];

const agrorigemShots: HighlightShot[] = [
  { id: "screen-01", image: "/highlights/agrorigem/screen-01.png", aspect: "aspect-[9/16]" },
  { id: "screen-02", image: "/highlights/agrorigem/screen-02.png", aspect: "aspect-[9/16]" },
  { id: "screen-03", image: "/highlights/agrorigem/screen-03.png", aspect: "aspect-[9/16]" },
  { id: "screen-04", image: "/highlights/agrorigem/screen-04.png", aspect: "aspect-[9/16]" },
  { id: "screen-05", image: "/highlights/agrorigem/screen-05.png", aspect: "aspect-[9/16]" },
  { id: "screen-06", image: "/highlights/agrorigem/screen-06.png", aspect: "aspect-[9/16]" },
];

const ilottoShots: HighlightShot[] = [
  { id: "screen-01", image: "/highlights/ilotto/screen-01.png", aspect: "aspect-[9/16]" },
  { id: "screen-02", image: "/highlights/ilotto/screen-02.png", aspect: "aspect-[16/9]" },
  { id: "screen-03", image: "/highlights/ilotto/screen-03.png", aspect: "aspect-[9/16]" },
  { id: "screen-04", image: "/highlights/ilotto/screen-04.png", aspect: "aspect-[9/16]" },
  { id: "screen-05", image: "/highlights/ilotto/screen-05.png", aspect: "aspect-[9/16]" },
  { id: "screen-06", image: "/highlights/ilotto/screen-06.png", aspect: "aspect-[16/9]" },
  { id: "screen-07", image: "/highlights/ilotto/screen-07.png", aspect: "aspect-[16/9]" },
  { id: "screen-08", image: "/highlights/ilotto/screen-08.png", aspect: "aspect-[16/9]" },
];

const clickmaxShots: HighlightShot[] = [
  { id: "screen-01", image: "/highlights/clickmax/screen-01.png", aspect: "aspect-[16/10]" },
  { id: "screen-02", image: "/highlights/clickmax/screen-02.png", aspect: "aspect-[16/9]" },
  { id: "screen-03", image: "/highlights/clickmax/screen-03.png", aspect: "aspect-[16/10]" },
  { id: "screen-04", image: "/highlights/clickmax/screen-04.png", aspect: "aspect-[16/9]" },
  { id: "screen-05", image: "/highlights/clickmax/screen-05.png", aspect: "aspect-[16/10]" },
  { id: "screen-06", image: "/highlights/clickmax/screen-06.png", aspect: "aspect-[16/9]" },
  { id: "screen-07", image: "/highlights/clickmax/screen-07.png", aspect: "aspect-[16/9]" },
  { id: "screen-08", image: "/highlights/clickmax/screen-08.png", aspect: "aspect-[16/9]" },
];

const clients: HighlightClient[] = [
  { id: "furion", name: "Furion", logo: "/highlights/furion/logo.png", shots: furionShots },
  { id: "joao-paulo", name: "Joao Paulo II", logo: "/highlights/logos/jp.png", shots: joaoPauloShots },
  { id: "ecom-carbon", name: "Ecom Carbon", logo: "/highlights/logos/eca.png", shots: ecomCarbonShots },
  { id: "ecom-energia", name: "Ecom", logo: "/highlights/logos/eener.png", shots: ecomEnergiaShots },
  { id: "agrorigem", name: "Agrorigem", logo: "/highlights/logos/afro.png", shots: agrorigemShots },
  { id: "ilotto", name: "iLotto", logo: "/highlights/logos/ilotto.png", shots: ilottoShots },
  { id: "clickmax", name: "Clickmax", logo: "/highlights/logos/clickmax.png", shots: clickmaxShots },
];

function SectionHeading() {
  return (
    <div className="flex items-center gap-4 rounded-[12px] px-4 py-4">
      <Image src={sectionIcon} alt="" width={32} height={32} className="h-8 w-8 object-contain" />
      <h2 className="font-[family:var(--font-display)] text-[32px] uppercase tracking-[0.08em] text-[var(--accent-soft)]">
        Highlights
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

export function HighlightsSection() {
  const [activeClientId, setActiveClientId] = useState(clients[0]?.id ?? "");
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const activeClient = useMemo(
    () => clients.find((client) => client.id === activeClientId) ?? clients[0],
    [activeClientId],
  );

  if (!activeClient) {
    return null;
  }

  return (
    <section
      id="highlights"
      className="relative overflow-hidden border-t border-[#1d1d1d] scroll-mt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,128,32,0.18),transparent_28%),linear-gradient(180deg,#090503_0%,#040201_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,136,61,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,61,0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,145,84,0.5),transparent)]" />

      <div className="relative mx-auto max-w-[1920px] px-4 pb-20 pt-8 sm:px-6 lg:px-8 xl:px-[94px]">
        <div className="flex justify-center">
          <SectionHeading />
        </div>

        <div className="mt-8 grid items-start gap-5 lg:gap-6 xl:grid-cols-[292px_minmax(0,1fr)] xl:gap-8">
          <aside className="rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(22,13,9,0.92),rgba(8,4,3,0.96))] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md sm:rounded-[28px]">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#ffb285]">Project Board</p>

            <div className="mt-4 flex w-full gap-3 overflow-x-auto overflow-y-hidden pb-2 [scrollbar-color:rgba(255,138,74,0.55)_rgba(255,255,255,0.08)] [scrollbar-width:thin] touch-pan-x xl:grid xl:max-h-[980px] xl:justify-center xl:gap-3 xl:overflow-x-hidden xl:overflow-y-auto xl:pb-0 xl:pr-1">
              {clients.map((client) => {
                const isActive = client.id === activeClient.id;

                return (
                  <button
                    key={client.id}
                    type="button"
                    onClick={() => setActiveClientId(client.id)}
                    className={`relative flex aspect-square w-[136px] shrink-0 items-center justify-center overflow-hidden rounded-[22px] border bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] transition sm:w-[160px] lg:w-[180px] xl:w-[220px] xl:rounded-[28px] ${
                      isActive
                        ? "border-[#ff8a4a]/70 shadow-[0_0_28px_rgba(255,138,74,0.16)]"
                        : "border-white/8 opacity-55 hover:border-white/16 hover:opacity-100"
                    }`}
                    aria-label={`Selecionar cliente ${client.name}`}
                  >
                    <Image src={client.logo} alt={client.name} fill className="object-contain" />
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="h-fit overflow-hidden rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(14,8,5,0.9),rgba(7,4,2,0.96))] p-3 shadow-[0_28px_70px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.03)] sm:rounded-[28px] sm:p-4 lg:p-5">
            <div className="grid grid-cols-2 justify-items-center gap-3 sm:columns-2 sm:gap-4 xl:columns-3 xl:block">
              {activeClient.shots.map((shot, index) => (
                <button
                  key={shot.id}
                  type="button"
                  onClick={() => setPreviewImage(shot.image)}
                  className="group relative w-full max-w-[168px] overflow-hidden rounded-[16px] bg-transparent text-left transition hover:-translate-y-1 sm:mb-4 sm:block sm:max-w-none sm:break-inside-avoid sm:rounded-[22px]"
                  aria-label={`Ampliar imagem ${index + 1}`}
                >
                  <div className={`relative w-full overflow-hidden rounded-[16px] sm:rounded-[22px] ${getResponsiveAspect(shot)}`}>
                    <Image
                      src={shot.image}
                      alt=""
                      fill
                      className="object-contain sm:object-cover sm:object-top transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {previewImage ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(0,0,0,0.9)] p-3 backdrop-blur-md sm:p-6">
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Fechar preview"
            onClick={() => setPreviewImage(null)}
          />

          <div className="relative z-[1] w-full max-w-7xl">
            <div className="relative aspect-[16/10] max-h-[85vh] overflow-hidden rounded-[18px] bg-black shadow-[0_30px_90px_rgba(0,0,0,0.46)] sm:rounded-[22px]">
              <Image src={previewImage} alt="" fill priority className="object-contain" />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
