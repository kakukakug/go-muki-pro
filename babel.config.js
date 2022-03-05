module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
        },
      ],
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            src: "./src",
            external: "./src/04_external",
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
  };
};
