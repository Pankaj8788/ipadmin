/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{ts,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        themeColor: "#0079fb",
        themeColorTwo: "#FFF2C5",
      },
    },
  },
  plugins: [],
};
