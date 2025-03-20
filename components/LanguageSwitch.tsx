"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  lang: Locale;
};

export function LanguageSwitch({ lang }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const onLanguageChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event,
  ) => {
    const locale = event.target.value;

    router.push(pathname.replace(`/${lang}`, `/${locale}`));
  };

  return (
    <select
      value={lang}
      onChange={onLanguageChange}
      className="py-2 px-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="en">English</option>
      <option value="ko">한국어</option>
    </select>
  );
}
