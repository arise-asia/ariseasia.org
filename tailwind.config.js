/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        "ping-dot": {
          "50%": {
            transform: "scale(3)",
            opacity: 0.8,
          },
          "100%": {
            transform: "scale(5)",
            opacity: 0,
          },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.black"),
          },
        },
      }),
    },
    fontFamily: {
      sans: ['"DM Sans"', "sans-serif"],
      heading: ["Unbounded", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
