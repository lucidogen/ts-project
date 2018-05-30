module.exports = {
  collectCoverage: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  rootDir: '..',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '\\.test\\.tsx?$',
  testPathIgnorePatterns: ['/lib/', '/node_modules/', '/setup/'],
  // What is here must reflect exactly what is in tsconfig
  moduleNameMapper: {
    '^test$': '<rootDir>/setup/test',
  },
}
