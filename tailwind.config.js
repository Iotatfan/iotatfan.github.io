module.exports = {
  mode: "jit",
  purge: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        "home-radial":
          "radial-gradient(circle at 50% 34%, #263e62 0%, #0a1e45 34%, #021238 62%, #000726 100%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
