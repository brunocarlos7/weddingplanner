/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Updated palette: Sage Green & Soft Lavender
        "primary": "#B2AC88", // Sage Green
        "primary-dark": "#8F8A6D", // Darker Sage for hover/text
        "secondary": "#BDB0D0", // Slightly deeper lavender for visibility on light backgrounds
        "secondary-light": "#E6E6FA", // Soft Lavender
        "accent": "#6A5ACD", // Deep Purple Accent
        "text-main": "#4A4A4A", // Dark Grey
        "text-muted": "#6B6B6B",
        // New Palette from Guest List Template
        "sage-green": "#8BA888",
        "sage-light": "#E3EBE1",
        "sage-medium": "#C0D9BE",
        "sage-dark": "#5F7A5D",
        "lavender": "#B8A3CC",
        "lavender-light": "#F2ECF7",
        "lavender-medium": "#E0D4EB",
        "lavender-dark": "#755C8F",
        "clay-muted": "#D6C3B9",
        "clay-dark": "#8C7368",
        "background-light": "#FAF9F6", // Updated to match template
        "background-dark": "#1A1C19",  // Updated to match template
        "surface-light": "#FFFFFF",
        "surface-variant": "#EBEFEE",
        "on-surface-variant": "#44483E",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "sans": ["Inter", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "1.75rem", // M3 Large (28px)
        "full": "9999px",
      },
    },
  },
  plugins: [],
}
