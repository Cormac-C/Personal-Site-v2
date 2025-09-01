module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'theme-blue': '#597ede',
        'theme-blue-accent': '#4160b0',
        'theme-blue-light': '#cdd8f5'
      },
      spacing: {
        'body-min': 'calc(100vh - 128px - 1rem)',
        'max-margin': 'max(128px, 10%)'
      }
    }
  },
  plugins: []
};
