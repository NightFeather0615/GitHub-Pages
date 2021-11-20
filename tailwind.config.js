module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'google-sans-regular': ['Google Sans Regular'],
      'google-sans-medium': ['Google Sans Medium'],
      'google-sans-bold': ['Google Sans Bold'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
