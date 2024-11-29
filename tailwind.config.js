/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#100e34',
      primary: {
        600: '#ffd35f',
        DEFAULT: '#ffbf18',

      },
      secondary: {
        200: '#28264c', //opacity 4%
        400: '#cbd5e1',
        600: '#535177',
        DEFAULT: '#28264c',
      },
      tertiary: {
        DEFAULT: '#4f48ec',
      },
      alert: {
        danger: "#FF4E4E",
        success: "#90DA1A",
        warning: "#FEB72F",
      }
    },
    fontSize: {
      '8xl': ['120px', { /* pour display*/
        lineHeight: '120px',
        letterSpacing: '-6px',
        fontWeight: '500',
      }],

      '7xl': ['70px', { /*pour h1 */
        lineHeight: '80px',
        letterSpacing: '-4.5px',
        fontWeight: '600',
      }],

      '6xl': ['55px', { /*pour h2 */
        lineHeight: '60px',
        letterSpacing: '-2.5px',
        fontWeight: '500',
      }],

      '5xl': ['48px', { /*pour h3 */
        lineHeight: '54px',
        letterSpacing: '-1.6px',
        fontWeight: '500',
      }],

      '4xl': ['36px', { /*pour h4 */
        lineHeight: '44px',
        letterSpacing: '-1.2px',
        fontWeight: '500',
      }],

      '3xl': ['28px', { /*pour h5 */
        lineHeight: '34px',
        letterSpacing: '-0.8px',
        fontWeight: '500',
      }],

      '2xl': ['24px', { /*pour lead regular */
        lineHeight: '30px',
        letterSpacing: '-1px',
        fontWeight: '400',
      }],

      'xl': ['24px', { /*pour lead medium */
        lineHeight: '30px',
        letterSpacing: '-1px',
        fontWeight: '400',
      }],

      'lg': ['21px', { /*pour le body-lg*/
        lineHeight: '30px',
        letterSpacing: '-0.800000011920929px',
        fontWeight: '400',
      }],

      'base': ['17px', { /*pour le body-base*/
        lineHeight: '25px',
        letterSpacing: '-0.69999998079071px',
        fontWeight: '400',
      }],

      'sm': ['15px', { /*pour le body-sm*/
        lineHeight: '23px',
        letterSpacing: '-0.6000000238418579px',
        fontWeight: '400',
      }],

      'caption1': ['20px', {
        lineHeight: '24px',
        letterSpacing: '-0.6000000238418579px',
        fontWeight: '400',
      }],

      'caption2': ['18px', {
        lineHeight: '20px',
        letterSpacing: '-0.30000001192092896px',
        fontWeight: '400',
      }],

      'caption3': ['16px', {
        lineHeight: '18px',
        letterSpacing: '-0.5px',
        fontWeight: '400',
      }],

      'caption4': ['13px', {
        lineHeight: '15px',
        letterSpacing: '-0.2000000298023224px',
        fontWeight: '400',
      }],
    },
    borderRadius: {
      DEFAULT: '10px',
      full: '100%',
    },
    extend: {
      spacing: {
        '194': '194px',
        '85': '85px',
        '240': '240px',
      },
      width: {
        '85': '85.14px',
        '218': '218px',
        '240': '240.07px',
        '48': '48px',
        '10': '40px',
      },
      height: {
        '95': '95.01px',
        '24': '24px',
        '85': '85.3px',
        '10': '40px',
      },
      inset: {
        '135': '135px',
        '72': '72px',
        '144': '144px',
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans]
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }
}
