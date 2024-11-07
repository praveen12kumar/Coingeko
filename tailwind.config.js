/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'nunito': ['Nunito', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation:{
        'up-down': 'up-down 1.5s ease-in-out infinite alternate'
      },
      keyframes:{
        'up-down':{
          '0%':{
            transform: 'translateY(-20px)'
          },
          '100%':{
            transform: 'translateY(20px)'
          }
        }
      }
    },
  },
  plugins: [],
}