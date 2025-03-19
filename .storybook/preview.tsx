import React, { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

import { createI18next } from "@/locales/client";
import { defaultLocale } from "@/locales/options";
import "@/app/globals.css";

const i18n = createI18next(defaultLocale);

const preview: Preview = {
  // Create a global variable called locale in storybook
  // and add a menu in the toolbar to change your locale
  globalTypes: {
    locale: {
      description: "I18n locale",
      toolbar: {
        title: "Locale",
        icon: "globe",
        items: [
          { value: "ko", title: "한국어" },
          { value: "en", title: "English" },
        ],
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    // Wrap your stories in the I18nextProvider component
    (Story, context) => {
      const { locale } = context.globals;

      // When the locale global changes
      // Set the new locale in i18n
      useEffect(() => {
        i18n.changeLanguage(locale);
      }, [locale]);

      return (
        // This catches the suspense from components not yet ready (still loading translations)
        // Alternative: set useSuspense to false on i18next.options.react when initializing i18next
        <Suspense fallback={<div>loading translations...</div>}>
          <I18nextProvider i18n={i18n}>
            <Story />
          </I18nextProvider>
        </Suspense>
      );
    },
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
