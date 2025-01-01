/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['poppins', 'serif'],
        pacifico: ['pacifico', 'serif']
      },
      height: {
        '70': '70px'
      },
      boxShadow: {
        bottom: '0 10px 12px 12px rgba(0,0,0, 0.1)',
        cardShadow: '0 2px 4px rgb(0, 0, 0,0.1)'
      },
      colors:{
        customGreen: '#00b28c'
      }
    },
  },
  plugins: [],
}