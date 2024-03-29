module.exports = {
    "env": {
        "es6": true
    },
    "extends": [
        'airbnb',
        'prettier',
        'prettier/react'
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        __DEV__: 'readonly'
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [
          'warn',
          { extensions: ['.jsx', '.js'] }
      ],
      'react/prefer-stateless-function': 'off',
      'import/prefer-default-export': 'off',
      'react/state-in-constructor': 'off',
      'react/static-property-placement': 'off',
      'no-param-reassign': 'off',
      'no-console': ["error", { allow: ["tron"] }]
    }
};
