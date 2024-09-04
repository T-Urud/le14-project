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
      backgroundColor: {
        persoGrey: "#e3e6ed",
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
