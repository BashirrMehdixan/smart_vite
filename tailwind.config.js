/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "2rem",
                width: "90%"
            },
            width: {
                "card-width-lg": "calc(25% - 24px)",
                "card-width-md": "calc(50% - 24px)",
            },
            colors: {
                "main-blue": "#3b7fed",
                "main-text": "#2a304c",
                "border-color": "#555970",
                "gray": "#fbfafa",
            },
            boxShadow: {
                'dark-custom': "0 0 8px .5px rgba(0,0,0,.06)"
            },
            rotate: {
                '133': '133deg',
            }
        },



    },
    plugins: [],
}

