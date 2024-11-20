/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"DIN Next"', 'sans-serif'],
      },
      backgroundImage: {
        'space': "url('@/assets/bg-img.png')",
        'millennium-falcon': "url('@/assets/millennium-falcon.jpg')",
        'stars': "url('@/assets/stars.jpg')"
      },
      black: "#000000",
      white: "#ffffff"
    }
  },
  plugins: [],
}