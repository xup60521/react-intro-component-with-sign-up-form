/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppings: ["Poppins", "sans-serif"]
            },
            colors: {
                c_Red: "hsl(0, 100%, 74%) ",
                c_Green: "hsl(154, 59%, 51%)",
                c_Blue: "hsl(248, 32%, 49%)",
                c_Dark_Blue: "hsl(249, 10%, 26%)",
                c_Grayish_Blue: "hsl(246, 25%, 77%)",
            }
        },
    },
    plugins: [],
}

