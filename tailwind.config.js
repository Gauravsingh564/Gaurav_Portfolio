/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Space Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'neu-black': '#1a1a1a',
        'neu-white': '#fafafa',
        'neu-gray': '#6b7280',
        'neu-blue': '#3b82f6',
        'neu-pink': '#ec4899',
        'neu-green': '#10b981',
      },
      boxShadow: {
        'neu': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
        'neu-sm': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'neu-lg': '12px 12px 0px 0px rgba(0, 0, 0, 1)',
      },
      animation: {
        'bounce-x': 'bounceX 1s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        bounceX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(25%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
