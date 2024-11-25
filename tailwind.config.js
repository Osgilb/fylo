/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './html/*.html',
        './js/*.js'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            spacing: {
                '500': '500px',
                '700': '700px',
            }
        },
    },
    plugins: [],
}
