import tailwindcssAnimate from "tailwindcss-animate";
import forms from '@tailwindcss/forms'; // For better form styling
import typography from '@tailwindcss/typography'; // For better typography
import aspectRatio from '@tailwindcss/aspect-ratio'; // For aspect ratio utilities
import lineClamp from '@tailwindcss/line-clamp'; // For line clamping utilities

/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,ts,jsx,tsx}", // Adjust this path according to your project structure
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [
        forms, // For better form styling
        typography, // For better typography
        aspectRatio, // For aspect ratio utilities
        lineClamp, // For line clamping utilities
        tailwindcssAnimate, // For animations
    ],
};

export default config;