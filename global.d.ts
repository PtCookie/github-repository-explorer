type Locale = "ko" | "en";
type Sort = "updated" | "stars";

interface Repository {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    gravatar_id: string;
    type: string;
  };
  html_url: string;
  description: string;
  fork: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  forks_count: number;
  open_issues_count: number;
}

interface SearchParams {
  page: number;
  perPage: number;
  sort: Sort;
  language?: string;
}
