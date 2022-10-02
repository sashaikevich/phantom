/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./stories/*", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
      // "border-highlight": "blue"
      },
    },
  },
  plugins: [],
  prefix: 'tw-'
}
