import type { Meta, StoryObj } from "@storybook/react";

import { RepositoryDetail } from "@/components/repository/RepositoryDetail";

const meta: Meta<typeof RepositoryDetail> = {
  title: "Components/Repository/RepositoryDetail",
  component: RepositoryDetail,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RepositoryDetail>;

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

export const Default = {
  args: {
    repository: mockRepository,
  },
} satisfies Story;
