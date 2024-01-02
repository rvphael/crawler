/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@backend/(.*)$': '<rootDir>/src/$1',
    'uuid': require.resolve('uuid')
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
  ],
  coverageDirectory: "coverage",
};
