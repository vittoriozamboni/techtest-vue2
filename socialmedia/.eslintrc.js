// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: ['vue'],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // semicolons
    'semi': ['warn', 'always', {'omitLastInOneLineBlock': true}],
    // allow multiple empty lines
    'no-multiple-empty-lines': ['error', {'max': 2}],
    // indentation
    'indent': ['warn', 2],
    // comma allowed if parenthesis is on a new line
    'comma-dangle': ['error', 'only-multiline'],

    // VUE
    // force kebab case (my-component)
    'vue/name-property-casing': ['error', 'kebab-case'],
  }
}
