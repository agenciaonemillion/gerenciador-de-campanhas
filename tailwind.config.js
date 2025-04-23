/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F4C81', // Deep blue as primary color
          light: '#1A6CA8',
          dark: '#0A3259',
        },
        secondary: {
          DEFAULT: '#F3F4F6',
          dark: '#D1D5DB',
        },
        accent: {
          DEFAULT: '#3B82F6',
        },
      },
    },
  },
  plugins: [],
}
