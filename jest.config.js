module.exports = {
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': 'ts-jest',
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/*.test.(js|jsx|ts|tsx)'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|webp)$': '<rootDir>/mocks/fileMock.js',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  reporters: ['default', 'jest-junit'],
};
