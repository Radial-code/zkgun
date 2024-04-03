/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"], // Add index.html to content for PurgeCSS to detect classes in HTML files
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        dark: "#03031B",
        primary: "#63C796",
        firefly: "#0B1426",
        danger: "#FF2100",
      },
      fontSize: {
        "custom-xl": "120px",
      },
    },
  },
  plugins: [],
};
