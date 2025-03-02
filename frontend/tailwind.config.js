/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'uber-black': '#000000',
        'uber-white': '#FFFFFF',
        'uber-gray': '#F6F6F6',
      },
    },
  },
  plugins: [],
}
