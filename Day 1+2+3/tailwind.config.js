/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      extend: {
        colors: {
          primary: "#1a202c",
          secondary: "#2d3748",
          accent: "#38b2ac",
          customGray: "#718096",
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
          serif: ["Merriweather", "serif"],
          mono: ["Fira Code", "monospace"],
        },
      },
    },
  },
  plugins: [],
};
