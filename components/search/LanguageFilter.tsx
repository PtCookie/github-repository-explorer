import React, { useState } from "react";
import { useTranslation } from "next-i18next";

type Props = {
  languages: string[];
  onLanguageChange: (language?: string) => void;
};

export function LanguageFilter({ languages, onLanguageChange }: Props) {
  const [language, setLanguage] = useState<string | undefined>(undefined);

  const { t } = useTranslation();

  const availableLanguages = [
    { value: "", label: t("allLanguages") },
    ...languages.map((language) => ({
      value: language,
      label: language,
    })),
  ];

  return (
    <div className="flex items-center">
      <label
        htmlFor="language-select"
        className="mr-2 font-medium dark:text-white"
      >
        {t("filterByLanguage")}:
      </label>
      <select
        value={language || ""}
        onChange={(e) => {
          setLanguage(e.target.value || undefined);
          onLanguageChange(e.target.value || undefined);
        }}
        className="py-2 px-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {availableLanguages.map((language) => (
          <option key={language.value} value={language.value}>
            {language.label}
          </option>
        ))}
      </select>
    </div>
  );
}
