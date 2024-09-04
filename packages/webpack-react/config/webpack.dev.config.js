const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        enforce: "pre",
        exclude: /@babel(?:\/|\\{1,2})runtime/,
        test: /\.(js|mjs|jsx|ts|tsx|css)$/,
        loader: "source-map-loader",
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 9000,
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      inject: "body",
      hash: false,
    }),
  ],
});
