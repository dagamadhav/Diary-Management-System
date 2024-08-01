/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green2": "#178a25",
        "green3" : "#1fb831",
        "green4" : "#1ec932",
        "green5" : "#48db5a",
        "green": "#1ba12b",
        "red": "#FF6868",
        "secondary": "#555",
        "prigmayBG": "#FCFCFC",
        "base": "#fffefc"
      }
    },
  },
  plugins: [require('daisyui')],
}

