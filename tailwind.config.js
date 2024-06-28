/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"PT Serif"', 'serif'],
        nunito: ['"Nunito"', 'nunito'],
        chocolate: ['"Chocolate"', 'chocolate'],
        roboto: ['"Roboto"', 'roboto'],
      },
    },
  },
  plugins: [],
}