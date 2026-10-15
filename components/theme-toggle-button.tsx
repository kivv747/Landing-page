"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggleButton() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? theme === "dark" : true;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ganti ke tema terang" : "Ganti ke tema gelap"}
      aria-pressed={mounted && isDark}
      title={isDark ? "Ganti ke tema terang" : "Ganti ke tema gelap"}
      className="inline-flex size-11 items-center justify-center border border-[#c7c7bc] bg-white/70 text-[#252820] transition-colors hover:border-[#b83b24] hover:text-[#b83b24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b83b24] dark:border-white/15 dark:bg-white/[0.04] dark:text-[#f3f0e6] dark:hover:border-[#ff7659] dark:hover:text-[#ff7659] dark:focus-visible:ring-[#ff7659]"
    >
      {isDark ? <Sun aria-hidden="true" size={18} /> : <Moon aria-hidden="true" size={18} />}
    </button>
  );
}