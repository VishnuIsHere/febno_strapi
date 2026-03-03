/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  testMatch: [
    '**/test/**/*.test.ts',
    '**/?(*.)+(spec|test).ts'
  ],

  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text'],

  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/api/**/routes/*.ts',
    '!src/api/**/controllers/*.ts',
    '!src/api/**/services/*.ts',
    '!src/index.ts',
  ],
};