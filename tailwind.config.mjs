/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF9F3",
        gold: "#D4AF37",
        pastelGreen: "#CFE8D9",
        luxe: {
          50: "#fffaf2",
          100: "#fff4e5",
          200: "#ffe8cc",
          300: "#ffd9a6",
          400: "#ffbf66",
          500: "#e3a33a"
        }
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: [],
};
