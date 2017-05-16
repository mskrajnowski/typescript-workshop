const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const distDir = path.join(__dirname, './dist');

module.exports = {
  entry: {
    main: './src/main.tsx',
  },
  output: {
    filename: '[name].[hash].js',
    path: distDir,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.(tsx?|jsx?)$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin([distDir]),
  ],
};