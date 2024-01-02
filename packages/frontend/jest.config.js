/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
  '^@components/(.*)$': '<rootDir>/src/components/$1',
  '@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['./tests/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
};
