/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030304", // var(--bg-color)
        zinc: {
           950: '#09090b', // Overwrite or extend default palette if needed, but defaults are usually fine
        },
        // Custom from design
        'accent-dim': '#27272a',
        'accent-glow': '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'pulse-ring': 'pulseRing 3s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        'flow': 'flow 3s linear infinite',
        'scroll': 'scroll 40s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'spin-slow': 'spin 3s linear infinite', // for r3kon ring
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.95)', opacity: '0.5' },
          '50%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0.5' },
        },
        flow: {
          '0%': { offsetDistance: '0%', opacity: '0' }, // Note: offset-path needs CSS support
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { offsetDistance: '100%', opacity: '0' },
        },
        scroll: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
