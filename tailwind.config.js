/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        BrownStdBold: ['BrownStd-Bold', 'sans-serif'],
        BrownStdLight: ['BrownStd-Light', 'sans-serif'],
        BrownStdRegular: ['BrownStd-Regular', 'sans-serif'],
        BrownStdThin: ['BrownStd-Thin', 'sans-serif'],
      },
      colors: {
        'blue-primary': '#1D4FFE',
        'green-primary': '#4BCE97',
        'gray-border-card': '#131317',
        'gray-area-favorite': '#05030A',
        'gray-hover-btn-slide': '#07050F',
      },
      width: {
        'area-cards-mobile': '43.75rem',
      },
      maxWidth: {
        grid: '1216px',
        'card-nft': '17.4rem',
        'card-collector': '37rem',
        'logo-size-mb': '10rem',
        'nav-header': '48.3rem',
        'left-cont-footer': '20.25rem', 
        'content-desc-hero': '41.1rem',
      },
      height: {
        'area-image-nft': '236px',
        'area-cards-mobile': '15.3rem',
        'area-card-desk': '26.6rem'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'hero-pattern': 'url("../assets/bg-hero.svg")',
      },

    },
    screens: {
      '@tablet': '640px',
      '@laptop': '1024px',
      '@desktop': '1280px',
    },
  },
  plugins: [require("tailwindcss-animate")],
}