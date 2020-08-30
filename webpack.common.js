var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. injects styles into DOM
          'css-loader',   // 2. turns css into commonJS
          'sass-loader'   // 1. turns scss into css
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/template.html'
  })]
}