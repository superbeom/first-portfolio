/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F7AB0A",
        background: "#363636",
        darkGray: "#242424",
        lightGray: "#4A4848",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
