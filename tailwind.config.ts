import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            white: '#FFF',
            black: '#000',
            red: {
                300: '#FFF0EC',
                400: '#F68E74',
                500: '#F25F3A'
            },
            blue: {
                400: '#1D1E25',
                500: '#242D52'
            },
            gray: {
                300: '#FAFAFA',
                400: '#9095A7',
            },
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-family)"],
            },
        },
    },
    plugins: [],
};
export default config;
