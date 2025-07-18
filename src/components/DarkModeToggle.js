import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full text-white hover:bg-gray-700 transition dark:text-yellow-400"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
}
