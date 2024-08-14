/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the paths to all of your template files
  content: [
    "./src/**/*.{html,ts}", // Adjust this path according to your project's structure
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      // Custom colors
      colors: {
        customBlue: '#1DA1F2',
        customGray: '#F5F5F5',
      },
      // Custom font sizes
      fontSize: {
        'xxs': '.65rem',
        'xxl': '1.5rem',
      },
      // Custom spacing
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [
    // Add any plugins you need here
  ],
  // Add any variants you need here
  variants: {
    extend: {},
  },
}
