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
        "background-light": "var(--background-light)",
        content: {
          10: "var(--content-10)",
          DEFAULT: "var(--content)",
        },
      },
      keyframes: {
        "opposite-ping": {
          "0%": {
            transform: "scale(-1)",
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
