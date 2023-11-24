import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // colors: {
      //   accent: {
      //     1: "rgba(64,64,64)",
      //     2: "rgba(179,179,179)",
      //   },
      //   bkg: "rgba(19,19,19)",
      //   content: "rgba(253,253,253)",
      // },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [],
}
export default config
