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
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "olmospace — Olmo Marchi | Portfolio & Laboratory",
  description:
    "Atelier e laboratorio personale di Olmo Marchi: orologeria concettuale (CRAVED), creative systems (MIRROR STUDIO), finanza sistematica e tecnologie interattive.",
  keywords: [
    "Olmo Marchi",
    "olmospace",
    "CRAVED",
    "MIRROR STUDIO",
    "Conceptual Horology",
    "Quant Lab",
    "Roblox Ventures",
    "Creative Direction"
  ],
  authors: [{ name: "Olmo Marchi", url: "https://craved.ch" }],
  creator: "Olmo Marchi",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://olmospace.vercel.app",
    title: "olmospace — Olmo Marchi",
    description:
      "Atelier personale e archivio progetti di Olmo Marchi. CRAVED, MIRROR STUDIO, Quant Lab, AI Lab, Roblox Ventures.",
    siteName: "olmospace",
  },
  twitter: {
    card: "summary_large_image",
    title: "olmospace — Olmo Marchi",
    description: "Atelier personale e archivio progetti di Olmo Marchi.",
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
    <html lang="it" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-white text-zinc-900 antialiased selection:bg-zinc-900 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
