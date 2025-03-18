"use client";

import React, { use } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { useRepositoryDetails } from "@/hooks/useRepositoryDetails";
import { RepositoryDetail } from "@/components/repository/RepositoryDetail";
import { RepositoryDetailSkeleton } from "@/components/skeleton/RepositoryDetail";
import { ErrorDialog } from "@/components/ErrorDialog";

type Props = {
  params: Promise<{
    user: string;
    repo: string;
  }>;
};

export default function Detail({ params }: Props) {
  const { user, repo } = use(params);

  const { t, i18n } = useTranslation();

  const { repository, loading, error } = useRepositoryDetails(user, repo);

  return (
    <main className="container mx-auto px-4 py-8">
      <Link
        href={`/${i18n.language}`}
        className="inline-block mb-6 text-blue-500 hover:underline"
      >
        &larr; {t("backToSearch")}
      </Link>
      {loading && <RepositoryDetailSkeleton />}
      {error && <ErrorDialog message={t("repoFetchError")} />}
      {!loading && !error && !repository && (
        <ErrorDialog message={t("repoNotFound")} />
      )}
      {!loading && !error && repository && (
        <RepositoryDetail repository={repository} />
      )}
    </main>
  );
}
