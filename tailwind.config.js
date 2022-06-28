/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,tsx}"],
    theme: {
        extend: {
            textColor: {
                primary: "var(--color-primary)",
            },
        },
    },
    plugins: [],
};
