module.exports = {
  purge: ['./index.html', './404.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        violet: '#912A5E'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
