const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const Path = require('path')

// const Configuration = require('./Configuration.js')

module.exports = env=>{
  return {
    mode: env ? 'production' : 'development',
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    output: {
      path: Path.join(__dirname, 'build'),
      filename: 'bundle.js',
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
      }),
      new Dotenv({
        path: `./.env`
      }),
      ],
    devServer: {
      static: {
        directory: Path.join(__dirname, 'public'),
      },
      port: 3000
    },
  }
}
