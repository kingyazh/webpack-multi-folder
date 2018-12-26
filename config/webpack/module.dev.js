const moduleCommon = require("./module.common");
moduleCommon.rules.push(
  // css loader
  {
    test: /\.css$/,
    use: [
      {
        loader: "style-loader",
        options: {
          sourceMap: true
        }
      },
      // 'css-loader?importLoaders=1', //对于css中@import进来的css同样做前缀处理
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
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
  }
);

moduleCommon.rules.push(
  // scss to css
  {
    test: /\.scss$/,
    use: [
      {
        loader: "style-loader",
        options: {
          sourceMap: true
        }
      },
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
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
  }
);
