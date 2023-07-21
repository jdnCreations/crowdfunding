/** @type {import('tailwindcss')",.Config} */
module.exports = {
  content: ["*.html", "*.js"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(176, 50%, 47%)",
        accent: "hsl(176, 72%, 28%)",
        title: "hsl(0, 0%, 0%)",
        text: "hsl(0, 0%, 48%)",
      },
    },
    fontFamily: {
      'default': "Commissioner, sans-serif",
    }
  },
  plugins: [],
}

