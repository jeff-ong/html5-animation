const path = require("path");
const isDevelopment = process.env.NODE_ENV === 'development'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "game.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["env"]
        }
      }, {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true, 
              sourceMap: isDevelopment,
            } 
          },
          {
            loader: 'sass-lodaer',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".scss"]
  },
  stats: {
    colors: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    })
  ],
  devtool: "source-map"
};
