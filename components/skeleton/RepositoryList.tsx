import React from "react";

type Props = {
  count?: number;
};

export function RepositoryListSkeleton({ count = 5 }: Props) {
  return (
    <div className="space-y-4 mt-8">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 animate-pulse"
        >
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-4"></div>
          <div className="flex gap-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
