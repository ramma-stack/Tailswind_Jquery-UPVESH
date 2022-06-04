module.exports = {
  content: [
    './html/**/*.html',
    './html/**/*.php',
    './html/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    extend: {
      'font-family': ['Raleway']
    },
  },
  variants: {
    extend: {},
  },
}