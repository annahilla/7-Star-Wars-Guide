/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"DIN Next"', 'sans-serif'],
        'starwars': ['"Star Wars"', 'sans-serif'],
      },
      backgroundImage: {
        'stars': "url('@/assets/stars.jpg')"
      },
      black: "#000000",
      white: "#ffffff"
    }
  },
  plugins: [],
}