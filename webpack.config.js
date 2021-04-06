const Dotenv = require("dotenv-webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: ["babel-polyfill", "./src/index.js"],
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle_[hash].min.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|jpeg|bmp|gif|svg)?$/,
        loader: "file-loader",
      },
      {
        test: /\.(jsx|js)?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: 8888,
    host: "0.0.0.0",
    inline: true,
    hot: true,
    historyApiFallback: true,
  },
};
