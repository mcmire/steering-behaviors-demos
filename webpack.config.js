const path = require("path");
const util = require("util");
const autoprefixer = require("autoprefixer");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const pkg = require("./package.json");

const BUILD_DIR = pkg.config.buildDir;
const DEV = process.env.NODE_ENV !== "production";
const OUTPUT_PATH = path.resolve(BUILD_DIR);

function determineDevtool() {
  if (DEV) {
    return "cheap-module-eval-source-map";
  } else {
    return false;
  }
}

function determinePublicPath() {
  if (DEV) {
    return "/";
  } else {
    return "./";
  }
}

module.exports = {
  context: path.join(__dirname, "app"),
  devtool: determineDevtool(),
  entry: {
    app: "./index.ts"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader", "sass-loader"]
        })
      },
      {
        test: /\.pug$/,
        use: "pug-loader"
      },
      {
        test: /\.(jpe?g|svg|png)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[path][name].[ext]" }
          }
        ]
      },
      {
        test: /\.json$/,
        include: path.join(__dirname, "node_modules", "pixi.js"),
        exclude: /node_modules/,
        use: "json"
      },
      {
        test: /\.js$/,
        enforce: "post",
        include: path.join(__dirname, "node_modules", "pixi.js"),
        use: [
          {
            loader: "transform-loader",
            options: { brfs: true }
          }
        ]
      }
    ]
  },
  node: {
    fs: "empty"
  },
  output: {
    path: OUTPUT_PATH,
    publicPath: determinePublicPath(),
    filename: "[name].bundle.js"
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: DEV,
    }),
    new ExtractTextPlugin("index.css"),
    new HtmlWebpackPlugin({
      template: "index.pug",
      inject: "body",
      filename: "index.html"
    })
  ]
};
