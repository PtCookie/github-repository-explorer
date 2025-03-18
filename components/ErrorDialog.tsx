import React from "react";

type Props = {
  message: string;
};

export function ErrorDialog({ message }: Props) {
  return (
    <div className="mt-8 p-4 bg-red-100 dark:bg-red-900 dark:text-red-100 border border-red-300 dark:border-red-700 rounded-md text-center">
      <p className="text-red-700 dark:text-red-100 font-medium">{message}</p>
    </div>
  );
}
