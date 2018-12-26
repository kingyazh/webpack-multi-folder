const webpack = require("webpack");
const Merge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpackCommon = require('./webpack.common');
const API_ROOT = require("./api.path");

module.exports = Merge(moduleCommon, {
  mode: "production",
  devtool: "source-map",
  module: require("./module.prod"),
  plugins: [
    new ExtractTextPlugin("css/[name].css"),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      "process.env": API_ROOT
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({}) // use OptimizeCSSAssetsPlugin
    ]
  }
});


// module.exports = {
//   entry: require("./entry.config.js"),
//   output: require("./output.config.js"),
//   module: require("./webpack-config/module.product.config.js"), //prod
//   resolve: require("./webpack-config/resolve.config.js"),
//   plugins: require("./webpack-config/plugins.product.config.js"), //prod
//   externals: require("./webpack-config/externals.config.js")
// };
