const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-mint': '#F1F7EE', 
        'brand-ash': '#B0BEA9',  
        'brand-accent': '#92AA83',
        'brand-green': '#ABCE64',
        'brand-tea': '#C4DD92',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

