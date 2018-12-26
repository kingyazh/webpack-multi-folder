const moduleCommon = require("./module.common");
moduleCommon.rules.push(
  // css loader
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: [
        {
          loader: "css-loader",
          options: {
            sourceMap: true
          }
        },
        {
          loader: "postcss-loader",
          options: {
            sourceMap: true
          }
        },
        {
          loader: "resolve-url-loader",
          options: {
            sourceMap: true
          }
        }
      ]
    })
  }
);

moduleCommon.rules.push(
  // scss to css
  {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: [
        {
          loader: "css-loader",
          options: {
            sourceMap: true
          }
        },
        {
          loader: "postcss-loader",
          options: {
            sourceMap: true
          }
        },
        {
          loader: "resolve-url-loader",
          options: {
            sourceMap: true
          }
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }
      ]
    })
  }
);
