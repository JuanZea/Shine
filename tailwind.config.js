const {colors: defaultColors} = require('tailwindcss/defaultTheme')
const customColors = require("tailwindcss/colors");

const colors = {
    ...defaultColors,
    orange: customColors.orange,
    ...{
        "poco": "#F2E530",
        "retrat": "#D9D9D9"
    },
}

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        "colors": colors,
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwindcss-line-clamp')
    ],
}
