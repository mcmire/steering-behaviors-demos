const path = require("path");
const pkg = require("./package.json");
const DEBUG = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const util = require("util");

const plugins = [];

if (DEBUG) {
  plugins.push(new webpack.LoaderOptionsPlugin({ debug: true }));
}

module.exports = {
  context: path.join(__dirname, "app"),
  devtool: DEBUG ? "inline-source-map" : false,
  entry: {
    app: "./app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(html|jpe?g|svg|png)$/,
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
        include: path.resolve(__dirname, "node_modules/pixi.js"),
        use: [
          { loader: "transform-loader", options: { brfs: true } }
        ],
      },
    ]
  },
  node: {
    fs: "empty"
  },
  output: {
    path: path.resolve(pkg.config.buildDir),
    publicPath: DEBUG ? "/" : "./",
    filename: "bundle.js"
  },
  plugins: plugins,
};
