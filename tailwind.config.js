// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "text-gradient":
          "linear-gradient(40deg, #ea00ff, #ea00ff, #03d5ff, #03d5ff)",
      },
    },
  },
  plugins: [],
};
