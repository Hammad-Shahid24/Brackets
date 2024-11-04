/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      extend: {
        colors: {
          primary: "#1a202c", // Custom primary color
          secondary: "#2d3748", // Custom secondary color
          accent: "#38b2ac", // Custom accent color
          customGray: "#718096", // Custom gray color
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"], // Custom sans-serif font
          serif: ["Merriweather", "serif"], // Custom serif font
          mono: ["Fira Code", "monospace"], // Custom monospace font
        },
      },
    },
  },
  plugins: [],
};
