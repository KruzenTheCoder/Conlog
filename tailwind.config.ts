import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Conlog brand — grounded in the Conlog lime/green identity,
        // tuned for a cinematic dark UI.
        brand: {
          DEFAULT: "#00E5FF", // Bright Cyan
          dark: "#00B4D8",
          light: "#90E0EF",
          50: "#CAF0F8",
          100: "#ADE8F4",
          200: "#90E0EF",
          300: "#48CAE4",
          400: "#00B4D8",
          500: "#0096C7",
          600: "#0077B6",
          700: "#023E8A",
          800: "#03045E",
          900: "#011A27",
        },
        accent: {
          DEFAULT: "#48CAE4", // Lighter cyan
          dark: "#0077B6",
          deep: "#011A27",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Sora'", "Inter", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        card: "0 20px 40px rgba(0,0,0,0.35)",
        glow: "0 0 0 1px rgba(0,229,255,0.28), 0 24px 60px -10px rgba(0,229,255,0.35)",
        ring: "0 0 0 1px rgba(0,229,255,0.35)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at top, rgba(0,229,255,0.20) 0, transparent 55%)",
        "hero-gradient":
          "linear-gradient(180deg, rgba(0,119,182,0.22) 0%, rgba(1,26,39,0) 70%)",
        "aurora":
          "conic-gradient(from 90deg at 50% 50%, rgba(0,229,255,0.12), rgba(0,180,216,0.08), rgba(0,119,182,0.10), rgba(0,229,255,0.12))",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
        shimmer: "shimmer 6s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
