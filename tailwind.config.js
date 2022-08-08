/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
		scale: {
		'175': '1.75',
		'200': '2.00',
		}
	},
  },
}
