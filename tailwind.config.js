/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-gradient-blue': {
          'background-color': '#00A0F5',
          'background-image': 'linear-gradient(113.4deg, #00A0F5 0%, #00F7E6 100%)',
          'background-size': '100%',
          'background-repeat': 'no-repeat',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          '-moz-background-clip': 'text',
          '-moz-text-fill-color': 'transparent',
        },
        '.text-gradient-pink': {
          'background-color': '#F32FB8',
          'background-image': 'conic-gradient(113.4deg, #F32FB8 0%, #FDD7BE 100%)',
          'background-size': '100%',
          'background-repeat': 'no-repeat',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          '-moz-background-clip': 'text',
          '-moz-text-fill-color': 'transparent',
        },
      });
    },
  ],
}

