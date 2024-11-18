import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    container: false
  },
  theme: {
    screens: {
        "md": "768px", 
        "lg": "1440px",
    },
    extend: {
        backgroundImage: {
            "linear-background": "linear-gradient(148deg, #F9FAFB 8.89%, #D2D6DB 100.48%)",
        }
    }
  },
  plugins: [],
} satisfies Config;
