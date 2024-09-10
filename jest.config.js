module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '^.+\\.css$': ['jest-transform-css', { modules: true }],
    '^.+\\.scss$': 'jest-scss-transform',
  },
}
