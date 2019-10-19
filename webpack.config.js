const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: false,
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(otf|woff|woff2|eot|ttf|)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: "./index.html",
        to: "./index.html"
      },
      {
        from: "./src/assets/",
        to: "images"
      }
    ])
  ]
};
