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
        content: {
          10: "var(--content-10)",
          DEFAULT: "var(--content)",
        },
        darkGray: "#242424",
        lightGray: "#4A4848",
      },
      keyframes: {
        "opposite-ping": {
          "0%": {
            transform: "scale(-2)",
            opacity: 0,
          },
        },
      },
      animation: {
        "slow-ping": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "opposite-ping": "opposite-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
