import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        /* Primary Colors */
        "primary-blue-light": "#1A73E8",
        "primary-blue-dark": "#4285F4",
        "accent-green-light": "#34A853",
        "accent-green-dark": "#34C759",
        "accent-orange-light": "#FBBC05",
        "accent-orange-dark": "#FFAB00",

        /* Secondary Colors */
        "background-light": "#F5F5F5",
        "background-dark": "#121212",
        "surface-light": "#FFFFFF",
        "surface-dark": "#1E1E1E",

        /* Text Colors */
        "text-primary-light": "#333333",
        "text-primary-dark": "#FFFFFF",
        "text-secondary-light": "#666666",
        "text-secondary-dark": "#BBBBBB",

        /* Link Colors */
        "link-color-light": "#1A73E8",
        "link-color-dark": "#8AB4F8",

        /* Button Colors */
        "button-primary-light": "#1A73E8",
        "button-primary-dark": "#4285F4",
        "button-primary-hover-light": "#1664D4",
        "button-primary-hover-dark": "#3B76E1",
        "button-success-light": "#34A853",
        "button-success-dark": "#34C759",

        /* Badges & Status Indicators */
        "badge-success-light": "#34A853",
        "badge-success-dark": "#34C759",
        "badge-warning-light": "#FBBC05",
        "badge-warning-dark": "#FFAB00",
        "badge-error-light": "#EA4335",
        "badge-error-dark": "#FF4E50",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
