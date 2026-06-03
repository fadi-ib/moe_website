import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#071527",
        navy: "#0b1f3a",
        steel: "#14365f",
        electric: "#ffd21f",
        "electric-soft": "#fff4b8"
      },
      boxShadow: {
        glow: "0 0 42px rgba(255, 210, 31, 0.22)",
        premium: "0 24px 70px rgba(3, 10, 24, 0.18)"
      },
      backgroundImage: {
        "circuit-grid":
          "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
