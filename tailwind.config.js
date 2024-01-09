/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const color = require('tailwindcss/colors');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.blue,
      borderp: '#33353F',
      gray: '#ADB7BE',
      bgp: '#181818',
      bgs: '#121212',
      bge: '#18181E',
      placeholder: '#9CA2A9',
    },
  },
  plugins: [],
};
