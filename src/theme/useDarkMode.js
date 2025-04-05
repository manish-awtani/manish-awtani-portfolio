/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

export const useDarkMode = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);

    }, [theme])
    
const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
};

  return [theme, toggleTheme];
};
