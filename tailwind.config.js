/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    extend: {
        colors: {
            'outline-text-color': '#D13F7B',
            'window-bg-color': '#FFE2CC',
            'window-tab-color': '#D8B8FF',
            'desktop-bg-color': '#FFCCE1',
            'desktop-bar-color': '#B8E1FF',
            'desktop-bar-hover-color': '#A4D9FF',
            'white-color': '#FFF0F3',
            'cream-button-color': '#FFF0AA'
        },
    },
    },
    plugins: [],
} 