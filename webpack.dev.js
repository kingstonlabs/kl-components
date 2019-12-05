const webpack = require("webpack")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")


module.exports = merge(common, {
  mode: "development",
  output: {
    publicPath: "http://localhost:8080/build/"
  },
  devtool: "cheap-source-map",
  watch: true,
  watchOptions: {
    poll: true
  },
  performance: {
    hints: false
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development"
    })
  ]
})
