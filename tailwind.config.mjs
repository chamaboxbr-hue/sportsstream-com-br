/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sport: {
          bg: '#050814',
          card: '#0c1222',
          border: '#1b253b',
          green: '#10b981',
          emerald: '#059669',
          neon: '#00ff88',
          cyan: '#06b6d4',
          blue: '#2563eb',
          amber: '#f59e0b'
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [],
};
