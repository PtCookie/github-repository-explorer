import i18n from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";

import { defaultLocale, locales } from "./options";

export function createI18next(lng: string) {
  i18n
    .use(initReactI18next)
    .use(
      resourcesToBackend((language: string) =>
        import(`./i18n.json`).then((module) => module[language]),
      ),
    )
    .init({
      supportedLngs: locales,
      fallbackLng: defaultLocale,
      lng,
    });

  return i18n;
}
