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
      'roseCustom': '#6B1640',
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' }),
  ],
}


