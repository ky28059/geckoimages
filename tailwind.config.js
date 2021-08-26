module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            zIndex: {
                '-10': '-10',
                '-20': '-20',
            },
            backgroundImage: theme => ({
                'geckos': 'url("../public/background.png")',
            }),
            fontSize: {
                '12xl': '12rem',
                '15xl': '15rem',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
