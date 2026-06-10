import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0A0F1F",
          accent: "#00D4FF",
          gold: "#FFD700"
        }
      },
      boxShadow: {
        glow: "0 0 60px rgba(0, 212, 255, 0.18)",
        card: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        radialGlow:
          "radial-gradient(circle at top, rgba(0,212,255,0.18), transparent 40%), radial-gradient(circle at bottom right, rgba(255,215,0,0.10), transparent 30%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
