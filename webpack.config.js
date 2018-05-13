const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js", // Inital React File
  output: {
    path: path.join(__dirname, "/dist"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Includes .jsx files, too!
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
