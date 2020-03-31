module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true
  },
  plugins: ['mocha'],
  extends: ['airbnb-base', 'plugin:mocha/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'mocha/no-mocha-arrows': 0,
    'comma-dangle': ['error', 'only-multiline'],
    'no-unused-expressions': 0,
    'object-curly-newline': 0,
    'arrow-parens': 0
  }
};
