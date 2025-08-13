module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-dupe-keys': 'error',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-raw-text': 'error',
    'no-console': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
