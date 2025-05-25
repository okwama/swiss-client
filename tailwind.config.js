/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#4CAF50',
        bggreen: '#FFFFFF',
      },
    },
  },
  plugins: [],
}