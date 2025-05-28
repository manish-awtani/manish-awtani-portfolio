/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sixty: "1024px", // 60% of 1440px
      },
      fontFamily: {
        gabirato: ["Gabarito", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif", ],
      },
      colors: {
        mblack: "#121212",
        white: "#ffffff",
        softLight: "#f7faff",
        deepDark: "#1e293b",
        accentCyan: "#0ea5e9",
        accentPurple: "#a855f7",
        sand: {
          DEFAULT: "#f5deb3", // soft sand
        },
      },
      animation: {
        borderGradient: "borderGradient 4s ease-in-out infinite",
      },
      keyframes: {
        borderGradient: {
          "0%, 100%": {
            borderColor: "#ff6ec4",
            boxShadow: "0 0 0 2px #ff6ec4",
          },
          "25%": {
            borderColor: "#7873f5",
            boxShadow: "0 0 0 2px #7873f5",
          },
          "50%": {
            borderColor: "#4ADE80",
            boxShadow: "0 0 0 2px #4ADE80",
          },
          "75%": {
            borderColor: "#facc15",
            boxShadow: "0 0 0 2px #facc15",
          },
        },
      },
    },
  },
  plugins: [],
};

