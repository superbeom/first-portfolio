/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          80: "var(--primary-80)",
          DEFAULT: "var(--primary)",
        },
        background: "var(--background)",
        content: "var(--content)",
        darkGray: "#242424",
        lightGray: "#4A4848",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
