/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'xl' : '0 0 10px rgba(248, 232, 232, 0.25)',
        '3xl': '0 0 25px rgba(166, 158, 158, 0.3)',
        '4xl': '0 0 25px rgba(208, 196, 196, 0.751)'
      },
      colors: {
        'background': '#06201c',
        'background-two': '#0d1f3c'
      }
    },
  },
  plugins: [],
}

