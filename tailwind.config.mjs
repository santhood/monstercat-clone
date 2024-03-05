/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        sm: '530px',
        xl: '1200px',
        '2xl': '1440px',
      },
      fontFamily: {
        heading: 'var(--ff-heading)',
        body: 'var(--ff-body)',
      },
    },
  },
  plugins: [],
}
