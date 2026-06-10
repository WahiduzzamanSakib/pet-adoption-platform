"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Check theme on mount
  useEffect(() => {
    const isDarkModeActive =
      document.documentElement.classList.contains("dark");

    setIsDark(isDarkModeActive);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  // Prevent hydration mismatch flash
  if (!mounted) {
    return <section className="min-h-[85vh] bg-white dark:bg-slate-900" />;
  }

  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-50 transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center px-6">

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Vanilla JS{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            Theme Syncing
          </span>
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
          No external dependencies. Controlled directly via native DOM
          manipulation and localStorage inside Next.js.
        </p>

        <button
          onClick={toggleTheme}
          className="px-6 py-3 font-semibold text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 rounded-lg shadow transition-all duration-200"
        >
          {isDark ? "☀️ Switch to Light Mode" : "🌙 Switch to Dark Mode"}
        </button>

      </div>
    </section>
  );
}