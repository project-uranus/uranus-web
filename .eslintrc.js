module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: ['standard', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'import'],
  settings: {
    react: {
      version: 'detect'
    }
  }
}
