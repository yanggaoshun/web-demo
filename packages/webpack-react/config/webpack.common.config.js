const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "js/[name].bundle.[contenthash:6].js",
    path: path.resolve(__dirname, "../dist"),
    chunkFilename: "[name].[chunkhash:6].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".less", ".scss"],
    modules: [path.resolve(__dirname, "../src"), "node_modules"],
    alias: {
      _components: path.join(__dirname, "../src/components"),
      _images: path.join(__dirname, "../src/images"),
      _pages: path.join(__dirname, "../src/pages"),
      _util: path.join(__dirname, "../src/util"),
      _mock: path.join(__dirname, "../src/mock"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "fonts",
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "url-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "images",
          limit: 8192,
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all", // 对所有类型的chunk进行拆分
      minSize: 20000, // 最小chunk大小（字节），小于这个大小的chunk不会被拆分
      //   maxSize: 0, // 最大chunk大小（字节），0表示不限制
      minChunks: 1, // 最小chunk引用次数，至少被引用一次的模块才会被拆分
      maxAsyncRequests: 30, // 按需加载时的最大并行请求数
      maxInitialRequests: 30, // 入口点的最大并行请求数
      automaticNameDelimiter: "~", // chunk名称分隔符
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/, // 匹配node_modules中的模块
          priority: -10, // 优先级，数值越大优先级越高
          reuseExistingChunk: true, // 如果当前chunk包含已从主bundle中拆分出的模块，则将重用它，而不是生成新的chunk
        },
        default: {
          minChunks: 2, // 至少被引用两次的模块才会被拆分
          priority: -20, // 优先级
          reuseExistingChunk: true, // 重用已存在的chunk
        },
      },
    },
  },
  plugins: [new CleanWebpackPlugin()],
};
