/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'lightGreen': '#32c974',
        'darkGreen': '#1aa356',
        'lightBlue': '#185d80',
        'darkBlue': '#062C3F',
        'red': '#8a1c1c',
        'yellow': '#FFAC03',
        'gray': '#e6e6e6',
        'white': '#FBFDFC',
        'black': '#111B21',
        'purple':'#7A5197'
      },
      fontFamily: {
        'title': ['Libre Franklin','sans-serif'],
        'subtitle': ['Merriweather Sans', 'sans-serif'],
        'paragraph': ['Numans', 'sans-serif']
      }
    },
    scale: {
      '-100': '-1',
    }
  },
  
  plugins: [],
}