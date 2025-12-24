/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1552FF", // قابل للتعديل
        accent: "#FFD166",  // أصفر دافئ
        soft: "#F7FAFC",
      },
      backgroundImage: {
        'hero-pattern': "url('/images/background.png')",
      },
      fontFamily: {
        sans: ["'Cairo', ui-sans-serif, system-ui, -apple-system, 'Segoe UI'"],
        display: ["'Cairo', sans-serif"],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
      }
    },
  },
  plugins: [],
}
