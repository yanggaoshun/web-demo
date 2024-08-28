const { merge } = require("webpack-merge");
const common = require("./webpack.common.config.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      // css压缩
      new CssMinimizerPlugin(),
      // js压缩
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // 屏蔽log
            drop_debugger: true, // 屏蔽debugger
          },
        },
      }),
    ],
  },

  module: {
    rules: [
      //   {
      //     test: /\.css$/,
      //     use: [
      //       "style-loader", // 将 JS 字符串生成为 style 节点
      //       "css-loader", // 将 CSS 转化成 CommonJS 模块
      //     ],
      //   },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
      inject: "body",
      minify: {
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "style/[name].[contenthash:6].css",
    }),
  ],
});
