import { useQuery } from "@tanstack/react-query";

const API_BASE_URL = "https://api.github.com";

async function getRepositoryDetails(
  username: string,
  repo: string,
): Promise<Repository> {
  try {
    const url = `${API_BASE_URL}/repos/${username}/${repo}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching repository details:", error);
    throw error;
  }
}

export function useRepositoryDetails(username: string, repo: string) {
  const {
    data: repository,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["repository", username, repo],
    queryFn: () => getRepositoryDetails(username, repo),
    enabled: !!username && !!repo,
  });

  return {
    repository: repository || null,
    loading: isLoading,
    error: isError ? error : null,
  };
}
