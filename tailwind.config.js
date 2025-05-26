/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'search-title': '#1a0dab',
        'search-url': '#006621',
        'search-text': '#4d5156',
      }
    },
  },
  plugins: [],
}