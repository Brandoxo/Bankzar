    @type {import('tailwindcss').Config}
    module.exports = {
        darkMode: 'class',
        content: ['./src/**/*.{html,js]'],
        theme: {
            extend: {
                screens:{
                    'tablet': '900px',
                }
            },
        },
        plugins:[],
    }