module.exports = {
  root: true,
  extends: '@react-native',
  globals: {
    React: 'readonly',
  },
  rules: {
    'no-undef': 'off',
    'no-unreachable': 'error',
    'no-dupe-keys': 'error',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-native/no-raw-text': 'error',

    'react-native/no-inline-styles': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-console': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'react-hooks/exhaustive-deps': 'warn',

    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
