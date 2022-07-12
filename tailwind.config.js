/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
}
