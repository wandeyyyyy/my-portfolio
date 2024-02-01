/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#1A1D26',
      orange: '#fe6235 ',
      white: '#fbfcfe',
      grey: '#6e6d72'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
opensans: ['Open Sans', 'sans-serif'],
roboto: ['Roboto', 'sans-serif']
     
    },   
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    extend: {},
  },
  plugins: [],
}

