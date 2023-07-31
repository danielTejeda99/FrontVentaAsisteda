const presets = [
  ['@babel/preset-env', { /* opciones de preset-env */ }],
  ['@babel/preset-react', { runtime: 'automatic' }],
  '@babel/preset-typescript',
];

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  setupFilesAfterEnv: ['jest-fetch-mock'],
  transformIgnorePatterns: [],
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets }],
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // ModuleNameMapper sólo si ocupamos importar CSS en nuestros componentes para el testing
  // moduleNameMapper: {
  //     '\\.(css|less)$': '<rootDir>/tests/mocks/styleMock.js',
  // },
}