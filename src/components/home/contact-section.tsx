"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";

const contactIcon = "/icons/note-pencil.svg";
const sectionBackground =
  "https://www.figma.com/api/mcp/asset/3b45d175-dfda-4cd0-a2db-e7ef5b12b6bf";
const whatsappUrl = "https://wa.me/5535998671295";
const linkedinUrl = "https://www.linkedin.com/in/lucaspereira2801/";
const buttonArrow = "/icons/arrow.svg";

type FormState = {
  email: string;
  phone: string;
  message: string;
};

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

function actionButtonClass({ disabled = false }: { disabled?: boolean } = {}) {
  return `group inline-flex h-10 w-fit items-center justify-center gap-[10px] rounded-[12px] border px-6 py-[10px] font-[family:var(--font-display)] text-[15px] font-bold backdrop-blur-[2px] transition ${
    disabled
      ? "cursor-not-allowed border-white/10 bg-[rgba(255,255,255,0.04)] text-white/35"
      : "border-[#224222] bg-[rgba(0,18,0,0.88)] text-[var(--accent-soft)] hover:border-[var(--accent-soft)] hover:shadow-[0_0_24px_rgba(107,217,107,0.18)]"
  }`;
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

function normalizePhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const isSubmitDisabled = useMemo(() => {
    return (
      status === "sending" ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.message.trim()
    );
  }, [form.email, form.message, form.phone, status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
        }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Nao foi possivel enviar sua mensagem agora.");
      }

      setStatus("success");
      setFeedback("Mensagem enviada. Vou receber no meu e-mail com seus dados.");
      setForm({
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : "O envio falhou. Tente novamente em instantes.",
      );
    }
  }

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
                Agora o contato fica mais direto: a pessoa informa e-mail, telefone e a
                mensagem, e o envio cai na sua caixa de entrada sem depender de abrir o
                cliente de e-mail dela.
              </p>
            </div>

            <div>
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[var(--accent-soft)]">
                      E-mail
                    </span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(event) =>
                        setForm((current) => ({ ...current, email: event.target.value }))
                      }
                      placeholder="nome@empresa.com"
                      className="w-full rounded-[18px] border border-white/8 bg-[rgba(0,0,0,0.18)] px-4 py-3 text-[14px] text-white outline-none transition placeholder:text-white/28 focus:border-[var(--line-strong)] focus:bg-[rgba(0,18,0,0.24)]"
                      required
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[var(--accent-soft)]">
                      Telefone
                    </span>
                    <input
                      type="tel"
                      inputMode="numeric"
                      value={form.phone}
                      onChange={(event) =>
                        setForm((current) => ({
                          ...current,
                          phone: normalizePhone(event.target.value),
                        }))
                      }
                      placeholder="(00) 99999-9999"
                      className="w-full rounded-[18px] border border-white/8 bg-[rgba(0,0,0,0.18)] px-4 py-3 text-[14px] text-white outline-none transition placeholder:text-white/28 focus:border-[var(--line-strong)] focus:bg-[rgba(0,18,0,0.24)]"
                      required
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[var(--accent-soft)]">
                    Mensagem
                  </span>
                  <textarea
                    value={form.message}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, message: event.target.value }))
                    }
                    placeholder="Conte um pouco sobre o projeto, prazo, contexto ou objetivo."
                    rows={7}
                    className="w-full resize-none rounded-[18px] border border-white/8 bg-[rgba(0,0,0,0.18)] px-4 py-3 text-[14px] leading-6 text-white outline-none transition placeholder:text-white/28 focus:border-[var(--line-strong)] focus:bg-[rgba(0,18,0,0.24)]"
                    required
                  />
                </label>

                <div className="flex flex-wrap gap-4 pt-2">
                  <button type="submit" disabled={isSubmitDisabled} className={actionButtonClass({ disabled: isSubmitDisabled })}>
                    <span>{status === "sending" ? "Enviando..." : "Enviar mensagem"}</span>
                    <ButtonArrow />
                  </button>
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

                <p
                  className={`min-h-6 text-[13px] leading-6 ${
                    status === "error" ? "text-[#ff9d9d]" : "text-white/62"
                  }`}
                >
                  {feedback || "Preencha os tres campos para enviar direto para sua caixa."}
                </p>
              </form>
            </div>
          </div>
        </section>

        <div className="mt-6 rounded-[20px] border border-[rgba(107,217,107,0.14)] bg-[rgba(0,18,0,0.18)] px-5 py-4 text-[13px] leading-6 text-white/58 backdrop-blur-[4px]">
          Lucas Pereira
          <span className="mx-2 text-[var(--accent-soft)]/45">/</span>
          UI/UX Designer
          <span className="mx-2 text-[var(--accent-soft)]/45">/</span>
          Disponivel para novos projetos e parcerias
        </div>
      </div>
    </section>
  );
}
