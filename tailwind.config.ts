import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0faff',
          100: '#e0f4ff',
          200: '#bfe7ff',
          300: '#8fd6ff',
          400: '#57c1ff',
          500: '#1aa8ff',
          600: '#0f86d1',
          700: '#0b6aa6',
          800: '#0a5889',
          900: '#0d4a72',
        }
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(0,0,0,0.25)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(20% 50% at 0% 0%, rgba(26,168,255,0.25) 0%, rgba(26,168,255,0) 100%), radial-gradient(25% 40% at 100% 0%, rgba(34,197,94,0.28) 0%, rgba(34,197,94,0) 100%), radial-gradient(25% 30% at 50% 100%, rgba(20,184,166,0.25) 0%, rgba(20,184,166,0) 100%)',
      }
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
} satisfies Config
