import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { format, parseISO } from "date-fns";

type Props = {
  repositories: Repository[];
};

export function RepositoryList({ repositories }: Props) {
  const { t, i18n } = useTranslation();

  return (
    <ul className="space-y-4" data-testid="repository-list">
      {repositories.map((repo) => (
        <li
          key={repo.id}
          className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
          data-testid="repository-item"
        >
          <Link
            href={`/${i18n.language}/${repo.owner.login}/${repo.name}`}
            className="block hover:no-underline"
          >
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              {repo.name}
            </h2>
            {repo.description && (
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {repo.description}
              </p>
            )}
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <span>⭐</span>
                <span className="ml-1">
                  {repo.stargazers_count.toLocaleString()}
                </span>
              </div>
              {repo.language && (
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
                  <span>{repo.language}</span>
                </div>
              )}
              <div className="flex items-center">
                <span className="mr-1">🕒</span>
                <span>
                  {t("updated")}:{" "}
                  {format(parseISO(repo.updated_at), "yyyy-MM-dd")}
                </span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
