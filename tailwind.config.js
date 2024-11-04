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


