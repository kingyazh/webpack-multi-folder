const webpack = require("webpack");
const Merge = require("webpack-merge");
const webpackCommon = require('./webpack.common');
const publicPath = process.env.ASSET_PATH || '/';
const API_ROOT = require('./api.path');

module.exports = Merge(webpackCommon, {

  mode: "development",
  // source map
  devtool: "source-map",
  module: require("./module.dev"),
  // dev server
  devServer: {
    port: 30003,
    host: "localhost",
    // open:true,
    hot:true,
    inline: true,
    historyApiFallback: true,
    noInfo: false,
    stats: "minimal",
    publicPath: publicPath,
    watchContentBase: true,
    watchOptions: {
      poll: 1000, //监测修改的时间
      aggregateTimeout: 300,  //防止重复按键，300毫秒内算按一次
      ignored:'/node_modules/'
      
    },
    // 接口做代理，避免开发环境中接口涉及跨域
    // proxy: {
    //   "rest/*": {
    //     target: "http://domain.com:8080/visacloud/rest/",
    //     changeOrigin: true,
    //     pathRewrite: { "^/api": "" }
    //   }
    // }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //引入热更新插件
    new webpack.SourceMapDevToolPlugin({
      filename: "map/[name].js.map"
    }),
    new webpack.DefinePlugin({
      "process.env": API_ROOT
    })
  ]
});