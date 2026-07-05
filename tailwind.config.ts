import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./features/**/*.{js,ts,jsx,tsx}", "./shared/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        elevated: "var(--elevated)",
        foreground: "var(--foreground)",

        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        primary: "var(--btn-primary)",
        "primary-foreground": "var(--btn-primary-text)",
      },

      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },

      spacing: {
        section: "6rem",
      },
    },
  },

  plugins: [],
} satisfies Config;
