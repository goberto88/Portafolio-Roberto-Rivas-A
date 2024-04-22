/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'MiFuente': ['MiFuente'],
        'Parrafo' : ['Parrafo']
      },
      colors: {
        fondo: '#F2EFE7',
        oscuro: '#222222',
        medio: '#D9D9D9',
        rojo: '#FF3131',
        amarillo: '#F4D10A',
      },
    },
  },
  plugins: [],
}