module.exports = {
    "env": {
      "browser": true,
      "node": true,
      "jest": true,
      "commonjs": true,
      "es2021": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "overrides": [],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "plugins": [
      "react",
      "unused-imports"
    ],
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    "rules": {
      "unused-imports/no-unused-imports": "error"
    }
  };
  