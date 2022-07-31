/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('/src/images/mobile/image-hero.jpg')",
        "hero-desktop": "url('/src/images/desktop/image-hero.jpg')",
      },
      screens: {
        xs: "375px",

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1440px",
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        sans: ["Alata", ...defaultTheme.fontFamily.sans],
        Josefin: ["Josefin", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        White: "hsl(0, 0%, 100%)",
        Black: "hsl(0, 0%, 0%)",
        DarkGray: "hsl(0, 0%, 55%)",
        VeryDarkGray: "hsl(0, 0%, 41%)",
      },
    },
  },
  plugins: [],
};
