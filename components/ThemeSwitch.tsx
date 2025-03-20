"use client";

import React from "react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-2 py-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500"
    >
      {theme === "light" ? (
        <span className="text-xl">🌙</span>
      ) : (
        <span className="text-xl">☀️</span>
      )}
    </button>
  );
}
