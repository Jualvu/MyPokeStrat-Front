/** @type {import('tailwindcss').Config} */
const colorsDefault = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colorsDefault,
      'roseCustom': '#471830',
      'lightRoseCustom': '#521b36',
      'roseCustomDark': '#2b0e1d',
      'violetCustom': '#100233'
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' }),
  ],
}


