import React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_KR } from "next/font/google";
import { dir } from "i18next";

import { type Locale, locales } from "@/locales/options";
import Header from "@/components/Header";
import "../globals.css";

type Props = Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  preload: false,
});

export const metadata: Metadata = {
  title: "GitHub Repository Explorer",
  description: "GitHub Repository Explorer with Multi-language Support",
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;

  return (
    <html lang={lang} dir={dir(lang)}>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} ${notoSansKR.variable} antialiased bg-white dark:bg-gray-800 min-h-screen`}
      >
        <Header lang={lang} />
        {children}
      </body>
    </html>
  );
}
