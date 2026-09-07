/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0B",
        cream: "#FFF1D6",
        pink: "#FF2E88",
        cherry: "#FF1F3D",
        blue: "#1E4FFF",
        lime: "#B4FF3A",
        sunny: "#FFD400",
        grape: "#7B2FF7",
      },
      fontFamily: {
        puff: ['"Baloo 2"', "system-ui", "sans-serif"],
        slab: ["Bungee", "Impact", "sans-serif"],
        hand: ["Caveat", "cursive"],
        body: ['"Space Grotesk"', "system-ui", "sans-serif"],
        mono: ['"Space Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        hard: "6px 6px 0 0 #0B0B0B",
        "hard-sm": "3px 3px 0 0 #0B0B0B",
        "hard-lg": "10px 10px 0 0 #0B0B0B",
        "hard-white": "5px 5px 0 0 #FFFFFF, 9px 9px 0 0 #0B0B0B",
      },
      keyframes: {
        wobble: {
          "0%,100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        bob: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pop: {
          "0%": { transform: "scale(0.6) rotate(-8deg)", opacity: "0" },
          "60%": { transform: "scale(1.12) rotate(3deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(0)", opacity: "1" },
        },
        squish: {
          "0%,100%": { transform: "scale(1,1)" },
          "35%": { transform: "scale(1.14,0.86)" },
          "70%": { transform: "scale(0.94,1.06)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        spinslow: { to: { transform: "rotate(360deg)" } },
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.15" } },
        jitter: {
          "0%,100%": { transform: "translate(0,0) rotate(0)" },
          "25%": { transform: "translate(1px,-1px) rotate(0.6deg)" },
          "75%": { transform: "translate(-1px,1px) rotate(-0.6deg)" },
        },
      },
      animation: {
        wobble: "wobble 3.2s ease-in-out infinite",
        bob: "bob 3s ease-in-out infinite",
        pop: "pop 0.5s cubic-bezier(.2,1.4,.4,1) both",
        squish: "squish 0.45s ease-in-out",
        marquee: "marquee 26s linear infinite",
        spinslow: "spinslow 14s linear infinite",
        blink: "blink 1.1s steps(1) infinite",
        jitter: "jitter 0.35s linear infinite",
      },
    },
  },
  plugins: [],
};
