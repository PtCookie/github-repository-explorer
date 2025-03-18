"use client";

import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useTranslation } from "next-i18next";

import { useRepositories } from "@/hooks/useRepositories";
import { SearchBar } from "@/components/search/SearchBar";
import { LanguageFilter } from "@/components/search/LanguageFilter";
import { SortControl } from "@/components/search/SortControl";
import { RepositoryList } from "@/components/repository/RepositoryList";
import { RepositoryListSkeleton } from "@/components/skeleton/RepositoryList";
import { ErrorDialog } from "@/components/ErrorDialog";

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);

  const { t } = useTranslation();

  const {
    repositories,
    availableLanguages,
    loading,
    error,
    hasMore,
    loadMore,
    updateSort,
    updateLanguage,
  } = useRepositories(username);

  const handleSearch = (searchUsername: string) => {
    setUsername(searchUsername);
    setSearchPerformed(true);
  };

  return (
    <main
      className={`container mx-auto px-4 py-8 flex-1 flex flex-col${
        !searchPerformed ? " justify-center items-center" : ""
      }`}
    >
      <h1 className="mb-12 text-3xl font-bold text-center dark:text-white">
        {t("title")}
      </h1>
      <SearchBar onSearch={handleSearch} />
      {searchPerformed && (
        <div className="mt-4 flex flex-wrap gap-4">
          <LanguageFilter
            languages={availableLanguages}
            onLanguageChange={(language) => updateLanguage(language)}
          />
          <SortControl onSortChange={(sort) => updateSort(sort)} />
        </div>
      )}
      {error && <ErrorDialog message={t("apiError")} />}
      {searchPerformed && !error && (
        <>
          {repositories.length === 0 && !loading ? (
            <p className="mt-8 text-center dark:text-white">
              {t("noRepositoriesFound")}
            </p>
          ) : (
            <InfiniteScroll
              dataLength={repositories.length}
              next={loadMore}
              hasMore={hasMore}
              loader={<RepositoryListSkeleton count={3} />}
              endMessage={
                <p className="text-center mt-8 dark:text-white">
                  {t("noMoreRepositories")}
                </p>
              }
              className="mt-8"
            >
              <RepositoryList repositories={repositories} />
            </InfiniteScroll>
          )}
        </>
      )}
      {loading && repositories.length === 0 && (
        <RepositoryListSkeleton count={5} />
      )}
    </main>
  );
}
