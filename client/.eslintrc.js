module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended', 'airbnb', 'plugin:react/recommended', 'prettier'],
  env: {
    browser: true,
    node: true
  },
  rules: {
    'import/prefer-default-export': 0
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};