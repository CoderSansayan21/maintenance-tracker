export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      },
      colors: {
        ink: "#13231f",
        mint: "#2f7d68",
        coral: "#e86f51",
        gold: "#f2b84b"
      },
      boxShadow: {
        soft: "0 12px 30px rgba(19,35,31,0.08)"
      }
    }
  },
  plugins: []
};
