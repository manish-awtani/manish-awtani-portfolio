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
      className=" w-11 h-11 text-xl p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 dark:bg-zinc-900 bg-gray-100"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}

export default ThemeToggle;