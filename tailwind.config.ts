import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        qangly: {
          dark: "#0f172a",    // Қою көк (фон үшін)
          primary: "#1e3a8a", // Негізгі көк (мәзір, батырмалар)
          gold: "#d4af37",    // Алтын түс (акцент, сызықтар)
          light: "#f8fafc",   // Ақшыл фон
          text: "#334155",    // Мәтін түсі
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'], // Стандартты әдемі шрифт
      },
    },
  },
  plugins: [],
};
export default config;