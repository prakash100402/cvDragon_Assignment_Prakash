/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mo': '576px',
      'lo' : '786px', 
    }
  },
  plugins: [
  ],
  darkMode: "class",
}