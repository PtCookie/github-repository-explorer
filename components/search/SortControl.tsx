import React, { useState } from "react";
import { useTranslation } from "next-i18next";

type Props = {
  onSortChange: (sort: Sort) => void;
};

export function SortControl({ onSortChange }: Props) {
  const [sort, setSort] = useState<Sort>("updated");

  const { t } = useTranslation();

  return (
    <div className="flex items-center">
      <label htmlFor="sort-select" className="mr-2 font-medium dark:text-white">
        {t("sortBy")}:
      </label>
      <select
        defaultValue={sort}
        onChange={(e) => {
          setSort(e.target.value as Sort);
          onSortChange(e.target.value as Sort);
        }}
        className="py-2 px-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="updated">{t("lastUpdated")}</option>
        <option value="stars">{t("mostStars")}</option>
      </select>
    </div>
  );
}
