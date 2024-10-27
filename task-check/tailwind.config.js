/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cinzaescuro': '#111827',
        'vermelho': '#b91c1c',
      },
    },
  },
  plugins: [],
}