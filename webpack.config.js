const path = require("path");
module.exports = {
  mode: "development",
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
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: "source-map"
};
