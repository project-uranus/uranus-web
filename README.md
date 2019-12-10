# Uranus Web

[![Build Status](https://github.com/project-uranus/uranus-web/workflows/uranus/badge.svg)](https://github.com/project-uranus/uranus-web/actions)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run

```shell
yarn install
yarn start
```

## Build

```shell
yarn build
```

## Configuration

In `.vscode/settings.json`:

```json
// eslint
"eslint.enable": true,
"eslint.autoFixOnSave": true,
"eslint.validate": [
  "javascript",
  "javascriptreact",
  {
    "language": "typescript",
    "autoFix": true
  },
  {
    "language": "typescriptreact",
    "autoFix": true
  }
],

// prettier
"editor.formatOnSave": true,
"prettier.configPath": ".prettierrc.js",
"prettier.singleQuote": true,
"prettier.trailingComma": "none",
"prettier.semi": false,
"prettier.useTabs": false,
"prettier.tabWidth": 2,
```

## License

MIT
