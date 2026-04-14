/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "ui-serif", "Georgia", "serif"],
      },
      colors: {
        brand: {
          blue: "#1E3A5F",
          softBlue: "#4A7BA7",
          green: "#2E8B57",
          gold: "#D4A857",
        },
        neutral: {
          background: "#F8F9FB",
          white: "#FFFFFF",
          darkText: "#1A1A1A",
          lightText: "#6B7280",
          border: "#E5E7EB",
        },
        primary: {
          DEFAULT: "#D4A857",
          hover: "#C79A45",
          foreground: "#1A1A1A",
        },
        secondary: {
          DEFAULT: "#1E3A5F",
          hover: "#162C49",
          foreground: "#FFFFFF",
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};
