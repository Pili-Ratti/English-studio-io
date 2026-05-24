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
      colors: {
        // ── The Fluency House brand palette ──
        board: {
          DEFAULT: "#C9AA5A",  // corkboard / bulletin board
          dark: "#B89A48",
        },
        paper: {
          DEFAULT: "#F5F0E8",  // torn card surface
          warm: "#EDE8DA",
          alt: "#FAF6EE",
          kraft: "#D4C5A0",
        },
        ink: {
          DEFAULT: "#1E1E1E",  // primary text
          muted: "#6B6B6B",
        },
        crimson: {
          DEFAULT: "#D63B2F",  // badges, CTAs, hero accents
          dark: "#B82E23",
        },
        gold: {
          DEFAULT: "#D4A017",  // star accents, highlights
          dark: "#B88A10",
        },
        clip: {
          DEFAULT: "#E07B39",  // paperclip, secondary CTAs
        },
        peach: {
          DEFAULT: "#E8A882",  // warm secondary surfaces
        },
        teal: {
          DEFAULT: "#1A4A45",  // structure, headings
          light: "#2A6B63",
        },
        navy: {
          DEFAULT: "#1B3A6B",  // enterprise / dark accents
        },
        chalk: {
          DEFAULT: "#F9F7F3",  // page background
        },
      },
      fontFamily: {
        display:    ["Plus Jakarta Sans", "sans-serif"],
        body:       ["Plus Jakarta Sans", "sans-serif"],
        mono:       ["Courier Prime", "monospace"],
        handwrite:  ["Caveat", "cursive"],
      },
      fontWeight: {
        black: "900",
      },
      borderRadius: {
        scrap: "2px",
      },
      boxShadow: {
        card:   "3px 5px 20px rgba(0,0,0,0.14)",
        "card-hover": "6px 14px 38px rgba(0,0,0,0.22)",
        pin:    "2px 4px 12px rgba(0,0,0,0.11)",
        stamp:  "2px 3px 0 rgba(0,0,0,0.22)",
      },
      animation: {
        "float-car":   "float-car 7s ease-in-out infinite",
        "pulse-border":"pulse-border 3s ease-in-out infinite",
        marquee:       "marquee 22s linear infinite",
        "stamp-in":    "stamp-in 0.75s cubic-bezier(0.22,1.61,0.36,1) both",
        blink:         "blink 0.75s step-end infinite",
        ripple:        "ripple 0.65s linear forwards",
      },
      keyframes: {
        "float-car": {
          "0%,100%": { transform: "translate(0,0)" },
          "33%":      { transform: "translate(-10px,-12px)" },
          "66%":      { transform: "translate(5px,-7px)" },
        },
        "pulse-border": {
          "0%,100%": { boxShadow: "3px 5px 20px rgba(0,0,0,0.14), 0 0 0 0 rgba(26,74,69,0)" },
          "50%":     { boxShadow: "3px 5px 28px rgba(0,0,0,0.2), 0 0 0 9px rgba(26,74,69,0.1)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        "stamp-in": {
          "0%":   { opacity: "0", transform: "scale(0.25) rotate(-14deg)" },
          "55%":  { transform: "scale(1.12) rotate(2.5deg)" },
          "78%":  { transform: "scale(0.95) rotate(-0.3deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(2deg)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%":     { opacity: "0" },
        },
        ripple: {
          to: { transform: "scale(5)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
