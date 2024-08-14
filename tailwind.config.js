/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                purple: "#721B65",
                orange: "#E47653",
                yellow: "FFC95C",
                magenta: "#B80B57",
            },
        },
    },
    plugins: [],
};
