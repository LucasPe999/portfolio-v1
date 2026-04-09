"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const contactIcon = "/icons/note-pencil.svg";
const sectionBackground =
  "https://www.figma.com/api/mcp/asset/3b45d175-dfda-4cd0-a2db-e7ef5b12b6bf";
const emailAddress = "lucaslp2801@gmail.com";
const whatsappUrl = "https://wa.me/5535998671295";
const linkedinUrl = "https://www.linkedin.com/in/lucaspereira2801/";
const buttonArrow = "/icons/arrow.svg";

function ContactHeading() {
  return (
    <div className="flex items-center gap-4 rounded-[12px] px-4 py-4">
      <Image src={contactIcon} alt="" width={32} height={32} className="h-8 w-8 object-contain" />
      <h2 className="font-[family:var(--font-display)] text-[32px] uppercase tracking-[0.08em] text-[var(--accent-soft)]">
        Contato
      </h2>
      <Image
        src={contactIcon}
        alt=""
        width={32}
        height={32}
        className="h-8 w-8 scale-x-[-1] object-contain"
      />
    </div>
  );
}

function actionButtonClass() {
  return "group inline-flex h-10 w-fit items-center justify-center gap-[10px] rounded-[12px] border border-[#224222] bg-[rgba(0,18,0,0.88)] px-6 py-[10px] font-[family:var(--font-display)] text-[15px] font-bold text-[var(--accent-soft)] backdrop-blur-[2px] transition hover:border-[var(--accent-soft)] hover:shadow-[0_0_24px_rgba(107,217,107,0.18)]";
}

function ButtonArrow() {
  return (
    <Image
      src={buttonArrow}
      alt=""
      width={16}
      height={16}
      className="h-4 w-4 shrink-0 object-contain"
    />
  );
}

export function ContactSection() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const finalSubject = subject.trim() || "Contato via portfólio";
    const finalBody =
      message.trim() ||
      "Olá Lucas, gostaria de conversar sobre um projeto.";

    return `mailto:${emailAddress}?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(finalBody)}`;
  }, [subject, message]);

  return (
    <section
      id="contato"
      className="relative overflow-hidden border-t border-[#111] scroll-mt-20"
      style={{
        backgroundColor: "#000",
        backgroundImage: `url("${sectionBackground}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "84% auto",
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.46),rgba(0,0,0,0.18)_36%,rgba(0,0,0,0.7))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(107,217,107,0.06),transparent_52%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(107,217,107,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(107,217,107,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

      <div className="relative mx-auto max-w-[1920px] px-4 pb-20 pt-8 sm:px-6 lg:px-8 xl:px-[80px]">
        <div className="flex justify-center">
          <ContactHeading />
        </div>

        <section className="mt-8 rounded-[24px] border border-[var(--panel-border)] bg-[rgba(0,18,0,0.28)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.02),0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-[4px] sm:p-7">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:gap-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--accent-soft)]">
                Canal Aberto
              </p>
              <h3 className="mt-4 max-w-[12ch] font-[family:var(--font-display)] text-[clamp(2.3rem,6vw,5rem)] uppercase leading-[0.9] tracking-[0.02em] text-white">
                Vamos tirar a sua ideia do papel.
              </h3>
              <p className="mt-5 max-w-[36rem] text-[15px] leading-7 text-white/72 sm:text-[16px]">
                Preencha o assunto e a mensagem para abrir o seu cliente de e-mail já
                com tudo pronto. Se preferir, você também pode seguir pelo WhatsApp
                ou pelo LinkedIn.
              </p>
            </div>

            <div>
              <div className="grid gap-4">
                <label className="block">
                  <span className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[var(--accent-soft)]">
                    Assunto
                  </span>
                  <input
                    type="text"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    placeholder="Ex: Novo projeto, parceria, consultoria..."
                    className="w-full rounded-[18px] border border-white/8 bg-[rgba(0,0,0,0.18)] px-4 py-3 text-[14px] text-white outline-none transition placeholder:text-white/28 focus:border-[var(--line-strong)] focus:bg-[rgba(0,18,0,0.24)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[var(--accent-soft)]">
                    Mensagem
                  </span>
                  <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Conte um pouco sobre o projeto, prazo, contexto ou objetivo."
                    rows={7}
                    className="w-full resize-none rounded-[18px] border border-white/8 bg-[rgba(0,0,0,0.18)] px-4 py-3 text-[14px] leading-6 text-white outline-none transition placeholder:text-white/28 focus:border-[var(--line-strong)] focus:bg-[rgba(0,18,0,0.24)]"
                  />
                </label>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href={mailtoHref} className={actionButtonClass()}>
                  <span>Enviar e-mail</span>
                  <ButtonArrow />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={actionButtonClass()}
                >
                  <span>Abrir WhatsApp</span>
                  <ButtonArrow />
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={actionButtonClass()}
                >
                  <span>Acessar LinkedIn</span>
                  <ButtonArrow />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-6 rounded-[20px] border border-[rgba(107,217,107,0.14)] bg-[rgba(0,18,0,0.18)] px-5 py-4 text-[13px] leading-6 text-white/58 backdrop-blur-[4px]">
          Lucas Pereira
          <span className="mx-2 text-[var(--accent-soft)]/45">/</span>
          UI/UX Designer
          <span className="mx-2 text-[var(--accent-soft)]/45">/</span>
          Disponível para novos projetos e parcerias
        </div>
      </div>
    </section>
  );
}
