"use client";

import { RiMoonClearLine, RiSunLine } from "@remixicon/react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="border p-2 fixed top-4 right-4 z-[9999] rounded-full border-neutral hover:border-none hover:bg-neutral/10 dark:hover:bg-neutral-dark/90"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? (
        <RiMoonClearLine className="size-5" />
      ) : (
        <RiSunLine className="size-5" />
      )}
    </button>
  );
}
