import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";

import { useRepositoryDetails } from "@/hooks/useRepositoryDetails";

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

describe("useRepositoryDetails", () => {
  const mockRepository: Repository = {
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
  };

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should fetch repository details on initial render", async () => {
    // Mocking GitHub API call
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockRepository),
    });

    const { result } = renderHook(
      () => useRepositoryDetails("testUser", "testUser"),
      { wrapper },
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.repository).toBeNull();

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.repository).toEqual(mockRepository);
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

    const { result } = renderHook(
      () => useRepositoryDetails("testUser", "notFound"),
      { wrapper },
    );

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).not.toBeNull();
    });
  });
});
