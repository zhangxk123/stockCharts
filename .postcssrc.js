// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      browsers: ['Android>=4.0', 'iOS>=7']
    },
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      // viewportHeight:667,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', 'hairlines'],
      minPixelValue: 10,
      mediaQuery: false
    },
    "cssnano": {}
  }
}
