const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^dexie$': require.resolve('dexie'),
  },
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['<rootDir>/data/'],
  setupFiles: ['fake-indexeddb/auto'],
};

module.exports = createJestConfig(customJestConfig);
