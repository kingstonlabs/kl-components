const path = require("path")
const webpack = require("webpack")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const autoprefixer = require("autoprefixer")


module.exports = {
  context: __dirname,
  entry: [
    "whatwg-fetch",
    "@babel/polyfill",
    "./src/index.jsx"
  ],
  output: {
    filename: "js/[name].[hash].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/static/"
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
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
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "img/",
              name: "[name].[hash].[ext]",
              useRelativePath: true
            }
          }
        ]
      },
      {
        test: /.(ttf|otf|opentype|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "fonts/",
              exclude: [path.resolve(__dirname, "src/img")]
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          autoprefixer: true,
          discardComments: {
            removeAll: true
          }
        }
      })
    ]
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".jsx", ".json"]
  },
  plugins: [
    new CopyWebpackPlugin([{from:"src/img", to:"img"}]),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en-gb|en-ca/)
  ]
}
