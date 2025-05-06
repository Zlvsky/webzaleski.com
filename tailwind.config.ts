import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-switzer)']
      },
      fontSize: {
        '20': ['1.25rem', '1.875rem'],
        '40': ['2.5rem', '3.75rem']
      },
      colors: {
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        dark: '#1c1d1f',
        gray2: '#606060',
        grayE8: '#E8E8E8',
        gray7B: '#7B7B7B',
        dark26: '#262626',
        dark48: '#484848',
        gray54: '#545454',
        grayText1: '#555',
        grayText2: '#a8a8a8',
        textHover: '#21201c',
        green: '#2CA56B'
      },
      boxShadow: {
        project:
          '0px 8px 16px 0px rgba(3, 7, 18, 0.08), 0px 0px 0px 1px rgba(3, 7, 18, 0.08)',
        badge:
          'rgba(0, 0, 0, 0.18) 0px 0.602187px 0.602187px -1.25px, rgba(0, 0, 0, 0.16) 0px 2.28853px 2.28853px -2.5px, rgba(0, 0, 0, 0.063) 0px 10px 10px -3.75px',
        darkbutton:
          'inset 0px 2px 4px 0px rgba(255, 255, 255, 0.4), 0px 0.74097px 0.74097px -0.75px rgba(0, 0, 0, 0.33), 0px 2.01787px 2.01787px -1.5px rgba(0, 0, 0, 0.32), 0px 4.43051px 4.43051px -2.25px rgba(0, 0, 0, 0.3), 0px 9.83471px 9.83471px -3px rgba(0, 0, 0, 0.25), 0px 25px 25px -3.75px rgba(0, 0, 0, 0.11), 0px 0px 0px 1px var(--token-46244ad7-86a7-41b8-b44b-214d95b54c13, rgb(130, 130, 130))',
        glossybutton:
          'rgba(255, 255, 255, 0.15) 0px 1px 1px 0px inset, rgba(255, 255, 255, 0.15) 0px 1px 2px 0px inset, rgba(0, 0, 0, 0.25) 0px -1px 2px 0px inset, rgba(0, 0, 0, 0.1) 0px 10px 20px 0px',
        glossyinside: 'rgba(255, 255, 255, 0.15) 0px 1px 2px 0px inset'
      },
      screens: {
        lg: '67.5rem'
      }
    }
  },
  plugins: []
}
export default config
