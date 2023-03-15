/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': 'rgb(20, 20, 20 )',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
	     'bg-oussama': 'rgb(14, 14, 14)',

       'ligray':'#303030'
      },
    },
  },
  plugins: [],
}