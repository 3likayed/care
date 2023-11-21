/* eslint-env node */

const plugin = require("tailwindcss/plugin");

module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/Dashboard/js/**/*.{js,vue}",

    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {

        asideScrollbars: {
            light: "light",
            gray: "gray",
        },
        fontFamily: {
            'main': ['Almarai', 'sans-serif'],
            'cairo': ['Cairo', 'sans-serif'],
        },
        extend: {
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        '--tw-prose-body': 'black',
                        '--tw-prose-headings': 'inherit',
                        '--tw-prose-lead': 'inherit',
                        '--tw-prose-links': 'inherit',
                        '--tw-prose-bold': 'inherit',
                        '--tw-prose-counters': 'inherit',
                        '--tw-prose-hr': 'inherit',
                        '--tw-prose-quotes': 'inherit',
                        '--tw-prose-quote-borders': 'inherit',
                        '--tw-prose-captions': 'inherit',
                        '--tw-prose-code': 'inherit',
                        '--tw-prose-pre-code': 'inherit',
                        '--tw-prose-pre-bg': 'inherit',
                        '--tw-prose-th-borders': 'inherit',
                        '--tw-prose-td-borders': 'inherit',
                        '--tw-prose-invert-body': 'inherit',
                        '--tw-prose-invert-headings': 'inherit',
                        '--tw-prose-invert-lead': 'inherit',
                        '--tw-prose-invert-links': 'inherit',
                        '--tw-prose-invert-bold': 'inherit',
                        '--tw-prose-invert-counters': 'inherit',
                        '--tw-prose-invert-hr': 'inherit',
                        '--tw-prose-invert-quotes': 'inherit',
                        '--tw-prose-invert-quote-borders': 'inherit',
                        '--tw-prose-invert-captions': 'inherit',
                        '--tw-prose-invert-code': 'inherit',
                        '--tw-prose-invert-pre-code': 'inherit',
                        '--tw-prose-invert-pre-bg': 'inherit',
                        '--tw-prose-invert-th-borders': 'inherit',
                        '--tw-prose-invert-td-borders': 'inherit',
                    },
                },
            }),

            zIndex: {
                "-1": "-1",
            },
            flexGrow: {
                5: "5",
            },
            scale: {
                '-100': '-1'
            },
            maxHeight: {
                "screen-menu": "calc(100vh - 3.5rem)",
                modal: "calc(100vh - 160px)",
            },
            screens: {
                'xl': '1140px   ',
            },
            transitionProperty: {
                position: "right, left, top, bottom, margin, padding",
                textColor: "color",
            },
            fontSize: {
                xsm: ['12px', '17px'],
                sm: ['15px', '20px'],
                base: ['16px', '22.5px'],
                lg: ['20px', '23.24px'],
                xl: ['24px', '28px'],
                '2xl': ['30px', '34px'],
                '3xl': ['34px', '38px'],
            },
            keyframes: {
                "fade-out": {
                    from: {opacity: 1},
                    to: {opacity: 0},
                },
                "fade-in": {
                    from: {opacity: 0},
                    to: {opacity: 1},
                },
            },
            animation: {
                "fade-out": "fade-out 250ms ease-in-out",
                "fade-in": "fade-in 250ms ease-in-out",
            },
            boxShadow: {
                'b': '0px 9px 20px -22px rgba(0,0,0,0.5)',
            }
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require('@tailwindcss/typography'),
        plugin(function ({matchUtilities, theme}) {
            matchUtilities(
                {
                    "aside-scrollbars": (value) => {
                        const track = value === "light" ? "100" : "900";
                        const thumb = value === "light" ? "300" : "600";
                        const color = value === "light" ? "gray" : value;

                        return {
                            scrollbarWidth: "thin",
                            scrollbarColor: `${theme(`colors.${color}.${thumb}`)} ${theme(
                                `colors.${color}.${track}`
                            )}`,
                            "&::-webkit-scrollbar": {
                                width: "8px",
                                height: "8px",
                            },
                            "&::-webkit-scrollbar-track": {
                                backgroundColor: theme(`colors.${color}.${track}`),
                            },
                            "&::-webkit-scrollbar-thumb": {
                                borderRadius: "0.25rem",
                                backgroundColor: theme(`colors.${color}.${thumb}`),
                            },
                        };
                    },
                },
                {values: theme("asideScrollbars")}
            );
        }),
    ],
};
