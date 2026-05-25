import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["DM Sans", "system-ui", "sans-serif"],
        display: ["Libre Baskerville", "Georgia", "serif"],
        body:    ["DM Sans", "system-ui", "sans-serif"],
        mono:    ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      animation: {
        marquee:      "marquee 28s linear infinite",
        "marquee-r":  "marquee-r 36s linear infinite",
        float:        "float 4s ease-in-out infinite",
        "float-2":    "float 4s ease-in-out 1s infinite",
        "float-3":    "float 4s ease-in-out 2s infinite",
        "typing-1":   "typing 1.2s ease-in-out infinite",
        "typing-2":   "typing 1.2s ease-in-out 0.2s infinite",
        "typing-3":   "typing 1.2s ease-in-out 0.4s infinite",
        "pulse-dot":  "pulse-dot 2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        "marquee-r": {
          from: { transform: "translateX(-50%)" },
          to:   { transform: "translateX(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-8px)" },
        },
        typing: {
          "0%,60%,100%": { transform: "translateY(0)", opacity: "0.4" },
          "30%":          { transform: "translateY(-4px)", opacity: "1" },
        },
        "pulse-dot": {
          "0%,100%": { opacity: "1" },
          "50%":     { opacity: "0.4" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
