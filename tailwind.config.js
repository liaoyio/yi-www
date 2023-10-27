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
