export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': ['babel-jest', { configFile: './.babelrc' }],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$))'
  ],
  moduleFileExtensions: ['js', 'jsx', 'mjs'],
};