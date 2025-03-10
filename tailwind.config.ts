import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        button: "var(--button)",
        highlight: "var(--highlight)",
        textBackground: "var(--textBackground)",
        text: "var(--text)",
        textSecondary: "var(--textSecondary)"
      },
    },
  },
  plugins: [],
};
export default config;
