var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.jsx',
  output: {
    filename: 'i[hash].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?modules&importLoaders=1&localIdentName=[path][local]',
        }),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'template.html' }),
    new ExtractTextPlugin('styles.css'),
  ],
};
