/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // enable dark mode via class
    theme: {
        extend: {
            colors: {
                "primary": "#2463eb",
                "primary-dark": "#1d4ed8",
                "background-light": "#f6f6f8",
                "background-dark": "#000000", // Using pure black as requested
                "surface-light": "#ffffff",
                "surface-dark": "#1f2937", // Or adjust closer to black? Maybe keep this for contrast
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"]
            },
            borderRadius: { "DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px" },
            animation: {
                "fade-in-up": "fadeInUp 0.5s ease-out forwards",
                "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "bounce-slow": "bounce 3s infinite",
            },
            keyframes: {
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                }
            }
        },
    },
    plugins: [],
}
