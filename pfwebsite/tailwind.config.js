/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Bebas: ['Bebas Neue, cursive'],
      Inter: ['Inter, sans-serif']
    },
    boxShadow: {
      'cool': '5px 7px 0px 0px rgb(30 30 30)',
      'cool2': '0px 0px 0px 0px rgb(30 30 30)',
    },
    keyframes: {
      blob: {
        '0%' :{
          transform: ' scale(1)',
        },
        '33%' : {
          transform: 'translate(200px, -50px) scale(1.1)',
        },
        '66%' : {
          transform: 'translate(-250px, 50px) scale(0.9)',
        },
        '100%' : {
          transform: ' scale(1)',
        },
      },
    },
    animation: {
      blob: 'blob 8s infinite',
    },
  },
  plugins: [],
}