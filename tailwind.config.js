/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'awaitsi-blue': '#0D47A1',
        'awaitsi-cyan': '#00BCD4',
        'awaitsi-green': '#76FF03',
        'awaitsi-gray': '#212121',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}