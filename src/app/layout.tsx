import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucas XP — UI/UX Designer",
  description: "Design que conecta. Experiências que transformam.",
  metadataBase: new URL("https://lucasxp.com.br"),

  openGraph: {
    title: "Lucas XP — UI/UX Designer",
    description: "Design que conecta. Experiências que transformam.",
    url: "https://lucasxp.com.br",
    siteName: "Lucas XP",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lucas XP Portfolio",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lucas XP — UI/UX Designer",
    description: "Design que conecta. Experiências que transformam.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}