/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        syntxBlue: '#E7EDFC',
        syntxGreen: '#7DFF4B',
        syntxPink: '#FF00C7',
      },
    },
  },
  plugins: [],
}
