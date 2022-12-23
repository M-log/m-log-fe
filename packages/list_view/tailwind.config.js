/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
const px0_300 = { ...Array.from(Array(301)).map((_, i) => `${i}px`) };
const px0_400 = { ...Array.from(Array(401)).map((_, i) => `${i}px`) };

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        darkgray: '#6A6A6A',
        lightgray: '#D7D7D7',
        lightgray2: '#EFEFEF',
      },
      spacing: px0_400,
      fontSize: px0_100,
      lineHeight: px0_100,
    },
  },
  plugins: [
    'macros',
    plugin(function ({ addComponents }) {
      // add custom style
    }),
  ],
};
