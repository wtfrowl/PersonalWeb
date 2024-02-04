/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poor: ['"Poor Story"', ...defaultTheme.fontFamily.sans],
        rbt: ['"Roboto+Condensed"', ...defaultTheme.fontFamily.sans],
        
    },
  },
  plugins: [],
}

}