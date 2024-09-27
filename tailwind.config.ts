import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#FFF1E6",
          "500": "#FF7000",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        dark: {
          "100": "#000",
          "200": "#0F1117",
          "300": "#151821",
          "400": "#212734",
          "500": "#3F4354",
        },
        light: {
          "400": "#858EAD",
          "500": "#7B8EC8",
          "700": "#DCE3F1",
          "800": "#F4F6F8",
          "850": "#FDFDFD",
          "900": "#FFFFFF",
        },
        "accent-blue": "#1DA1F2",
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
      fontFamily: {
        inter: ["var(--font-inter)"],
        spaceGrotesk: ["var(--font-spaceGrotesk)"],
        poppins: ["var(--font-poppins)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        flyDiagonal: {
          "0%": { transform: "translate(0, 0) rotate(0deg)", opacity: "0" },
          "50%": { opacity: "0.7" },

          "100%": {
            transform: "translate(90vw, -90vh) rotate(45deg)",
            opacity: "0",
          },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-grow": {
          "0%, 100%": {
            transform: "scale(1) rotate(0deg)",
            opacity: "0.7",
          },
          "50%": {
            transform: "scale(1.1) rotate(15deg)",
            opacity: "0.9",
          },
        },

        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },

      animation: {
        flyDiagonal: "flyDiagonal 5s ease-in-out  infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        floatA: "pulse-grow 5s ease-in-out infinite",
        floatB: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
