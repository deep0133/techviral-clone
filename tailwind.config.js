/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        xs: '500px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translate(0)' },
          '100%': { transform: 'rotate(100vw)' },
        }
      }
    },
  },
  plugins: [],
}
