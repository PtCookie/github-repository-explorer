"use client";

import React from "react";
import { I18nextProvider } from "react-i18next";

import { createI18next } from "@/locales/client";

type Props = {
  lang: Locale;
  children: React.ReactNode;
};

export function TranslationProvider({ lang, children }: Props) {
  const i18n = createI18next(lang);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
