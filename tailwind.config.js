// tailwindcss.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  safelist: [
    // for dynamic classes in Home.js (blue/indigo/purple/emerald)
    {
      pattern: /(from|to|text)-(blue|indigo|purple|emerald)-(400|500|600)/,
    },
    {
      pattern: /(bg|from|to)-(blue|indigo|purple|emerald)-(500|600)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      colors: {
        theme: {
          bg: "var(--bg-primary)",
          card: "var(--bg-card)",
          text: "var(--text-primary)",
          text2: "var(--text-secondary)",
          border: "var(--border-color)",
          blue: "var(--accent-blue)",
          green: "var(--accent-green)",
        },
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      boxShadow: {
        // soft, subtle elevation
        soft: "0 18px 45px rgba(15,23,42,0.35)",
        // deeper, used on hover / active
        soft2: "0 26px 60px rgba(15,23,42,0.65)",
        // accent glow (for key CTAs / cards)
        glowBlue: "0 0 40px rgba(99,102,241,0.55)",
      },
      backgroundImage: {
        // glassy dashboard-like surface
        "glass-gradient":
          "radial-gradient(circle at top left, rgba(129,140,248,0.16), transparent 55%), radial-gradient(circle at bottom right, rgba(236,72,153,0.12), transparent 55%), linear-gradient(135deg, var(--bg-secondary), var(--bg-card))",
      },
      backdropBlur: {
        xl: "28px",
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
