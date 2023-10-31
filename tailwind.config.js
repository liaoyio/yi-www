import { fontFamily } from 'tailwindcss/defaultTheme'
import { createPlugin } from 'windy-radix-palette'

// const colors = createPlugin()

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
    '/theme.config.tsx'
  ],
  theme: {
    extend: {
      zIndex: {
        base: '0',
        dropdown: '80',
        overlay: '90',
        popover: '100'
      },
      /* background-snippets/ui/button colors */
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        }
      },
      gridTemplateRows: {
        1: 'repeat(1, minmax(0, 1fr))',
        2: 'repeat(2, minmax(0, 1fr))',
        3: 'repeat(3, minmax(0, 1fr))',
        4: 'repeat(4, minmax(0, 1fr))',
        5: 'repeat(5, minmax(0, 1fr))',
        6: 'repeat(6, minmax(0, 1fr))',
        7: 'repeat(7, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
        11: 'repeat(11, minmax(0, 1fr))',
        12: 'repeat(12, minmax(0, 1fr))'
      },
      fontFamily: {
        sans: ['var(--inter-font)', ...fontFamily.sans],
        mono: ['var(--fira-code-font)', ...fontFamily.mono]
      },
      animation: {
        'text-gradient': 'text-gradient 1.5s linear infinite',
        'background-shine': 'background-shine 2s linear infinite',
        'pulse-slow': 'pulse 6s infinite cubic-bezier(0.4, 0, 0.6, 1)',
        'border-width': 'border-width 3s infinite alternate'
      },
      keyframes: {
        'text-gradient': {
          to: {
            backgroundPosition: '200% center'
          }
        },
        'background-shine': {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' }
        },
        'border-width': {
          from: { width: '10px', opacity: '0' },
          to: { width: '100px', opacity: '1' }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-percentage-width'),
    require('tailwindcss-animate'),
    createPlugin().plugin
  ]
}
