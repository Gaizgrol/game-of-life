module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    options: {
      safelist: ['grid-cols-1', 'grid-cols-2', 'grid-cols-4'],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          700: '#527ba8',
          600: '#608cbd',
          500: '#6A96C7', // default
          400: '#76a6db',
          300: '#82b5ed',
          200: '#b4d5fa',
          100: '#F3F5FA',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Antwerp', 'serif'],
      },
    },
  },
  variants: {},
}
