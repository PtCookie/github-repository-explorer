import React from "react";

import { initI18next } from "@/locales";
import type { Locale } from "@/locales/options";
import LanguageSwitch from "@/components/LanguageSwitch";
import ThemeSwitch from "@/components/ThemeSwitch";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const { t } = await initI18next(lang);

  return (
    <main className="dark:bg-gray-800 dark:text-white">
      <LanguageSwitch lang={lang} />
      <ThemeSwitch />
      {t("test")}
    </main>
  );
}
