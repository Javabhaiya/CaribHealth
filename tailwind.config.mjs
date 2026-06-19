/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a1f3d',
          2: '#11294a',
          ink: '#1b3766',
        },
        gold: '#b8860b',
        bg: '#fbfbfa',
        text: '#1f2937',
        tint: '#f4f7fb',
        'tint-2': '#f9fafb',
        amber: {
          bg: '#fff7ed',
          border: '#fdba74',
          text: '#9a3412',
        },
      },
      fontFamily: {
        serif: ["'IBM Plex Serif'", 'Georgia', 'serif'],
        sans: ["'Inter'", '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'sans-serif'],
      },
      maxWidth: {
        content: '1100px',
      },
    },
  },
  plugins: [],
};
