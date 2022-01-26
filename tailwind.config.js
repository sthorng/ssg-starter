module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 500ms ease-in forwards",
        fadeOut: "fadeOut 500ms ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 }
        }
      }
    },
  },
  variants: {
    animation: ["motion-safe"]
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
};
