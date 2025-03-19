import type { Meta, StoryObj } from "@storybook/react";

import { RepositoryList } from "@/components/repository/RepositoryList";

const meta: Meta<typeof RepositoryList> = {
  title: "Components/Repository/RepositoryList",
  component: RepositoryList,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RepositoryList>;

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

export const WithRepositories = {
  args: {
    repositories: mockRepositories,
  },
} satisfies Story;

export const EmptyList = {
  args: {
    repositories: [],
  },
} satisfies Story;
