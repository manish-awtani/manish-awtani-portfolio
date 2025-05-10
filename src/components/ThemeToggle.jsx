/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { useDarkMode } from '../theme/useDarkMode';
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = () => {
    const [theme, toggleTheme] = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="text-xl p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 dark:bg-gray-900 bg-gray-100">
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}

export default ThemeToggle;