/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0)",
          },
          to: {
            opacity: "0",
            transform: "translateY(30%)",
          },
        },
      },
      animation: {
        "fade-out-down": "fade-out-down linear forwards",
      },
      supports: {
        "no-scroll-driven-animations": "not(animation-timeline: scroll())",
      },
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

