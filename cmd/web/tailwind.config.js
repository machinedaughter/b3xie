/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/*.html'],
  theme: {
      fontFamily: {
        sans: ["Iosevka", "sans-serif"],
        mono: ["Iosevka", "monospace"],
        serif: ["Iosevka", "serif"],
      },
      extend: {
        colors: {
          'greenHighlight' : '#04E000',
          'purpleMedium' : '#8A2C5C',
          'pinkText' : '#D90070',
          'blackBex' : '#0E0F0E',
          'purpleDark' : '#572B42',
          'whiteText' : '#F7F7F7'
        }
      }

  }
}

