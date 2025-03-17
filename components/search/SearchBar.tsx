import React, { useState } from "react";
import { useTranslation } from "next-i18next";

type Props = {
  onSearch: (username: string) => void;
};

export function SearchBar({ onSearch }: Props) {
  const [username, setUsername] = useState<string>("");

  const { t } = useTranslation();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto flex">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder={t("enterUsername")}
        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        data-testid="username-input"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-medium rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        data-testid="search-button"
      >
        {t("search")}
      </button>
    </form>
  );
}
