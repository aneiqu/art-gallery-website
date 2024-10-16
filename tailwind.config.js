import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        gold: "#D5966C",
        almostBlack: "#151515",
        darkGray: "#444444",
      },
    },
  },
  plugins: [],
};
