/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dark: {
        'bg': '#1a1a1a',
        'text': '#fff',
        'primary': '#fff',
        'secondary': '#fff',
        'accent': '#fff',
        'muted': '#fff',
        'highlight': '#fff',
      },
      light: {
        'bg': '#fff',
        'text': '#000',
        'primary': '#000',
        'secondary': '#000',
        'accent': '#000',
        'muted': '#000',
        'highlight': '#000',
      },
    },
  },
  plugins: [],
}
