const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        shakering: {
          "0%, 100%": {
            transform: "rotate(0deg)"
          },
          "25%": {
            transform: "rotate(10deg)"
          },
          "50%": {
            transform: "rotate(-10deg)"
          },
          "75%": {
            transform: "rotate(10deg)"
          }
        }
      },
      animation: {
        shake: "shakering 0.5s ease-in-out infinite"
      },
      colors: {
        modalbg: "rgba(0, 0, 0, 0.5)",
        // bgsidebar: "#4a044e",
        // text: 'rgb(149, 134, 165)',
        // link: "rgba(149, 134, 165, 0.3)",
        golden: "#FFD700",
        // bgsidebar2: 'rgb(7, 69, 145)',
        // text2: 'rgb(174, 214, 241)',
        // link2: 'rgba(174, 214, 241, 0.3)',
        bgsidebar: 'rgb(7, 69, 145)',
        text: 'rgba(255, 255, 254, 0.7)',
        link: 'rgba(255, 255, 254, 0.3)',
        bghighlight: 'rgba(255, 255, 255, 0.8)'
      },
      screens: {
        sm: "770px",
        md: "960px",
        lg: "1220px"
      },
      fontFamily: {
        nunito: ['nunito sans'],
        picifico: ['pacifico'],
        orbi: ['orbitron'],
        inter: ['inter'],
        ultra: ['ultra'],
        poppins: ['poppins'],
        sans: ['Inter var'],
      },
      fontSize: {
        sm: "12px", // Small size
        base: "14px", // Base size
        md: "16px", // Medium size
        lg: "20px", // Large size
        xl: "24px", // Extra-large size
        "2xl": "30px" // 2X large size
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require(
      'flowbite/plugin'
    )
  ]
}
