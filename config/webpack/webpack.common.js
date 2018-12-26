const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const outputPath = path.join(__dirname, process.env.NODE_ENV === 'dev'?'dev':'dist');

module.exports = {
  // entry: require("./entry.config"),
  entry: require("../control/get.folders"),
};

// module.exports = {
//   entry: require("./webpack-config/entry.config.js"),
//   output: require("./webpack-config/output.config.js"),
//   module: require("./webpack-config/module.product.config.js"), //prod
//   resolve: require("./webpack-config/resolve.config.js"),
//   plugins: require("./webpack-config/plugins.product.config.js"), //prod
//   externals: require("./webpack-config/externals.config.js")
// };

// module.exports = {
//   entry: require("./webpack-config/entry.config.js"),
//   output: require("./webpack-config/output.config.js"),
//   module: require("./webpack-config/module.dev.config.js"), //dev
//   resolve: require("./webpack-config/resolve.config.js"),
//   plugins: require("./webpack-config/plugins.dev.config.js"), //dev
//   externals: require("./webpack-config/externals.config.js"),
//   devServer: require("./webpack-config/devServer.config.js") //dev
// };
