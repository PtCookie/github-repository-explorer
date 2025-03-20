import React from "react";
import Link from "next/link";

import { initI18next } from "@/locales";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeSwitch } from "./ThemeSwitch";

type Props = {
  lang: Locale;
};

export async function Header({ lang }: Props) {
  const { t } = await initI18next(lang);

  return (
    <header className="bg-gray-200 dark:bg-gray-600 shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          {t("title")}
        </Link>
        <div className="flex items-center space-x-4">
          <LanguageSwitch lang={lang} />
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
