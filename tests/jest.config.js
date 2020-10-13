module.exports = {
  name: 'client',
  displayName: 'Client Tests',
  verbose: true,
  transform: { "\\.ts$": ["ts-jest"] },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["js", "jsx"],
  transform: { "^.+\\.(mjs|jsx|js)$": "babel-jest" },
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};