# eslint-plugin-cubyn

EsLint rules for Javascript

## Usage

```js

// 1. add a .eslintrc file at the root of your project
{ "extends": ["cubyn"] }

// 2. add required dependencies
yarn add --save-dev eslint@^3.13.0
yarn add --save-dev babel-eslint@^7.1.1

// 3. then simply add an NPM script
{ "scripts": { "lint": "eslint src" } }
```

You might want to customize the eslint rules configured by default, *but in very exceptional circomstances* 😈.