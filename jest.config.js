module.exports = {
  preset: "jest-expo",
  moduleFileExtensions: ["ts", "js", "tsx", "jsx", "json", "node"],
  transformIgnorePatterns: [],
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{js,ts,tsx,jsx}"],
  coverageDirectory: "./coverage/",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  moduleDirectories: [
    "node_modules",
    // add the directory with the test-utils.js file, for example:
    "utils",
    __dirname, // the root directory
  ],
};
