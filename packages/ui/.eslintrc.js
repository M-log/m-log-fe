module.exports = {
  ...require('eslint-config-custom/base-eslint-preset'),
  ignorePatterns: ['*.js'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
