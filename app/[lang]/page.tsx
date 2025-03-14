import React from "react";

import { initI18next } from "@/locales";
import type { Locale } from "@/locales/options";
import LanguageSwitch from "@/components/LanguageSwitch";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const { t } = await initI18next(lang);

  return (
    <div>
      <LanguageSwitch lang={lang} />
      {t("test")}
    </div>
  );
}
