// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   roboto: ['Roboto', 'sans-serif'],
      // },
       fontFamily: {
        sans: ['Roboto', 'sans-serif'], // ← 整個網站的 sans-serif 字體改成 Roboto
      },
    },
  },
  plugins: [],
}