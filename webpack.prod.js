const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const Path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: Path.join(__dirname, "build"),
    filename: "bundle.js",
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./src/favicon.ico",
      meta: {
        description: {
          name: "description",
          content:
            "The portfolio of Ethan Cannelongo, who is a full-stack web and mobile developer with years of experience in creating quality work with integrity.",
        },
        "og:image": { property: "og:image", content: "./src/previewImg.png" },
        "og:description": {
          property: "og:description",
          content:
            "The portfolio of Ethan Cannelongo, who is a full-stack web and mobile developer with years of experience in creating quality work with integrity.",
        },
      },
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      EMAIL_SERVICE_ID: JSON.stringify(process.env.EMAIL_SERVICE_ID),
      EMAIL_TEMPLATE_ID: JSON.stringify(process.env.EMAIL_TEMPLATE_ID),
      EMAIL_USER_ID: JSON.stringify(process.env.EMAIL_USER_ID),
    }),
  ],
  devServer: {
    static: {
      directory: Path.join(__dirname, "public"),
    },
    port: 3000,
  },
};
