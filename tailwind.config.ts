import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E27289",
        secondary: "#F0956A",
        swipet: {
          bg: "#FFFFFF",
          text: "#2C2C2A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #F0956A 0%, #E27289 100%)",
      },
      boxShadow: {
        card: "0 8px 40px -8px rgba(226, 114, 137, 0.15), 0 2px 12px -2px rgba(0,0,0,0.08)",
        "card-hover":
          "0 16px 48px -8px rgba(226, 114, 137, 0.2), 0 4px 16px -2px rgba(0,0,0,0.1)",
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "float-medium": "floatMedium 4s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        floatMedium: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
