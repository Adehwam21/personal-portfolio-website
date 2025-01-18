import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-color)',
        text: 'var(--text-color)',
      },
      height: {
        '100': "31rem",
        '102': "32rem",
        '105': "33.5rem",
        '110': "43rem",
        '115': "45rem",
        '120': "50rem",
        '130': "60rem",
      },
      
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        fira: ['Fira Code', 'monospace'],
        scode: ['Source Code Pro', 'monospace'],
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require('daisyui')],
   
}
export default config
