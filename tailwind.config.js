/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        questrial: ["Questrial", "sans-serif"],
      },
      keyframes: {
        flyInRight: {
          "0%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        flyInLeft: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        flyInUp: {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        flyInRight: "flyInRight 1.5s",
        flyInLeft: "flyInLeft 1.5s",
        flyInUp: "flyInUp 1.5s",
      },
    },
  },
  variants: {},
  plugins: [],
  darkMode: "class",
};
