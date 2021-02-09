module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsConfig: 'tsconfig.test.json',
    },
  },
};
