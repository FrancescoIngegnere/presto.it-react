/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html",
    "./node_modules/tw-elements/dist/js/**/*.js"
 ],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}

