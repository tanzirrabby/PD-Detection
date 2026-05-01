/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        medicalBlue: '#1d4ed8',
        medicalGreen: '#059669',
      },
    },
  },
  plugins: [],
}
