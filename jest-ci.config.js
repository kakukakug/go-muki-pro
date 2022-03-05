module.exports = {
  preset: "jest-expo",
  moduleFileExtensions: ["ts", "js", "tsx", "jsx", "json", "node"],
  // testMatch: ["**/__test__/**/*.test.ts"],
  testPathIgnorePatterns:["/node_modules/","-snapshot.test.tsx"],
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
