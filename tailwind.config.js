/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      rsm: { "max": "615px" },
      rmd:{"max":"767px"},
      rlg:{"max":"1270px"},
      renemy:{"max":"13065px"},
    },
  },
  plugins: [],
}

