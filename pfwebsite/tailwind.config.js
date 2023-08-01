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
      blob2: {
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
      blob3: {
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
      'slideup': {
        '0%': { transform: 'translateY(20%)'},
        '10%': { transform: 'translateY(0%)', opacity:1},
        '65%': {transform: 'translateY(0%)', opacity:1},
        '100%': { transform: 'translateY(-70%)', opacity: 0},
      },
      'bounce': {
        '0%, 100%': { transform: 'translateY(0)', rotate: '-2deg' },
        '50%': { transform: 'translateY(-10%)', rotate: '2deg' }
      }
    },
    animation: {
      blob: 'blob 8s infinite',
      blob2: 'blob2 6s infinite',
      blob3: 'blob3 7s infinite',
      slideup: 'slideup 3s linear infinite',
      bounce: 'bounce 7s infinite',
    },
  },
  plugins: [],
}