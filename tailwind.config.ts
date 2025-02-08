import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#f69800',
        secondary: '#1A202C',
        textPrimary: '#000000',
        textSecondary: '#777777',
        'school-orange': '#f69800',
        'school-dark': '#1A202C',
        'school-gray': '#777777',
        'school-light': '#FCFEF9',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
