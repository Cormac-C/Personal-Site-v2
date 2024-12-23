/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "theme-blue": "#597ede",
        "theme-blue-accent": "#4160b0",
        "theme-blue-light": "#cdd8f5"
      },
      spacing: {
        "body-min": "calc(100vh - 128px - 1rem)",
        "max-margin": "max(128px, 10%)"
      }
    }
  },
  plugins: []
};
