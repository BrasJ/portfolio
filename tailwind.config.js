/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '1/2': '50%',
      },
      screens: {
        'md-lg': '900px',
      }
    },
  },
  plugins: [],
}
