/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        header: ["Lexend", "sans-serif"],
      },
      colors: {
        teal: "#45D6E2",
        primary: "#24232A",
        secondary: "#6B6A7E",
      },
    },
  },
  plugins: [],
};
