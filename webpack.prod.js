const webpack = require("webpack")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const autoprefixer = require("autoprefixer")


module.exports = merge.smart(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: true,
              plugins: [
                autoprefixer()
              ]
            }
          },
          {
            loader: "resolve-url-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "react": "preact-compat",
      "react-dom": "preact-compat",
    },
  },
  plugins: [
    new webpack.DefinePlugin(JSON.stringify("production")),
    new MiniCssExtractPlugin({filename: "css/styles.[hash].css"}),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production"
    })
  ]
})
