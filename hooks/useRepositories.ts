import { useState } from "react";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";

const API_BASE_URL = "https://api.github.com";

async function getRepositories(
  username: string,
  page: number = 1,
  perPage: number = 10,
  sort: Sort = "updated",
): Promise<Repository[]> {
  try {
    const url = `${API_BASE_URL}/users/${username}/repos?page=${page}&per_page=${perPage}${sort === "updated" ? "&sort=updated" : ""}&direction=desc`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
}

export function useRepositories(
  username: string,
  initialParams: Omit<SearchParams, "page"> = { perPage: 10, sort: "updated" },
) {
  const [searchParams, setSearchParams] =
    useState<Omit<SearchParams, "page">>(initialParams);
  const queryClient = useQueryClient();

  const { data, error, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ["repositories", username, searchParams],
      queryFn: async ({ pageParam = 1 }) => {
        return getRepositories(
          username,
          pageParam,
          searchParams.perPage,
          searchParams.sort,
        );
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, _allPages, lastPageParam) => {
        if (lastPage.length === 0) {
          return undefined;
        }
        return lastPageParam + 1;
      },
      enabled: !!username,
    });

  // Flatten the pages into a single array of repositories
  let repositories = data?.pages.flat() || [];

  // Extract unique languages from repositories
  const availableLanguages = [
    ...new Set(
      repositories.map((repo) => repo.language).filter(Boolean) as string[],
    ),
  ];

  const updateSort = (sort: Sort) => {
    setSearchParams({ ...searchParams, sort });

    queryClient.invalidateQueries({ queryKey: ["repositories", username] });
  };

  const updateLanguage = (language?: string) => {
    setSearchParams({ ...searchParams, language });

    queryClient.invalidateQueries({ queryKey: ["repositories", username] });
  };

  if (searchParams.language) {
    repositories = repositories.filter(
      (repo: Repository) => repo.language === searchParams.language,
    );
  }

  if (searchParams.sort === "stars") {
    repositories = repositories.sort(
      (a, b) => b.stargazers_count - a.stargazers_count,
    );
  }

  return {
    repositories,
    availableLanguages,
    loading: isLoading,
    error: isError ? error : null,
    hasMore: hasNextPage,
    loadMore: fetchNextPage,
    updateSort,
    updateLanguage,
  };
}
