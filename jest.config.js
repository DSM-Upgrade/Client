module.exports = {
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif)$": "<rootDir>/src/__mocks__/fileMock.js",
  },
  testMatch: [
    "<rootDir>/**/*.test.(js|jsx|ts|tsx)",
    "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
  ],
  setupFilesAfterEnv: ["<rootDir>/src/__test__/config/importJestDOM.js"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
