import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";

import { useRepositories } from "@/hooks/useRepositories";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useRepositories", () => {
  const mockRepositories: Array<Repository> = [
    {
      id: 1,
      name: "testUser",
      full_name: "testUser/testUser",
      private: false,
      owner: {
        login: "testUser",
        id: 1,
        avatar_url: "",
        gravatar_id: "",
        html_url: "",
        type: "User",
      },
      html_url: "",
      description: "Config files for my GitHub profile.",
      fork: false,
      created_at: "2025-01-01T00:00:00Z",
      updated_at: "2025-01-02T00:00:00Z",
      pushed_at: "2025-01-02T00:00:00Z",
      stargazers_count: 0,
      watchers_count: 0,
      language: null,
      forks_count: 0,
      open_issues_count: 0,
    },
    {
      id: 2,
      name: "blog",
      full_name: "testUser/blog",
      private: false,
      owner: {
        login: "testUser",
        id: 1,
        avatar_url: "",
        gravatar_id: "",
        html_url: "",
        type: "User",
      },
      html_url: "",
      description: "Blog",
      fork: false,
      created_at: "2025-01-02T00:00:00Z",
      updated_at: "2025-01-03T00:00:00Z",
      pushed_at: "2025-01-03T00:00:00Z",
      stargazers_count: 0,
      watchers_count: 0,
      language: "MDX",
      forks_count: 0,
      open_issues_count: 0,
    },
    {
      id: 3,
      name: "homepage",
      full_name: "testUser/homepage",
      private: false,
      owner: {
        login: "testUser",
        id: 1,
        avatar_url: "",
        gravatar_id: "",
        html_url: "",
        type: "User",
      },
      html_url: "",
      description: "Homepage",
      fork: false,
      created_at: "2025-01-02T00:00:00Z",
      updated_at: "2025-01-04T00:00:00Z",
      pushed_at: "2025-01-04T00:00:00Z",
      stargazers_count: 0,
      watchers_count: 0,
      language: "TypeScript",
      forks_count: 0,
      open_issues_count: 0,
    },
  ];

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should fetch repositories on initial render", async () => {
    // Mocking GitHub API call
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockRepositories),
    });

    const { result } = renderHook(() => useRepositories("testUser"), {
      wrapper,
    });

    expect(result.current.loading).toBe(true);
    expect(result.current.repositories).toEqual([]);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.repositories).toEqual(mockRepositories);
    });
  });

  test("should handle API errors", async () => {
    // Mocking GitHub API call
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 404,
      json: () => Promise.resolve([]),
    });
    console.error = jest.fn();

    const { result } = renderHook(() => useRepositories("notFound"), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).not.toBeNull();
    });
  });
});
