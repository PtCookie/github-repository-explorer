import React from "react";

import { initI18next } from "@/locales";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const { t } = await initI18next(lang);

  return <main className="dark:text-white">{t("test")}</main>;
}
