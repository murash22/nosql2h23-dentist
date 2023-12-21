/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ["Poppins", "sans-serif"]
    },
    extend: {},
    colors: {
      darkBlue: "#4A90E2",
      base1: "#FF6B6B",
      base2: "#6EC5CC",
      base3: "#5CC9A8",
      white: "#FFFFFF",
      darkPurple: "#202660",
      additional: "#A7D7C5"
    }
  },
  plugins: [],
}

