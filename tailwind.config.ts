import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'custom-beige': '#CEC6BE',
        'custom-grey-card': '#F2F2F2',
        'custom-green-buy-button': '#4F9071',
      },
    },
  },
  plugins: [],
};

export default config;
