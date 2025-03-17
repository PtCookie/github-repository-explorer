"use client";

import React from "react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="hover:bg-gray-200 dark:hover:bg-gray-600"
    >
      {theme === "light" ? (
        <span className="text-xl">🌙</span>
      ) : (
        <span className="text-xl">☀️</span>
      )}
    </button>
  );
}
