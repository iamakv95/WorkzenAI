/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      green: "#13ce66",
      white: "#ffffff",
      offwhite: "#adb5bd",
      darkGray: "#0b090a",
      black: "#000000",
      transparent: "transparent",
      current: "currentColor",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {},
  },
  plugins: [],
};
