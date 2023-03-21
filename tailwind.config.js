/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softRed: '#fb5353',
        darkDesaturatedBlue: '#313152'
      }
    },
  },
  plugins: [],
}
