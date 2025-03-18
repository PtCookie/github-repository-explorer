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
          className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 animate-pulse"
        >
          <div className="w-1/3 h-6 mb-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="w-full h-4 mb-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="w-2/3 h-4 mb-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="flex gap-4">
            <div className="w-16 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="w-32 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
