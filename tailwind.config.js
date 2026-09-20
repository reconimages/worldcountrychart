/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "var(--base)",
        panel: "var(--panel)",
        ink: "var(--ink)",
        mute: "var(--mute)",
        edge: "var(--edge)",
        gold: "#c9a15c",
        "gold-soft": "#e4c78a",
        "gold-dim": "#8a6d3b",
        cream: "#f6f0e2",
      },
    },
  },
  plugins: [],
};