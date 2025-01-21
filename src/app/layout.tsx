import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BGomes Consórcios | Realizando Sonhos há Mais de 10 Anos",
  description:
    "Líder em consórcios no Brasil, representando Rodobens, Yamaha, Santander e Itaú. Mais de 3500 sonhos realizados em 12 estados.",
  keywords:
    "consórcio, Rodobens, Yamaha, Santander, Itaú, BGomes, financiamento, investimento seguro, realização de sonhos",
  openGraph: {
    title: "BGomes Consórcios | Realizando Sonhos há Mais de 10 Anos",
    description:
      "Líder em consórcios no Brasil, representando Rodobens, Yamaha, Santander e Itaú. Mais de 3500 sonhos realizados em 12 estados.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
