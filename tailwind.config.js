const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      display: ['Inter', 'sans-serif']
    },
    colors: {
      ...colors
    }
  },
  plugins: [],
}

