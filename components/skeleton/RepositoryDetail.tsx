import React from "react";

export function RepositoryDetailSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 animate-pulse">
      <div className="w-1/3 h-8 mb-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="w-full h-4 mb-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="w-2/3 h-4 mb-6 bg-gray-200 dark:bg-gray-700 rounded"></div>

      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="w-24 h-6 mb-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="space-y-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded"
              ></div>
            ))}
          </div>
        </div>

        <div>
          <div className="w-24 h-6 mb-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="space-y-2">
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded"
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-40 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
  );
}
