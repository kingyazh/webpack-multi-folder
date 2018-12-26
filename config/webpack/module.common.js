const eslintFormatter = require("eslint-friendly-formatter");
module.exports = {
  rules: [
    {
      test: /\.js$/,
      enforce: "pre",
      loader: "eslint-loader",
      //   exclude: /bootstrap/,
      options: {
        formatter: eslintFormatter,
        fix: true
      }
    },
    {
      test: /\.js$/,
      loader: "babel-loader",
      options: {
        presets: [["es2016", { loose: true }]],
        cacheDirectory: true,
        plugins: ["transform-runtime"]
      }
    },
    {
      test: /\.(html)$/,
      use: [
        {
          loader: "html-loader",
          options: {
            attrs: ["img:src", "link:href"]
          }
        }
      ]
    },
    {
      // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
      // 如下配置，将小于8192byte的图片转成base64码
      test: /\.(jpg|png|gif)$/,
      // loader: 'url-loader?limit=8192&name=./static/img/[hash].[ext]',
      loader: "url-loader",
      options: {
        limit: 8192,
        name: "img/[hash:7].[ext]"
      }
    },
    {
      test: /\.(ico)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            limit: 8192,
            name: "[hash:7].[ext]",
            outputPath: "img/"
          }
        }
      ]
    },
    {
      // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
      test: /\.(woff|woff2?|svg|eot|ttf|otf)\??.*$/,
      // exclude: /glyphicons/,
      // loader: 'file-loader?name=static/fonts/[name].[ext]',
      loader: "file-loader",
      options: {
        name: "[name].[hash].[ext]",
        outputPath: "font/"
      }
    },
    // json data chunk
    {
      test: /\.(json)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            limit: 8192,
            name: "[name].[ext]?[hash:7]",
            outputPath: "data/"
          }
        }
      ]
    }
  ]
};
