import type { Config } from "tailwindcss";
// Tailkit (Tailwind CSS v3 Configuration)
import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

import aspectRatio from "@tailwindcss/aspect-ratio";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Oswald", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#818181",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3d",
          "950": "#262626",
          light: "#e7e7e7",
          DEFAULT: "#6d6d6d",
          dark: "#3d3d3d",
        },
        primary: {
          "50": "#eeefff",
          "100": "#e0e1ff",
          "200": "#c7c8fe",
          "300": "#a7a5fc",
          "400": "#8d81f8",
          "500": "#7b63f1",
          "600": "#6d46e5",
          "700": "#5d36c9",
          "800": "#4d30a3",
          "900": "#412e81",
          "950": "#271b4b",
          light: "#c7c8fe",
          DEFAULT: "#7b63f1",
          dark: "#412e81",
        },
        secondary: {
          "50": "#f1fcf9",
          "100": "#cff8ed",
          "200": "#9ff0dc",
          "300": "#67e1c7",
          "400": "#38c9af",
          "500": "#21b9a0",
          "600": "#168b7b",
          "700": "#166f63",
          "800": "#165951",
          "900": "#174a44",
          "950": "#072c29",
          light: "#cff8ed",
          DEFAULT: "#21b9a0",
          dark: "#174a44",
        },
        maxWidth: {
          "8xl": "90rem",
          "9xl": "105rem",
          "10xl": "120rem",
        },
        zIndex: {
          1: "1",
          60: "60",
          70: "70",
          80: "80",
          90: "90",
          100: "100",
        },
      },
      keyframes: {
        "spin-slow": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 8s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              textDecoration: "none",
              "&:hover": {
                opacity: ".75",
              },
            },
            img: {
              borderRadius: defaultTheme.borderRadius.lg,
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    aspectRatio,
    typography,
    plugin(function ({ addUtilities }) {
      const utilFormSwitch = {
        ".form-switch": {
          border: "transparent",
          "background-color": colors.gray[300],
          "background-image":
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
          "background-position": "left center",
          "background-repeat": "no-repeat",
          "background-size": "contain !important",
          "vertical-align": "top",
          "&:checked": {
            border: "transparent",
            "background-color": "currentColor",
            "background-image":
              "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
            "background-position": "right center",
          },
          "&:disabled, &:disabled + label": {
            opacity: ".5",
            cursor: "not-allowed",
          },
        },
      };

      addUtilities(utilFormSwitch);
    }),
  ],
} satisfies Config;

export default config;
