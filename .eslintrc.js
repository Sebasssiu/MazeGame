module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
    'html',
  ],
  rules: {
    semi: ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'no-undef': 'off',
    'react/jsx-no-undef': 'off',
    'no-restricted-globals': 'off',
  },
  globals: {
    React: true,
    Maze: true,
    Menu: true,
    Winner: true,
  },
}
