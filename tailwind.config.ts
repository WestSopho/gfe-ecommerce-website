import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    corePlugins: {
        container: false,
    },
    theme: {
        screens: {
            md: "768px",
            lg: "1440px",
        },
        extend: {
            backgroundImage: {
                "linear-background":
                    "linear-gradient(148deg, #F9FAFB 8.89%, #D2D6DB 100.48%)",
            },
            boxShadow: {
                button: "0px 0px 0px 4px rgba(68, 76, 231, 0.12)",
                textinput:
                    "0px 0px 0px 4px rgba(68, 76, 231, 0.12), 0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 1px rgba(68, 76, 231, 1)",
                "textinput-error":
                    "0px 0px 0px 4px rgba(217, 45, 32, 0.12), 0px 0px 0px 1px rgba(217, 45, 32, 1)",
                link: "0px 0px 0px 4px rgba(68, 76, 231, 0.12)",
            },
        },
    },
    plugins: [],
} satisfies Config;
