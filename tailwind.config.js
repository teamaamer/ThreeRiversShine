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
          DEFAULT: '#003b70',
          dark: '#002a50',
          light: '#0894c6',
        },
        accent: {
          DEFAULT: '#f9e048',
          dark: '#e6cc35',
          light: '#fbea6f',
        },
        navy: '#003b70',
        teal: '#0894c6',
        yellow: '#f9e048',
      },
      animation: {
        'shine': 'shine 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        shine: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
