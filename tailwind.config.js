/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "768px" },
      sm: { max: "639px" },
      xs: { max: "475px" },
    },
    extend: {
      colors: {
        socialColor: "#ede5ca",
      },
      fill: {
        socialColor: "#ede5ca",
      },
      outlineColor: {
        socialColor: "#ede5ca",
      },
      fontFamily: {
        regular: ["Poppins1", "regular"],
        bolder: ["Poppins2", "bolder"],
        thiner: ["Poppins3", "thiner"],
      },
    },
  },
  plugins: [],
};
