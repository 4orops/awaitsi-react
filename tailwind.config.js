/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'awaitsi-blue': {
          DEFAULT: '#0D47A1',
          light: '#1976D2',
          dark: '#01579B',
        },
        'awaitsi-cyan': {
          DEFAULT: '#00BCD4',
          light: '#B2EBF2',
          dark: '#0097A7',
        },
        'awaitsi-green': {
          DEFAULT: '#76FF03',
          light: '#CCFF90',
          dark: '#64DD17',
        },
        'awaitsi-gray': {
          50: '#F8F8F8',
          100: '#EFEFEF',
          200: '#E0E0E0',
          300: '#BDBDBD',
          400: '#9E9E9E',
          500: '#757575',
          600: '#616161',
          700: '#424242',
          800: '#1A1A1A',
          900: '#0C0C0C',
          950: '#080808',
        },
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        'premium': '0 24px 60px rgba(0, 0, 0, 0.15)',
        'inset-top': 'inset 0 1px 0 0 rgba(255,255,255,0.05)',
        'inset-green': 'inset 0 0 0 1px rgba(118,255,3,0.3)',
      },
      dropShadow: {
        'glow': '0 0 16px rgba(0, 188, 212, 0.5)',
        'glow-green': '0 0 16px rgba(118, 255, 3, 0.4)',
      },
      letterSpacing: {
        'ultra': '0.3em',
        'extreme': '0.4em',
      },
      gridTemplateColumns: {
        'bento': 'repeat(3, 1fr)',
        'bento-2': '2fr 1fr',
        'bento-3': '1fr 2fr',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}