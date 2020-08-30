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
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  }
}