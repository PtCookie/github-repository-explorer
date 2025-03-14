import { createInstance, type i18n } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";

import { defaultLocale, locales } from "./options";

export const initI18next = async (lng: string, instance?: i18n) => {
  const i18nInstance = instance || createInstance();

  i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend((language: string) =>
        import(`./i18n.json`).then((module) => module[language]),
      ),
    );

  await i18nInstance.init({
    supportedLngs: locales,
    fallbackLng: defaultLocale,
    lng,
  });

  return i18nInstance;
};
