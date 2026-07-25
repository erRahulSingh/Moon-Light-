import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0F172A",
          navyDark: "#0B192C",
          blue: "#2563EB",
          green: "#066E38",
          yellow: "#F59E0B",
          yellowLight: "#FBBF24",
          yellowBg: "#FEF9C3",
          surface: "#F8FAFC",
        },
        cardPastel: {
          greenBg: "#F2F9F4",
          greenBorder: "#DCFCE7",
          blueBg: "#F0F6FF",
          blueBorder: "#DBEAFE",
          yellowBg: "#FFFBEB",
          yellowBorder: "#FEF3C7",
          purpleBg: "#F7F5FF",
          purpleBorder: "#EDE9FE",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "sans-serif"],
        jakarta: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "sans-serif"],
        poppins: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(15, 23, 42, 0.08)",
        card: "0 10px 30px -5px rgba(15, 23, 42, 0.05)",
        pill: "0 4px 14px 0 rgba(0, 0, 0, 0.1)",
      }
    },
  },
  plugins: [],
};
export default config;
