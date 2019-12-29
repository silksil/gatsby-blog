const path = require("path");

module.exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@packages": path.resolve(__dirname, "src/packages/"),
        "@components": path.resolve(__dirname, "src/components/"),
        "@layout": path.resolve(__dirname, "src/layout/")
      }
    }
  });
};
