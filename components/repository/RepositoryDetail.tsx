import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { format, parseISO } from "date-fns";

type Props = {
  repository: Repository;
};

export function RepositoryDetail({ repository }: Props) {
  const { t } = useTranslation();

  return (
    <div
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
      data-testid="repository-detail"
    >
      <h1 className="mb-2 text-3xl font-bold dark:text-white">
        {repository.name}
      </h1>
      {repository.description && (
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          {repository.description}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="mb-3 text-xl font-semibold dark:text-white">
            {t("statistics")}
          </h2>
          <ul className="space-y-2 dark:text-gray-300">
            <li className="flex items-center">
              <span>⭐</span>
              <span className="ml-2">
                {t("stars")}: {repository.stargazers_count.toLocaleString()}
              </span>
            </li>
            <li className="flex items-center">
              <span>🍴</span>
              <span className="ml-2">
                {t("forks")}: {repository.forks_count.toLocaleString()}
              </span>
            </li>
            <li className="flex items-center">
              <span>🚨</span>
              <span className="ml-2">
                {t("openIssues")}:{" "}
                {repository.open_issues_count.toLocaleString()}
              </span>
            </li>
            <li className="flex items-center">
              <span>🕒</span>
              <span className="ml-2">
                {t("updated")}:{" "}
                {format(parseISO(repository.updated_at), "yyyy-MM-dd")}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold dark:text-white">
            {t("details")}
          </h2>
          <ul className="space-y-2 dark:text-gray-300">
            <li>
              <span className="font-medium">{t("owner")}:</span>{" "}
              <Link
                href={`https://github.com/${repository.owner.login}`}
                className="text-blue-500 hover:underline"
              >
                {repository.owner.login}
              </Link>
            </li>
            <li>
              <span className="font-medium">{t("primaryLanguage")}:</span>{" "}
              {repository.language || t("notSpecified")}
            </li>
          </ul>
        </div>
      </div>

      <Link
        href={repository.html_url}
        className="px-6 py-2 inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium rounded"
      >
        {t("viewOnGitHub")}
      </Link>
    </div>
  );
}
