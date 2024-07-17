import { clamp } from "gsap";

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  safelist: [
    "text-A/10", "text-A/20",
    "bg-A/10", "bg-A/20",
    "border-A/10", "border-A/20",
  ],
  theme: {
    borderRadius: {
      DEFAULT: "12px",
      md: "20px",
      lg: "26px",
      full: "100%"
    },
    fontSize: {
      "small": ["clamp(12px,14rem,16px)"],
      "base": ["clamp(16px,16rem,32px)"],
      "extra": ["clamp(24px,48rem,48px)", "clamp(28px,52rem,56px)"],
      "subtitle": ["clamp(20px,40rem,40px)", "clamp(22px,45rem,48px)"],
      "subtitle-3lvl": ["clamp(14px,30rem,24px)", "clamp(16px,30rem,32px)"]
    },
    extend: {
      container: {
        center: true
      },
      width: {
        "popup-content": "calc(100% - 40px)"
      },
      colors: {
        "A/10": "#CA2250",
        "A/20": "#5B4481",
        "N/N30": "#CFCFCF",
        "N/N60": "#423F3F",
        "content": "#717070",
        "secondary": "#423F3F1A",
        "fillPreview": "#F3F3F3",
        "lilac": "#5B4481"
      },
      fontFamily: {
        "sans": ["'Onest'", 'ui-sans-serif', 'system-ui'],
        "unbounded": ["'Unbounded'"],
      }

    },
  },
  plugins: [],
}

