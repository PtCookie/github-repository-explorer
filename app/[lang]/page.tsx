"use client";

import React, { useState } from "react";
import { useTranslation } from "next-i18next";

import { useRepositories } from "@/hooks/useRepositories";
import { SearchBar } from "@/components/search/SearchBar";

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);

  const { t } = useTranslation();

  const {} = useRepositories(username);

  const handleSearch = (searchUsername: string) => {
    setUsername(searchUsername);
    setSearchPerformed(true);
  };

  return (
    <main
      className={`container mx-auto px-4 py-8 flex-1 flex flex-col${!searchPerformed ? " justify-center items-center" : ""}`}
    >
      <h1 className="mb-12 text-3xl font-bold text-center dark:text-white">
        {t("title")}
      </h1>
      <SearchBar onSearch={handleSearch} />
    </main>
  );
}
