import React from "react";
import { I18nextProvider } from "react-i18next";
import { render, screen } from "@testing-library/react";

import { createI18next } from "@/locales/client";
import { defaultLocale } from "@/locales/options";
import { RepositoryDetail } from "@/components/repository/RepositoryDetail";
import i18nJson from "@/locales/i18n.json";

const i18n = createI18next(defaultLocale);
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);

describe("RepositoryDetail", () => {
  const mockRepository: Repository = {
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
    html_url: "https://github.com/testUser/homepage",
    description: "Homepage repository description",
    fork: false,
    created_at: "2025-01-02T00:00:00Z",
    updated_at: "2025-01-04T00:00:00Z",
    pushed_at: "2025-01-04T00:00:00Z",
    stargazers_count: 32,
    watchers_count: 0,
    language: "TypeScript",
    forks_count: 2,
    open_issues_count: 7,
  };

  test("renders repository details correctly", async () => {
    render(<RepositoryDetail repository={mockRepository} />, { wrapper });

    await screen.findByTestId("repository-detail");

    // Repository name
    expect(screen.getByText("homepage")).toBeInTheDocument();

    // Description
    expect(
      screen.getByText("Homepage repository description"),
    ).toBeInTheDocument();

    // Statistics
    expect(
      screen.getByText(i18nJson[defaultLocale].statistics),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${i18nJson[defaultLocale].stars}: 32`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${i18nJson[defaultLocale].forks}: 2`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${i18nJson[defaultLocale].openIssues}: 7`),
    ).toBeInTheDocument();

    // Details
    expect(
      screen.getByText(i18nJson[defaultLocale].details),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${i18nJson[defaultLocale].owner}:`),
    ).toBeInTheDocument();
    expect(screen.getByText("testUser")).toBeInTheDocument();
    expect(
      screen.getByText(`${i18nJson[defaultLocale].primaryLanguage}:`),
    ).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();

    // GitHub link
    const githubLink = screen.getByText(i18nJson[defaultLocale].viewOnGitHub);
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/testUser/homepage",
    );
  });

  test("renders repository with null language correctly", async () => {
    const repoWithoutLanguage = {
      ...mockRepository,
      language: null,
    };

    render(<RepositoryDetail repository={repoWithoutLanguage} />, { wrapper });

    await screen.findByTestId("repository-detail");

    expect(
      screen.getByText(i18nJson[defaultLocale].notSpecified),
    ).toBeInTheDocument();
  });
});
