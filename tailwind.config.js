/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensures all your JS/JSX/TSX files in the src folder are processed
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Custom color
        secondary: '#F28D35',
        analogous1: '#6A44F2',
        analogous2: '#1CBDDD',
        triadic1: '#52378C',
        dark: '#78BF91',
        text: '#2F2F2F',
        textLight: '#545A75',
        textSubtle: '#9C9991',
        accent1: '#E2F2FE',
        accent2: '#FFF8E0',
        error: '#FF0335',
        success: '#5EB30B',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
         poppins: ['Poppins', 'sans-serif'],// Custom font
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
      margin: {
        '-105': '-105px',
        '-113.5': '-113.5px',
      },
    },
  },
  plugins: [],
}
