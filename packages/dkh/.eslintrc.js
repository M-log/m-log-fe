module.exports = {
  ...require('eslint-config-custom/base-eslint-preset'),
  ignorePatterns: ['*.js', '*.html', '*.css'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
