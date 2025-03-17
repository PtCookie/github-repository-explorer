import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";

import { defaultLocale, locales } from "./options";

export async function initI18next(lng: string) {
  const i18nInstance = createInstance();

  i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend((language: string) =>
        import(`./i18n.json`).then((module) => module[language]),
      ),
    );

  await i18nInstance.init({
    lng,
    supportedLngs: locales,
    fallbackLng: defaultLocale,
  });

  return i18nInstance;
}
