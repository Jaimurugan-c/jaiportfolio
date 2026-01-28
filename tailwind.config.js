/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b'
        }
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.08)',
        soft2: '0 18px 45px rgba(0,0,0,0.12)'
      }
    }
  },
  plugins: []
}
