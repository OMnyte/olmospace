import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#07080b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "olmospace — Personal Atelier & Research Chambers",
  description:
    "Laboratorio digitale e archivio delle sperimentazioni di Olmo Marchi: orologeria concettuale (CRAVED), creative systems (MIRROR STUDIO), finanza sistematica (QUANT LAB), intelligenza artificiale ed economie virtuali.",
  keywords: [
    "Olmo Marchi",
    "olmospace",
    "CRAVED",
    "MIRROR STUDIO",
    "Quant Lab",
    "AI Lab",
    "Creative Direction",
    "Conceptual Horology",
    "Algorithmic Trading",
    "Virtual Worlds"
  ],
  authors: [{ name: "Olmo Marchi", url: "https://craved.ch" }],
  creator: "Olmo Marchi",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://olmospace.vercel.app",
    title: "olmospace — Personal Atelier & Research Chambers",
    description:
      "Laboratorio digitale e archivio progetti di Olmo Marchi. Orologeria concettuale, sistemi creativi AI, finanza quantitativa e mondi virtuali.",
    siteName: "olmospace",
  },
  twitter: {
    card: "summary_large_image",
    title: "olmospace — Personal Atelier & Research Chambers",
    description: "Laboratorio digitale e archivio progetti di Olmo Marchi.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-[#07080b] text-[#f3f4f6] antialiased selection:bg-white/20 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
