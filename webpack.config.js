var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  // mode can have 'development', 'production', 'none'
  mode: 'development',
  // if devtool is none then , eval will not be there in webpack
  devtool: 'none',
  // entry defines where webpack should start its build
  entry: "./src/index.js",
  // output defines where output file should  be 
  output: {
    // [contenthash] is used to generate a hash. This is used for cache busting
    // when we reload the page, browser will take the script tag from cache
    // if script with same name is generated even making changes
    // then file from cache will be considered, not the new one.
    // contenthash changes if there is any changes in the file
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
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