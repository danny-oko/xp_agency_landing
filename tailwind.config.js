/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        xp: {
          // Core brand blacks — tuned for depth and hierarchy
          bg: '#0C0C0D',           // main background (charcoal black)
          bgSoft: '#101011',       // secondary sections / cards
          surface: '#1E1E20',      // elevated surfaces / modals
          line: '#2A2A2C',         // subtle borders
          // Accent spectrum (for neon & glass effects)
          violet: '#A855F7',
          cyan: '#38BDF8',
          teal: '#14B8A6',
          // Text hierarchy
          text: {
            DEFAULT: '#FFFFFF',    // primary text
            soft: '#B5B5B8',       // secondary text
            dim: '#7A7A7D',        // tertiary / caption text
          },
        },
      },
      borderRadius: {
        'none': '0px',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '3.5rem',
        '8xl': '4rem',
        '9xl': '4.5rem',
        '10xl': '5rem',
        '11xl': '5.5rem',
        '12xl': '6rem',
        '13xl': '6.5rem',
        '14xl': '7rem',
        '15xl': '7.5rem',
        '16xl': '8rem',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 8s linear infinite',
      },
    },
  },
  plugins: [],
}
