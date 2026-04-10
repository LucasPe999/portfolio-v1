import { NextResponse } from "next/server";

const resendApiUrl = "https://api.resend.com/emails";
const recipientEmail = "lucaslp2801@gmail.com";

type ContactPayload = {
  email?: string;
  phone?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !fromEmail) {
    return NextResponse.json(
      {
        message:
          "O envio ainda nao esta configurado no servidor. Adicione RESEND_API_KEY e CONTACT_FROM_EMAIL.",
      },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Dados invalidos." }, { status: 400 });
  }

  const email = payload.email?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!email || !phone || !message) {
    return NextResponse.json(
      { message: "Preencha e-mail, telefone e mensagem." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: "Informe um e-mail valido." }, { status: 400 });
  }

  const resendResponse = await fetch(resendApiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [recipientEmail],
      reply_to: email,
      subject: `Novo contato do portfolio - ${email}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111;">
          <h2>Novo contato pelo portfolio</h2>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    }),
  });

  if (!resendResponse.ok) {
    const resendError = await resendResponse.text();

    return NextResponse.json(
      {
        message: "Nao foi possivel enviar a mensagem no momento.",
        detail: resendError,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
