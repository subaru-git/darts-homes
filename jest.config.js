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
  setupFiles: ['fake-indexeddb/auto', 'jest-canvas-mock'],
  setupFilesAfterEnv: ['<rootDir>/src/lib/TestUtils/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
};

module.exports = async () => ({
  ...(await createJestConfig(customJestConfig)()),
  transformIgnorePatterns: ['node_modules/(?!(firebase|@firebase))'],
});
