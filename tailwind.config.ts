import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, e }) {
      const scales: { [key: string]: string } = {
        '110': '1.10',
        '120': '1.20',
        '130': '1.30',
        '125': '1.25',
        '105': '1.05',
        '135': '1.35',
        '140': '1.40'
        // Add more as needed
      };

      const utilities = Object.keys(scales).reduce((acc, key) => {
        acc[`.${e(`hover-scale-[${key}%]`)}`] = {
          transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': `scale(${scales[key]})`
        };
        return acc;
      }, {} as Record<string, Record<string, string>>);

      addUtilities(utilities, ['responsive', 'hover']);
    }),
  ],
};
export default config;
