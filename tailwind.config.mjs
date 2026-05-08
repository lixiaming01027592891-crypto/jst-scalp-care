/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        ivory: '#F5F0E8',
        sage: { DEFAULT: '#A8B5A0', dark: '#8A9A82', light: '#D4DDD0' },
        wood: { DEFAULT: '#C4A882', light: '#E8DCC8' },
        gold: { DEFAULT: '#D4AF37', light: '#F0E6C8' },
        text: { primary: '#3D3D3D', secondary: '#6B6B6B', light: '#9A9A9A' },
        line: '#06C755',
        'line-dark': '#05a347',
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', '"PingFang TC"', '"Microsoft JhengHei"', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        pricing: '20px',
        pill: '50px',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
