module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#00e5fc",
          other: "#f3e6e3"
        }
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
