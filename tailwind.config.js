module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            pre: null,
          },
        },
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}