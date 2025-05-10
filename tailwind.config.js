/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
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

