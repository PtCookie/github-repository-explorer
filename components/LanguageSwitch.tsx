"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

import type { Locale } from "@/locales/options";

type Props = {
  lang: Locale;
};

export default function LanguageSwitch({ lang }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const onLanguageChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event,
  ) => {
    const locale = event.target.value;

    router.push(pathname.replace(`/${lang}`, `/${locale}`));
  };

  return (
    <select value={lang} onChange={onLanguageChange}>
      <option value="en">English</option>
      <option value="ko">한국어</option>
    </select>
  );
}
