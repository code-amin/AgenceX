/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      MyFont: ['"Barlow Condensed"', "sans-serif"],
    },
    extend: {},
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
};
