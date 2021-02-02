const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: ["babel-polyfill", "./src/index.js"],
  },
  resolve: {
    extensions: [".js"],
  },
  output: {
    publicPath: "/",
    path: path.join(__dirname, "/dist"),
    filename: "bundle.min.[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
      {
        test: /\.(jpg|png|jpeg|bmp|gif|svg|ico)?$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: 8888,
    host: "0.0.0.0",
    historyApiFallback: true,
  },
};
