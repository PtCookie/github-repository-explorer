import React from "react";
import { I18nextProvider } from "react-i18next";
import { render, screen } from "@testing-library/react";

import { createI18next } from "@/locales/client";
import { defaultLocale } from "@/locales/options";
import { RepositoryList } from "@/components/repository/RepositoryList";
import i18nJson from "@/locales/i18n.json";

const i18n = createI18next(defaultLocale);
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);

describe("RepositoryList", () => {
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
      stargazers_count: 123,
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
      stargazers_count: 456,
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
      stargazers_count: 789,
      watchers_count: 0,
      language: "TypeScript",
      forks_count: 0,
      open_issues_count: 0,
    },
  ];

  test("renders a list of repositories", async () => {
    render(<RepositoryList repositories={mockRepositories} />, { wrapper });

    await screen.findByTestId("repository-list");

    expect(screen.getAllByTestId("repository-item")).toHaveLength(3);

    expect(screen.getByText("testUser")).toBeInTheDocument();
    expect(screen.getByText("blog")).toBeInTheDocument();
    expect(screen.getByText("homepage")).toBeInTheDocument();

    // Check if stars are displayed
    expect(screen.getByText("123")).toBeInTheDocument();
    expect(screen.getByText("456")).toBeInTheDocument();
    expect(screen.getByText("789")).toBeInTheDocument();

    // Check if languages are displayed
    expect(screen.getByText("MDX")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();

    // Check if updatedAt are displayed
    expect(
      screen.getByText(`${i18nJson[defaultLocale].updated}: 2025-01-02`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${i18nJson[defaultLocale].updated}: 2025-01-03`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${i18nJson[defaultLocale].updated}: 2025-01-04`),
    ).toBeInTheDocument();
  });

  test("renders an empty list when no repositories are provided", async () => {
    render(<RepositoryList repositories={[]} />, { wrapper });

    await screen.findByTestId("repository-list");

    expect(screen.queryAllByTestId("repository-item")).toHaveLength(0);
  });
});
